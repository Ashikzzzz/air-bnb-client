import React from "react";
import { useLocation } from "react-router-dom";
import location from "../../Assets/ash.jpeg";
import "./SearchResult.css";
// import React, { Component } from "react";
import Typical from "react-typical";

const SearchResult = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex justify-around items-center my-10">
      {/* search result card */}
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Stay in {state?.location}</h2>
            <p></p>
          </div>
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
