import React from "react";
import { useQuery } from "react-query";

const AllHome = () => {
  const {
    data: homes,

    isLoading,
  } = useQuery({
    queryKey: ["homes"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/homes");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <p className="font-bold">Loading...</p>;
  }
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-12 my-10 mx-10">
      {homes.map((home) => {
        return (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={home.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <span>{home.location}</span>
              <h2 className="text-2xl font-bold">{home.title}</h2>

              <div className="flex">
                <p>Bedrooms:{home.bedrooms}</p>
                <p>Bathrooms:{home.bathrooms}</p>
                <p>Members:{home.total_guest}</p>
              </div>
              <div className="flex">
                <p>From:{home.from}</p>
                <p>To:{home.to}</p>
              </div>
              <p>Price: {home.price}</p>
              <p>Details :{home.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllHome;
