import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Components/Api/user";
import Header from "../Components/Header/Header";
import { AuthContext } from "../contexts/AuthProvider";

// import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // user role fatching
  useEffect(() => {
    setLoading(false);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

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
          {/* user menu  */}
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
          {/* Admin menu  */}
          {role === "admin" ? (
            <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content  mt-10">
              <div className="mr-4">
                <p>Email: {user?.email}</p>
              </div>
              <li>
                <Link to="/dashboard/allbooking">
                  {" "}
                  <a>All bookings</a>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/alluser">
                  {" "}
                  <a>All users</a>
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}

          {/* host menu  */}
          {role === "host" ? (
            <ul className="menu p-4 w-80 bg-base-200 rounded-lg text-base-content">
              <div className="mr-4 ">
                <p>Email: {user?.email}</p>
              </div>
              <li>
                <Link to="/dashboard/my-booking">
                  {" "}
                  <a>Manage Home</a>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/become-host">
                  {" "}
                  <a>Add home</a>
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
