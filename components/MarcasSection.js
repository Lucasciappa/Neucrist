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
      <h3 className="text-center text-primary-black font-semibold font-primary py-8 text-2xl md:text-4xl ">
        Marcas que nos avalan
      </h3>
      <div className="h-60 w-full grid grid-cols-3 px-4 gap-6 md:grid-cols-4 mb-10">
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
