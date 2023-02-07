import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { getRole } from "../Api/user";

const HostRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);
  useEffect(() => {
    setRoleLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setRoleLoading(false);
    });
  }, [user]);

  if (loading || roleLoading) {
    return (
      <div className="h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (user && user.uid && role === "host") {
    return children;
  }
  return <Navigate to="/dashboard" />;
};

export default HostRoute;
