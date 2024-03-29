import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const AdminMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content  mt-10">
        <div className="mr-4">
          <p>Email: {user?.email}</p>
        </div>
        <li>
          <Link to="/dashboard/allbooking">
            {" "}
            <a>All Bookings</a>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/alluser">
            {" "}
            <a>All Users</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
