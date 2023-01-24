import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUser, makeHost } from "../../Components/Api/user";
import { AuthContext } from "../../contexts/AuthProvider";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // get all user
  useEffect(() => {
    getUsers();
  }, []);

  const handleRequest = (user) => {
    makeHost(user).then((data) => {
      console.log(data);
      getUsers();
    });
  };

  // for refatch
  const getUsers = () => {
    setLoading(true);
    getAllUser().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="ml-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => {
              return (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.email}</td>

                  <td>{user.role}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {user?.role && user.role === "requested" && (
                      <span
                        onClick={() => handleRequest(user)}
                        className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">
                          {loading ? "Loading..." : " Approve Request"}
                        </span>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
