import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { getRole } from "../../Components/Api/user";
import { AuthContext } from "../../contexts/AuthProvider";

const HostMenu = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content  mt-10">
        <div className="mr-4">
          <p>Email: {user?.email}</p>
        </div>
        <li>
          <Link to="">
            {" "}
            <a>Manage Home</a>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/add-home">
            {" "}
            <a>Add Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HostMenu;
