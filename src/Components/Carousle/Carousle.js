import React from "react";
import room1 from "../../Assets/r3.jpg";
import room2 from "../../Assets/r43.jpg";
import room3 from "../../Assets/r34.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Carousle = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl text-amber-500 my-16">
          The Room catalogue{" "}
        </h1>
      </div>
      <div>
        <div className="carousel ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={room1} className="w-full h-fit" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={room2} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={room3} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousle;
