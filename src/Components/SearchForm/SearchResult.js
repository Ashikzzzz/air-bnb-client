import React from "react";
import { useLocation } from "react-router-dom";
import location56 from "../../Assets/location.jpg";
import "./SearchResult.css";
// import React, { Component } from "react";
import location55 from "../../Assets/location.jpg";
import { useState } from "react";

const SearchResult = () => {
  const { state } = useLocation();
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(state);
  return (
    <div className="flex justify-evenly ml-24">
      <div className="flex justify-around items-center my-10">
        {/* search result card */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Stay in {state?.location}</h2>
              <p></p>
            </div>
            <figure>
              <img src={location56} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
      <div>
        <img className="h-full w-3/4 ml-24 " src={location55} alt="" />
      </div>
    </div>
  );
};

export default SearchResult;
