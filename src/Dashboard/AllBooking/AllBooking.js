import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AllBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  return (
    <div>
      <div className="ml-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>

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
                    <td>Desktop Support Technician</td>
                    <td>{allBooking.price}</td>
                    <td>15/11/2045</td>
                    <td>17/4/2011</td>
                    <td className="btn  btn-accent btn-xs rounded text-black  hover:text-white mt-4">
                      Cancle
                    </td>
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
