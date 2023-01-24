import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const UserMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content  mt-10">
        <div className="mr-4">
          <p>Email: {user?.email}</p>
        </div>
        <li>
          <Link to="/dashboard/my-booking">
            {" "}
            <a>My Bookings</a>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/become-host">
            {" "}
            <a>Become A Host</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
