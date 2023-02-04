import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "../../Components/Modal/DeleteModal";

const TableRow = ({ booking, i, refetch }) => {
  const modalHandler = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Deleted SuccessFully");
          refetch();
        }
        // console.log(data);
      });

    // console.log(booking._id);
  };

  return (
    <tr key={booking._id} className="w-full">
      <th>{i + 1}</th>

      <img
        src={booking?.image}
        alt="Avatar Tailwind CSS Component"
        className="mask mt-2 w-16 h-12"
      />

      <td>{booking?.title}</td>
      <td>{booking?.location}</td>
      <td>{booking.price}</td>
      <td>{booking?.from}</td>
      <td>{booking?.to}</td>

      <label
        htmlFor="delete-modal"
        onClick={() => booking._id}
        className="btn  btn-accent btn-xs rounded text-black  hover:text-white my-2"
      >
        Cancle
      </label>
      <DeleteModal booking={booking} modalHandler={modalHandler}></DeleteModal>
    </tr>
  );
};

export default TableRow;
