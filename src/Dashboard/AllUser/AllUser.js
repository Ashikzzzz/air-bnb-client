import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUser } from "../../Components/Api/user";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // for refatch
  useEffect(() => {
    getUsers();
  }, []);
  // get all user function
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
                  <td></td>
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
