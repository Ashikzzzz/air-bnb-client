import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import BecomeHostForm from "../Form/BecomeHostForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getImageUrl } from "../../Components/Api/ImageUrl";
import { getRole, hostRequest } from "../../Components/Api/user";
import { useState } from "react";
import { useEffect } from "react";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // user role fatching
  useEffect(() => {
    setLoading(false);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  // loading
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];

    getImageUrl(image).then((data) => {
      const hostData = {
        location: location,
        docImage: data,
        role: "requested",
        email: user?.email,
      };
      // sending host request
      hostRequest(hostData).then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <>
      {role ? (
        <div className="mt-40">
          <h1 className="text-5xl font-bold">
            Y<span className="text-orange-600">O</span>ur request send. Wait f
            <span className="text-orange-600">O</span>r Admin Appr
            <span className="text-orange-600">O</span>val
          </h1>
        </div>
      ) : (
        <>
          {!loading && (
            <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
          )}
        </>
      )}
    </>
  );
};

export default BecomeAHost;
