import React from "react";
import { useQuery } from "react-query";

const ManageHome = () => {
  const { data: homes, isLoading } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homes");
      const data = await res.json();
      return data;
    },
  });
  console.log(homes);
  return (
    <div>
      <div className="overflow-x-auto mx-4">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
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
            {homes?.map((home) => {
              return (
                <tr>
                  <th>{home.title}</th>
                  <td>{home.location}</td>
                  <td>{home.price}</td>
                  <td>{home.from}</td>
                  <td>{home.to}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageHome;
