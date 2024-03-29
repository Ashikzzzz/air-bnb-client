import React, { useContext, useState } from "react";
import { format } from "date-fns";

// import { addHome } from "../api/services";

import AddServiceForm from "./AddServiceForm";
import { getImageUrl } from "../../Components/Api/ImageUrl";
import { AuthContext } from "../../contexts/AuthProvider";
import { addHome } from "../../Components/Api/HomeService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadImage, setUploadImage] = useState("Upload Image");
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  );
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = format(arrivalDate, "P");
    const to = format(departureDate, "P");
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];
    setLoading(true);
    getImageUrl(image)
      .then((data) => {
        const homeData = {
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data,
          hostEmail: user?.email,
        };
        console.log(homeData);

        addHome(homeData).then((data) => {
          setLoading(false);
          console.log(data);
          toast.success("Home Added Successful");
          navigate("/dashboard/manage-home");
        });
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setPreview(window.URL.createObjectURL(image));
    setUploadImage(image.name);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Home
      </h1>
      <AddServiceForm
        handleSubmit={handleSubmit}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        loading={loading}
        toast={toast}
        preview={preview}
        uploadImage={uploadImage}
        handleImageChange={handleImageChange}
      />
    </>
  );
};

export default AddHome;
