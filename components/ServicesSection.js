import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const infoCards = [
    {
      image: "/images/ejemplo/neu1.jpg",
      icon: "",
      title: "mierda",
      desc: "cacacaca",
    },
    {
      image: "/images/ejemplo/neu2.jpg",
      icon: "",
      title: "caca",
      desc: "cacacaca",
    },
    {
      image: "/images/ejemplo/neu3.jpg",
      icon: "",
      title: "sorete",
      desc: "cacacaca",
    },
    {
      image: "/images/ejemplo/neu4.jpg",
      icon: "",
      title: "escremento",
      desc: "cacacaca",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="px-3">
            <h3 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
            Servicios que brindamos
            </h3>
            <hr />
            <p className="text-primary-black text-center py-4 md:text-normal">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
        </div>
        <div className="flex flex-wrap -m-4 xl:px-40">
            {infoCards.map((data, i) => {
            return <ServiceCard key={i} {...data} />;
          })}
            
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
