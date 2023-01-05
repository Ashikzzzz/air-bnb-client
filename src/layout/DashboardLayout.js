import React from "react";
import { useContext } from "react";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { AuthContext } from "../contexts/AuthProvider";

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
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <div className="mr-4">
              <p>Email: {user?.email}</p>
            </div>
            <li>
              <a>My Bookings</a>
            </li>
            <li>
              <a>Become a Host</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
