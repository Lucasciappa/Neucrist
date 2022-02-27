import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const infoCards = [
    {
      image: "/images/ejemplo/neu1.jpg",
      icon: "",
      title: "Servicio 1",
      desc: "Alguna desc para el servicio, asdasdsa dsa dsa sda ds ad sa ds ad sa d sa dsa d sadsadsa",
    },
    {
      image: "/images/ejemplo/neu2.jpg",
      icon: "",
      title: "Servicio 2",
      desc: "Alguna desc para el servicio, asdasdsa dsa dsa sda ds ad sa ds ad sa d sa dsa d sadsadsa",
    },
    {
      image: "/images/ejemplo/neu3.jpg",
      icon: "",
      title: "Servicio 3",
      desc: "Alguna desc para el servicio, asdasdsa dsa dsa sda ds ad sa ds ad sa d sa dsa d sadsadsa",
    },
    {
      image: "/images/ejemplo/neu4.jpg",
      icon: "",
      title: "Servicio 4",
      desc: "Alguna desc para el servicio, asdasdsa dsa dsa sda ds ad sa ds ad sa d sa dsa d sadsadsa",
    },
  ];
  return (
    <section className="body-font">
      <div className="px-5 py-10 mx-auto">
        <div className="px-3">
            <h3 className="text-primary-red text-center leading-none text-3xl py-4 font-semibold">
            Servicios que brindamos
            </h3>
            <hr />
            <p className="text-primary-black text-center py-4 md:text-normal">
            Alguna descripcion
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-3 px-2 mt-10 m-auto text-primary-red max-w-3xl">
            {infoCards.map((data, i) => {
            return <ServiceCard key={i} {...data} />;
          })}
            
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
