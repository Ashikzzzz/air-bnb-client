import React from "react";
import { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import TableRow from "./TableRow";

const MyBooking = () => {
  const { user } = useContext(AuthContext);

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();

      return data;
    },
  });
  console.log(bookings);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {bookings && Array.isArray(bookings) && bookings.length > 0 ? (
        <div className="ml-4">
          <div className="overflow-x-auto">
            <table className="table  w-full">
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
                {bookings?.map((booking, i) => (
                  <TableRow
                    booking={booking}
                    i={i}
                    refetch={refetch}
                  ></TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-20">
            <h1 className="font-bold text-5xl">
              {" "}
              Y<span className="text-amber-500">O</span>u have N
              <span className="text-amber-500">O</span> Items
            </h1>
            <Link to="/">
              <button className="mt-10 btn btn-outline btn-primary rounded">
                Click Here To Book Room
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default MyBooking;
