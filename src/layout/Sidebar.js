import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import AdminMenu from "../Dashboard/AdminMenu/AdminMenu";
import HostMenu from "../Dashboard/HostMenu/HostMenu";
import UserMenu from "../Dashboard/UserMenu/UserMenu";

const Sidebar = ({ role, loading }) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {role === "requested" ? (
        <>
          <UserMenu role={role}></UserMenu>
        </>
      ) : (
        ""
      )}
      {role === "admin" ? <AdminMenu></AdminMenu> : ""}

      {role === "host" ? <HostMenu></HostMenu> : ""}
    </div>
  );
};

export default Sidebar;
