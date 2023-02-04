import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";
// import { setAuthToken } from "../../Auth/Auth";

const Register = () => {
  // contexts
  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    loading,
    setLoading,
    user,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // form function
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const registerData = {
      name,
      email,
      password,
      image,
    };
    console.log(registerData);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_CODE}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.display_url);
        // create user
        createUser(email, password).then((result) => {
          // get token
          // setAuthToken(result.user);
          const currentUser = {
            email: result?.user?.email,
          };
          fetch(`http://localhost:5000/user/${result?.user?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("airbnb-token", data.token);
            });
          // profile update
          updateUserProfile(name, data.data.display_url).then((result) => {
            // email verify
            verifyEmail().then(() => {
              toast.success("please Chack your email for verification");
            });
            setLoading(false);
            navigate(from, { replace: true });
          });
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-orange-500 my-10">
        Create An Account
      </h1>
      <div className="bg-slate-100 shadow-lg p-16 w-1/3 rounded-lg mx-auto">
        <form onSubmit={handleRegister}>
          <div className="text-center">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="input input-bordered input-info rounded-lg w-full max-w-xs text-center"
            />
          </div>
          <div className="text-center mt-4">
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              required
              className="input input-bordered input-info rounded-lg w-full max-w-xs text-center"
            />
          </div>
          <div className="text-center mt-4">
            <label htmlFor="image">Select image</label>
            <br />
            <input type="file" name="image" />
          </div>
          <div className="text-center mt-4">
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              required
              className="input input-bordered input-info w-full rounded-lg max-w-xs text-center"
            />
          </div>
          <div className="text-center my-4">
            <motion.input
              whileHover={{ scale: 0.9 }}
              type="submit"
              value="Sign Up"
              className="btn btn-outline btn-accent rounded-lg w-full max-w-xs "
            />
          </div>
          <Toaster></Toaster>
        </form>
      </div>
    </div>
  );
};

export default Register;
