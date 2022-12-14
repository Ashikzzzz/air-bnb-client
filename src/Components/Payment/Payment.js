import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = ({ handleBooking }) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-10">Payment Selection</h1>

      <textarea
        className="border block my-5 p-2 ml-16"
        placeholder="Insert your payment credentials here!"
        name=""
        id=""
        cols="60"
        rows="10"
      ></textarea>

      <button
        className="p-2 rounded-md btn btn-outline  my-4"
        onClick={handleBooking}
      >
        Go for Pay
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Payment;
