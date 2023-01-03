import React from "react";
import { Link } from "react-router-dom";
const CheckoutCart = () => {
  let totalNights = 2;
  let sub_total = 150;
  let total = 200;

  return (
    <div class="px-6 py-5 md:w-1/2 lg:w-full w-full h-full rounded-md shadow-lg">
      <div className="flex justify-between items-center">
        <div class="text-gray-900 text-xl title-font font-medium mb-2 w-1/2">
          {" "}
          Huge Apartment with 4 bedrooms
        </div>

        <img
          alt="e-commerce"
          className="object-cover object-center w-full h-full block block relative h-28 rounded overflow-hidden w-1/2"
          src="https://i.ibb.co/YPXktqs/Home1.jpg"
        />
      </div>
      <div className="flex gap-1 mb-2">
        <span>4.8 (10 reviews)</span>
      </div>

      <p>Dates</p>
      <div className="flex justify-between items-center p-2 border mt-1 mb-2">
        <div>11/06/2022</div>
        <div></div>
        <div>14/06/2022</div>
      </div>

      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">$100 x {totalNights} nights</span>
        <span class="ml-auto text-gray-900">${sub_total}</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Cleaning Fee</span>
        <span class="ml-auto text-gray-900">$10</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Service Fee</span>
        <span class="ml-auto text-gray-900">$21</span>
      </div>
      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-gray-900 font-bold">Total</span>
        <span class="ml-auto text-gray-900">${total}</span>
      </div>
    </div>
  );
};

export default CheckoutCart;