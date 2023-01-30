import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useQuery } from "react-query";

const HomeCollection = () => {
  // aos start
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end
  const { data: homes, isLoading } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homes");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-10">
      {homes?.slice(0, 4).map((home) => {
        return (
          <Link to={`/details/${home._id}`}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <div className="card w-48 bg-base-100 shadow-xl">
                <figure>
                  <img src={home.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{home.title}</h2>
                  <p>Price: {home.price}</p>
                  <p>Clice to see Detail</p>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeCollection;
