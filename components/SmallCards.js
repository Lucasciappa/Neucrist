import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = () => {
  const infoCards = [
    {
      image: "/images/neumaticos/neu3.png",
      title: "Cotizaciones de Neumaticos" 
    },
    {
      image:
        "/images/cristales/cristal2.png",
      title: "Cotizaciones de Cristales"
    },
    {
      image:
        "/images/cristales/cristal-roto1.png",
      title: "Cotizaciones de Repuestos"
    }
  ];

  return (
    <section className="-mb-24">
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 place-items-center px-4 font-primary">
        {infoCards.map((data, i) => {
          return <SmallCard key={i} {...data} />;
        })}
      </div>
    </section>
  );
};

export default SmallCards;