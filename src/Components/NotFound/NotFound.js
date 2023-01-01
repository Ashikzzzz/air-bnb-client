import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold tect-center my-9 ">
        You are in wrong Path. Click <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
