import React from "react";
import Relevent from "../Relevent/Relevent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Spinner from "./Spinner";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/26/What-Is-a-Duplex-882b06.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-down-left" className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 font-serif">
              Airbnb is an online marketplace that connects people who want to
              rent out their homes with people who are looking for
              accommodations in specific locales. Airbnb offers people an easy,
              relatively stress-free way to earn some income from their
              property.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Relevent></Relevent>
    </div>
  );
};

export default Home;
