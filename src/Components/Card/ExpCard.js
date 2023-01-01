import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBeer, FaStar } from "react-icons/fa";
const ExpCard = () => {
  const [expDatas, setExpDatas] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpDatas(data);
      });
  }, []);
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1">
      {expDatas.slice(0, 4).map((expdata, i) => {
        return (
          <div key={i} className="card  w-52 bg-base-100 shadow-xl">
            <figure>
              <img src={expdata.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{expdata.title}</h2>
              <div className="items-center">
                <p>Location: {expdata.location}</p>
                <p>Price: {expdata.price}</p>
                <h4>Host: {expdata.host}</h4>
              </div>
              <div className="flex justify-center items-center">
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <p>{expdata.rating}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpCard;
