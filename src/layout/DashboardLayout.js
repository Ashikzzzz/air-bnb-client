import React from "react";
import { useContext } from "react";

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { AuthContext } from "../contexts/AuthProvider";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

// import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content">
            <div className="mr-4 ">
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
                <a>Become a Host</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
