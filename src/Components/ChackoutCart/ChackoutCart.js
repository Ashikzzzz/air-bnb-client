import { format } from "date-fns";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CheckoutCart = ({ chackoutData }) => {
  const from = format(new Date(chackoutData?.homes?.from), "PP");
  const to = format(new Date(chackoutData?.homes?.to), "PP");

  return (
    <div class="px-6 py-5 md:w-1/2 lg:w-full w-full h-full rounded-md shadow-lg">
      <div className="flex justify-between items-center">
        <div class="text-gray-900 text-xl title-font font-medium mb-2 w-1/2">
          {" "}
          {chackoutData.homes.title}
        </div>

        <img
          alt="e-commerce"
          className="object-cover object-center w-full h-full block block relative h-28 rounded overflow-hidden w-1/2"
          src={chackoutData.homes.image}
        />
      </div>
      <div className="flex gap-1 mb-2">
        <span>4.8 (10 reviews)</span>
      </div>

      <p>Dates</p>
      <div className="flex justify-between items-center p-2 border mt-1 mb-2">
        <div>From: {from} </div>
        <div>
          {" "}
          <FaArrowRight></FaArrowRight>{" "}
        </div>
        <div>To: {to}</div>
      </div>

      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Total Guest:</span>
        <span class="ml-auto text-gray-900">
          {chackoutData.homes.total_guest}
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Bedrooms:</span>
        <span class="ml-auto text-gray-900">{chackoutData.homes.bedrooms}</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Bathrooms:</span>
        <span class="ml-auto text-gray-900">
          {chackoutData.homes.bathrooms}
        </span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Price:</span>
        <span class="ml-auto text-gray-900">{chackoutData?.homes?.price}</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Vat:</span>
        <span class="ml-auto text-gray-900">0</span>
      </div>

      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-gray-900 font-bold">Total</span>
        <span class="ml-auto text-gray-900">{chackoutData.homes.price}</span>
      </div>
    </div>
  );
};

export default CheckoutCart;
