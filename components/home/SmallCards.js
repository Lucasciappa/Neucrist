import React from "react";
import SmallCard from "./SmallCard";

const SmallCards = () => {
  const infoCards = [
    {
      image: "/images/fotos/hands-of-mechanic-changing-a-wheel-of-a-modern-car-picture-id1154972652.jpg",
      title: "Colocacion de llantas"
    },
    {
      image:
        "/images/fotos/woman-phoning-for-help-after-car-windshield-has-broken-picture-id614347236.jpg",
      title: "Arreglo de cristales"
    },
    {
      image:
        "/images/fotos/new-tire-is-placed-on-the-tire-storage-rack-in-the-car-workshop-be-picture-id1332478606.jpg",
      title: "Reparaciones"
    },
    {
      image: "/images/fotos/scenery-of-highway-at-dusk-picture-id1044855272.jpg",
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