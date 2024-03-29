import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const ManageHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const url = `http://localhost:5000/homes?email=${user?.email}`;
  console.log(url);
  const { data: homes, refetch } = useQuery({
    queryKey: ["homes", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  // const [homes, setHomes] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/homes?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setHomes(data);
  //     });
  // }, [user?.email]);

  // console.log(homes);
  // delete home
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/homes/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          refetch();
          toast.error("deleted");
        }
      });
  };

  // edit modal data

  return (
    <div>
      <div className="overflow-x-auto mx-4">
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
            {homes?.map((home, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <div className="mask circle w-12 h-12">
                      <img
                        src={home?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>{home?.title}</td>
                  <td>{home?.location}</td>
                  <td>{home?.price}</td>
                  <td>{home?.from}</td>
                  <td>{home?.to}</td>

                  <div className="mt-8">
                    <td>
                      <button
                        onClick={() => handleDelete(home._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={`/dashboard/updateHomeForm/${home._id}`}>
                        <label
                          htmlFor="editModal"
                          className="btn btn-xs btn-primary"
                        >
                          Edit
                        </label>
                      </Link>
                    </td>
                  </div>
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
