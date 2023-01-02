import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";

const Terms = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Terms And Conditions </h3>
      <p className="text-black"></p>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">1.Triff</h4>
        <p>
          The tariff is for the room only and is exclusive of any government
          taxes applicable Meals and other services are available at extra cost.
          To know your room tariff, please contact the Duty Manager, guest
          registration forms must be signed on arrivals.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">2. Settlement Of Bills</h4>
        <p>
          Bills must be settled on presentation, personal cheques are not
          accepted.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">
          3. Company's Lien On Guest's Luggage And Belongings
        </h4>
        <p>
          In the case of default in the payment of dues by a guest, the
          management shall have the linen on their luggage and belongings, and
          be entitled to detain the same and to sell or auction such property at
          any time without reference to the guest. The net sale proceeds will be
          appropriate towards the amount due by the guest without prejudice to
          the management's rights to adopt such further recovery proceedings as
          my be required.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">4. Check-in</h4>
        <p>
          Please present your ID card, Passport or Temporary Residence Card upon
          Check-in. By Law visitors must present personal documents for hotel
          records. These documents will be returned upon departure.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">5. Departure</h4>
        <p>
          Check out time is ( mention your checkout time here ) please inform
          the reception if you wish to retain your room beyond this time. The
          extension will be given depending on the availability. If the room is
          available, the normal tariff will be charged. On failure of the guest
          to vacate the room on expiry or period the management shall have the
          right to remove the guest and his/her belongings from the room
          occupied by the Guest.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">6. Luggage Storage</h4>
        <p>
          Subject to availability of the storage space, the guest can store
          luggage in the luggage room, at the guest's sole risk as to loss or
          damage from any cause, Luggage may not be stored for a period of over
          30 days.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">7. Guest's Belongings</h4>
        <p>
          Guests are particularly requested to lock the door of their rooms when
          going out going to bed. For the convenience of the Guest, electronic
          safety lockers are provided in the room to store any valuables. The
          Management will not in any way whatsoever be responsible for any loss
          / or damage to the Guest's belongings or any other property from
          either the hotel room or the locker or any other part of the hotel for
          any cause whatsoever including theft of pilferage.
        </p>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <h4 className="font-bold ">8. Pets</h4>
        <p>
          Mention your policy for Pets ( allowed or not- allowed ) / (Allow us
          to make separate arrangements. )
        </p>
      </div>
      <Link
        className="bg-slate-600 text-white p-6 rounded my-10"
        to="/chackout"
      >
        Go Back For Booking
      </Link>
    </div>
  );
};

export default Terms;
