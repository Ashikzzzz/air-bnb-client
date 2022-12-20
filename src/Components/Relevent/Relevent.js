import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Relevent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const cardData = [
    {
      id: "1",
      name: "Apartment",
      title: "You Can Afford To Dwell Well",
      img: "https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?b=1&s=170667a&w=0&k=20&c=0s6qL5cIMm6LSnryH40h5GmaM6jCi11kchWzsaTJGZE=",
    },
    {
      id: "2",
      name: "Du-plex",
      title: "A Higher Quality of Living",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2020/06/22085055/All-about-duplex-house-FB-1200x700-compressed.jpg",
    },
    {
      id: "3",
      name: "Tri-plex",
      title: "Modern Amenities. Urban Location. Sophisticated Style",
      img: "https://imgix.cosmicjs.com/31645c30-6cc5-11eb-bb6f-f146facd4cdc-shutterstock1188162424.jpg",
    },
  ];

  return (
    <div className="ml-10">
      <h1
        data-aos="zoom-in"
        className="text-center font-bold text-3xl mt-10 text-violet-500"
      >
        Types of Apartment that we can Work for you
      </h1>
      <div className="grid  lg:grid-cols-3 grid-cols-1 my-16">
        {cardData.map((d) => {
          return (
            <div data-aos="zoom-in-up">
              <div key={d.id} className="card w-96  drop-shadow-2xl shadow-xl ">
                <figure>
                  <img src={d.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{d.name}</h2>
                  <p>{d.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Relevent;
