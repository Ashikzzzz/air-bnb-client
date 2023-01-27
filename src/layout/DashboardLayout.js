import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { getRole } from "../Components/Api/user";
import Header from "../Components/Header/Header";
import { AuthContext } from "../contexts/AuthProvider";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

// import Sidebar from "../Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // user role fatching
  useEffect(() => {
    setLoading(false);
    getRole(user?.email).then((data) => {
      console.log(data);
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

          {/* if the user role undefined show the sidebar 2  */}
          {role === undefined ? <Sidebar2></Sidebar2> : ""}

          {/* if have role show this  */}
          <Sidebar role={role} loading={loading}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
