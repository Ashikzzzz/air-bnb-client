import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBeer, FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const ExpCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
          <motion.div
            whileHover={{ scale: 0.9 }}
            key={i}
            data-aos="flip-left"
            className="card  w-52 bg-base-100 shadow-xl"
          >
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExpCard;
