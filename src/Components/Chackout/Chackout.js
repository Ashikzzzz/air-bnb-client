import React from "react";
import room from "../../Assets/r3.jpg";
import { Link } from "react-router-dom";
import terms from "../../Assets/condi.jpg";
import Typical from "react-typical";

const Chackout = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  my-10">
      <div className="ml-10">
        <div className="p-4 md:w-1/2 lg:w-full w-full rounded shadow-lg">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
            $35/ <span className="font-thin">night</span>
          </h1>
          <div className="flex justify-between items-center gap-1 mb-2">
            <span>4.8 (10 reviews)</span>
            <img className="w-1/3" src={room} alt="" />
          </div>

          <p>Dates</p>
          <div className="flex justify-between items-center p-2 border mt-1 mb-2">
            <div>13/11/2022</div>
            <div></div>
            <div>15/11/2022</div>
          </div>

          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">$34 x nights</span>
            <span className="ml-auto text-gray-900"></span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Cleaning Fee</span>
            <span className="ml-auto text-gray-900">$10</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Service Fee</span>
            <span className="ml-auto text-gray-900">$21</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-900 font-bold">Total</span>
            <span className="ml-auto text-gray-900"></span>
          </div>
          <div></div>
          <div className="mt-6 mb-2"></div>
          <p className="text-center text-gray-400 mb-6">
            You won't be charged yet!
          </p>
        </div>
      </div>
      <div className=" mt-10">
        <div className="card h-full lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-full" src={terms} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Terms and Conditions</h2>
            <p>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Contractual terms are ",
                  2000,
                  "Contractual terms are defined as",
                  2000,
                  "conditions warranties  ",
                  2000,
                  "or innominate terms.",
                  2000,
                  "This may be specified ",
                  2000,
                  "in the contract, ",
                  2000,
                  "implied by the nature of it,",
                  2000,
                  " or implied by law.",
                  2000,
                ]}
              />
            </p>
            <Link to="/terms">
              <button className="btn btn-accent">Terms and Condition</button>
            </Link>
            <div className="card-actions flex justify-end">
              <Link to="/terms">
                <button className="btn btn-accent">Agree And Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chackout;
