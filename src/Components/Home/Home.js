import React from "react";
import Relevent from "../Relevent/Relevent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Carousle from "../Carousle/Carousle";
import "./Home.css";
import Homecard from "../Homecard/Homecard";
import Typical from "react-typical";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/e1/0b/4e/e10b4e68413932968ffb0a4ee90b1719.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 data-aos="fade-down-left" className="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p className="mb-5 font-serif">
              <Typical
                loop={Infinity}
                steps={[
                  "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for  accommodations in specific locales Airbnb offers people an easy relatively stress-free way to earn some income from their  property",
                  5000,
                ]}
              />
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Homecard></Homecard>
      <Relevent></Relevent>
      <Carousle></Carousle>
    </div>
  );
};

export default Home;
