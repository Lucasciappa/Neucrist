import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = () => {
  const infoCards = [
    {
      image: "/images/neumaticos/neu3.jpg",
      title: "Colocacion de llantas"
    },
    {
      image:
        "/images/cristales/cristal2.jpg",
      title: "Arreglo de cristales"
    },
    {
      image:
        "/images/cristales/cristal-roto1.jpg",
      title: "Reparaciones"
    },
    {
      image: "/images/neumaticos/neu4.jpg",
      title: "Seguridad y Confort"
    }
  ];

  return (
    <section className="mx-2 lg:-mt-20">
      <div className="mt-2 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4 place-items-center">
        {infoCards.map((data, i) => {
          return <SmallCard key={i} {...data} />;
        })}
      </div>
    </section>
  );
};

export default SmallCards;