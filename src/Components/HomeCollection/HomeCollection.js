import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const HomeCollection = () => {
  // aos start
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => {
        setHomes(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-4  grid-cols-1 my-7">
      {homes.map((home) => {
        return (
          <Link to="/details">
            <motion.div
              whileHover={{ scale: 0.9 }}
              data-aos="flip-right"
              className="card w-52 bg-base-100 shadow-xl image-full"
            >
              <figure>
                <img src={home.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{home.title}</h2>
                <p>capacity: {home.capacity}</p>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeCollection;
