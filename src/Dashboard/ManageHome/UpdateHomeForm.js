import React from "react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { updateHomeInfo } from "../../Components/Api/HomeService";

const UpdateHomeForm = () => {
  const homes = useLoaderData();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const updateHomeData = {
      location,
      title,
      price,
      total_guest,
      bedrooms,
      bathrooms,
      description,
    };

    fetch(`http://localhost:5000/home/${homes._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateHomeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Data Updated");
        }
        navigate("/dashboard/manage-home");
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                defaultValue={homes?.location}
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                defaultValue={homes?.title}
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  defaultValue={homes?.price}
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  defaultValue={homes?.total_guest}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  defaultValue={homes?.bedrooms}
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  defaultValue={homes?.bathrooms}
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 "
                name="description"
                defaultValue={homes?.description}
              ></textarea>
            </div>

            <button
              type="submit"
              className="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none"
            >
              Submit
            </button>
            <ToastContainer></ToastContainer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHomeForm;
