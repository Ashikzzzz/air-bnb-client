import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Card/ExpCard";

const Homecard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="md:flex justify-center px-6 gap-10 md:px-10 lg:px-20">
      <div>search Form</div>
      <div className="flex-1">
        <div>Home card</div>
        <div className="">
          <div className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <p className="mr-2">Experiences</p>
              <marquee className="bg-emerald-100 py-4 rounded-lg">
                <h3 className="text-3xl font-bold">
                  Airbnb is an online marketplace that connects people who want
                  to rent out their homes with people who are looking for
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
          <ExpCard></ExpCard>{" "}
        </div>
      </div>
    </div>
  );
};

export default Homecard;
