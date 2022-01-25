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
      <h5 className="text-center uppercase text-primary-red md:text-lg leading-snug tracking-widest font-medium py-6">
        Marcas que nos avalan
      </h5>
      <div className="h-60 w-full grid grid-cols-3 px-16 gap-6 md:grid-cols-4 mb-20">
        {infoMarcas.map((data) => {
          return (
            <Image
              src={`/marcas/${data}.png`}
              alt={`${data}`}
              width={250}
              height={60}
            />
          );
        })}
      </div>
    </>
  );
};

export default MarcasSection;
