import React from "react";
import { Link, useLocation } from "react-router-dom";
import ChackoutCart from "../ChackoutCart/ChackoutCart";
import HouseRules from "../HouseRules/HouseRules";
import { Tab } from "@headlessui/react";
import WhosComing from "../WhoseComing/WhoseComing";
import Payment from "../Payment/Payment";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chackout = () => {
  const { user } = useContext(AuthContext);
  const { state: chackoutData } = useLocation();
  console.log(chackoutData);

  // const homeData = {
  //   _id: "sfhsdjhaf2736huh",
  //   location: "Dhaka,Bangladesh",
  //   title: "Huge Apartment with 4 bedrooms",
  //   image: "https://i.ibb.co/YPXktqs/Home1.jpg",
  //   from: "17/2/2022",
  //   to: "19/2/2022",
  //   host: {
  //     name: "jhon Doe",
  //     email: "jhon@gmail.com",
  //   },
  //   price: 98,
  //   total_guest: 4,
  //   bedroom: 2,
  //   bathroom: 2,
  //   rating: 4.8,
  //   review: 64,
  // };

  const [bookingData, setBookingData] = useState({
    image: chackoutData?.homes?.image,
    title: chackoutData?.homes?.title,
    location: chackoutData?.homes?.location,
    from: chackoutData?.homes?.from,
    to: chackoutData?.homes?.to,
    price: chackoutData?.homes?.price,
    hostEmail: chackoutData?.homes?.email,
    guestEmail: user?.email,
    message: "",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleBooking = () => {
    // sending data for booking

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("booking successful");
        }
      })
      .catch((error) => {
        toast.error("Booking isn't added");
      });
  };

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1">
      <div className="mx-4 ">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          defaultIndex={1}
        >
          <Tab.List className="text-gray-600 dark:text-gray-400 hover:underline">
            <Tab className="my-4 hover:text-blue-600">
              {" "}
              1. Review house Rules
            </Tab>
            <i class="uil uil-arrow-right"></i>
            <i class="uil uil-arrow-right"></i>
            <Tab className="hover:text-blue-600"> 2. who is coming?</Tab>
            <i class="uil uil-arrow-right"></i>
            <i class="uil uil-arrow-right"></i>
            <Tab className="hover:text-blue-600"> 3. confirm and pay</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {" "}
              <HouseRules
                setSelectedIndex={setSelectedIndex}
                chackoutData={chackoutData}
              ></HouseRules>{" "}
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <WhosComing
                setSelectedIndex={setSelectedIndex}
                bookingData={bookingData}
                setBookingData={setBookingData}
                host={chackoutData?.email}
              ></WhosComing>{" "}
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <Payment handleBooking={handleBooking}></Payment>{" "}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div>
        <ChackoutCart chackoutData={chackoutData}></ChackoutCart>
      </div>
    </div>
  );
};

export default Chackout;
