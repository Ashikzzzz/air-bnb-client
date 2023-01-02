import React, { useState } from "react";
// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchForm = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [arrival, setArrival] = useState(new Date());
  const [departure, setDeparture] = useState(
    arrival.getTime() + 24 * 60 * 60 * 1000
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = {
      location: location,
      arrivalDate: arrival,
      departureDate: departure,
    };
    console.log(query);
    navigate("/searchresult", { state: query });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-6">Where do you want to go?</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label
            className="font-bold text-sm block text-gray-800"
            htmlFor="location"
          >
            {" "}
            Your Location
          </label>
          <input
            className="input rounded-md shadow-2xl w-full"
            type="text"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Add city, Landmark or address"
            id=""
          />
        </div>
        <div className="flex justify-between gap-8 my-10">
          {/* arrival  */}
          <div className="shadow-lg rounded p-3 flex justify-between items-center">
            <div>
              <p className="block text-xs text-gray-700">Arrival date</p>
              <DatePicker
                selected={arrival}
                name="arrival"
                dateFormat="Pp"
                className="w-full border-gray-600"
                onChange={(date) => setArrival(date)}
              ></DatePicker>
            </div>
            <i class="uil uil-calendar-alt text-lg w-6 h-6"></i>
          </div>
          <div className="shadow-md rounded flex justify-between items-center">
            <div>
              <p className="block text-xs text-gray-700 shadow-lg">
                Arrival date
              </p>
              <DatePicker
                selected={departure}
                onChange={(date) => setDeparture(date)}
                className="w-full "
              ></DatePicker>
            </div>
            <i class="uil uil-calendar-alt text-lg w-6 h-6"></i>
          </div>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="btn btn-outline rounded-md w-full"
          >
            Search
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
