import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return (
      <progress
        className="progress progress-warning w-56"
        value="100"
        max="100"
      ></progress>
    );
  }

  return (
    <div className="ml-4">
      <div className="overflow-x-auto">
        <table className="table lg:w-full w-1/2">
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
            {loading ? (
              <>
                <progress
                  className="progress progress-warning w-56"
                  value="100"
                  max="100"
                ></progress>
              </>
            ) : (
              <>
                {bookings?.map((booking, i) => {
                  return (
                    <tr key={booking._id} className="">
                      <th>{i + 1}</th>
                      <td>Desktop Support Technician</td>
                      <td>{booking.price}</td>
                      <td>15/11/2045</td>
                      <td>17/4/2011</td>
                      <td className="btn  btn-accent btn-xs rounded text-black  hover:text-white mt-4">
                        Cancle
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
