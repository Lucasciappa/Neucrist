import React from "react";
import { Slide } from "react-slideshow-image";
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

  const style = {
    textAlign: 'center',
    background: 'teal',
    padding: '100px 0',
    fontSize: '30px'
  };

  const properties = {
    duration: 3000,
    transitionDuration: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
  };

  return (
    <>
    <h5 className="text-center uppercase text-primary-red md:text-lg leading-snug tracking-widest font-semibold py-6">
        Marcas con las que trabajamos
      </h5>
      <div className="my-16 px-10">
        <Slide {...properties}>
        {infoMarcas.map((data, i) => {
          return (
            <div className="px-5 opacity-70 py-10">

            <Image
              key={i}
              src={`/marcas/${data}.png`}
              alt={`${data}`}
              width={630}
              height={180}
              />
              </div>
          );
        })}
        </Slide>
      </div>
    </>
  );
};

export default MarcasSection;