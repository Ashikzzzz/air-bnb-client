import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";

const AllBooking = () => {
  const {
    data: allBookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/bookings");
      const data = await res.json();

      return data;
    },
  });

  // bookings delete
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("deleted SuccessFul");
      });
  };

  return (
    <div>
      <div className="ml-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Title</th>
                <th>Location</th>
                <th>Price</th>
                <th>From</th>
                <th>To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBookings?.map((allBooking, i) => {
                return (
                  <tr key={allBooking._id} className="">
                    <th>{i + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={allBooking?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{allBooking?.title}</td>
                    <td>{allBooking?.location}</td>
                    <td>{allBooking?.price}</td>
                    <td>{allBooking?.from}</td>
                    <td>{allBooking?.to}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(allBooking._id)}
                        className="btn  btn-accent btn-xs rounded text-black  hover:text-white mt-4"
                      >
                        Cancle
                      </button>
                    </td>
                    <ToastContainer></ToastContainer>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooking;
