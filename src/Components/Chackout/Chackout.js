import React from "react";
import { Link } from "react-router-dom";
import ChackoutCart from "../ChackoutCart/ChackoutCart";
import HouseRules from "../HouseRules/HouseRules";
import { Tab } from "@headlessui/react";
import WhosComing from "../WhoseComing/WhoseComing";
import Payment from "../Payment/Payment";

const Chackout = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1">
      <div className="mx-4 ">
        <Tab.Group>
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
              <HouseRules></HouseRules>{" "}
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <WhosComing></WhosComing>{" "}
            </Tab.Panel>
            <Tab.Panel>
              {" "}
              <Payment></Payment>{" "}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div>
        <ChackoutCart></ChackoutCart>
      </div>
    </div>
  );
};

export default Chackout;
