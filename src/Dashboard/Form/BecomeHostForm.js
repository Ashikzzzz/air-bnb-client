import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BecomeHostForm = ({ handleSubmit }) => {
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label
            className="font-bold text-sm block text-gray-800 mb-2"
            htmlFor="location"
          >
            {" "}
            Your Location
          </label>
          <input
            className="input input-bordered input-info  lg:w-1/3 w-full rounded-xl"
            type="text"
            name="location"
            placeholder="Add city, Landmark or address"
            id=""
          />
        </div>

        <div className="mt-6">
          <input
            className="input input-bordered input-info  lg:w-1/3 w-full rounded-xl"
            type="file"
            name="image"
            placeholder="Upload your image"
            id=""
          />
        </div>
        <button
          className="btn btn-outline btn-success rounded-xl mt-4"
          type="submit"
        >
          Sending Request
        </button>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default BecomeHostForm;
