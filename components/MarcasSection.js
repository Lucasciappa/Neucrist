import React from "react";
import Image from "next/image";

const MarcasSection = () => {
  const infoMarcas = [
    "bfgoodrich",
    "bridgestone",
    "continental",
    "dunlop",
    "fate",
    "firelli",
    "firestone",
    "goodyear",
    "michelin",
    "pilkington",
    "saint-gobain",
    "yokohama",
  ];

  return (
    <>
      <h5 className="text-center uppercase text-primary-red md:text-lg leading-snug tracking-widest font-semibold py-6">
        Marcas con las que trabajamos
      </h5>
      <div className="opacity-80 ">

      <div className="h-60 w-full grid grid-cols-3 px-2 gap-3 md:grid-cols-4 mb-10">
        {infoMarcas.map((data, i) => {
          return (
            <Image
              key={i}
              src={`/marcas/${data}.png`}
              alt={`${data}`}
              width={250}
              height={60}
            />
          );
        })}
      </div>
            </div>
    </>
  );
};

export default MarcasSection;
