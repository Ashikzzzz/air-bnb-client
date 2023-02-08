import React from "react";

const WhosComing = ({
  setSelectedIndex,
  host,
  setBookingData,
  bookingData,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-10">Traveling for work?</h1>
      <div className="flex gap-10 flex-wrap-justify-between">
        <div>
          <p className="my-3 text-gray-500">Say hello to your host</p>
          <p className="my-3 text-gray-500 ml-16">
            Let {host?.name} know a little about yourself and why you're coming.
          </p>
        </div>
      </div>
      <textarea
        className="border block my-5 p-2 ml-16"
        value={bookingData.message}
        onChange={(event) =>
          setBookingData({ ...bookingData, message: event.target.value })
        }
        placeholder={`Hello ${host?.name}! Cant wait to spend 4 night in your home`}
        name=""
        id=""
        cols="60"
        rows="10"
      ></textarea>
      <button
        className="p-2 rounded-md btn btn-outline  my-4"
        onClick={() => setSelectedIndex(2)}
      >
        Continue
      </button>
    </>
  );
};

export default WhosComing;
