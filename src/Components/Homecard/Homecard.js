import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Card/ExpCard";
import HomeCollection from "../HomeCollection/HomeCollection";
import SearchForm from "../SearchForm/SearchForm";

const Homecard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="md:flex justify-evenly px-6 gap-10 md:px-10 lg:px-20">
      <div className="w-1/4">
        {" "}
        <SearchForm></SearchForm>{" "}
      </div>
      <div className="flex-1">
        <div className="">
          <div className="">
            <div className="flex justify-between items-center my-2">
              <div className="flex items-center">
                <h2 className="mr-2 text-5xl font-semibold">Homes</h2>
                <marquee className="bg-emerald-100 py-4 rounded-lg">
                  <h3 className="text-3xl font-bold">
                    Airbnb is an online marketplace that connects people who
                    want to rent out their homes with people who are looking for
                    accommodations in specific locales. Airbnb offers people an
                    easy, relatively stress-free way to earn some income from
                    their property.
                  </h3>
                </marquee>
              </div>{" "}
              <button className="btn btn-outline btn-info ml-2 rounded">
                <Link to="/coming-soon">See All</Link>
              </button>
            </div>
            <HomeCollection></HomeCollection>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <h2 className="mr-2 text-5xl font-semibold">Experiences</h2>
            </div>{" "}
            <button className="btn btn-outline btn-info ml-2 rounded">
              <Link to="/coming-soon">See All</Link>
            </button>
          </div>
          <ExpCard></ExpCard>{" "}
        </div>
      </div>
    </div>
  );
};

export default Homecard;
