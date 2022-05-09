import React from "react";
import CreatorInfo from "./CreatorInfo";

const ImageFixed = () => {
  return (
    <>
      <div className="h-screen md:h-xl relative -pb-50 md:pb-8">
        <div
          className="h-screen md:h-xl lg:bg-fixed bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: "url('/images/fotos/neumaticos2.jpg')",
          }}
        />
        <h1 className="absolute top-20 md:top-32 w-screen text-5xl font-semibold">
          <span className="text-center absolute right-0 left-0 m-auto">
            <span className="text-primary-white filter brightness-100 z-50">
              Sobre
            </span>{" "}
            <span className="text-primary-red">Nosotros</span>
          </span>
        </h1>
        <p className="absolute top-36 md:top-44 pt-10 text-primary-white font-primary text-center text-xl md:text-2xl w-4/5 right-0 left-0 m-auto">
          Somos una empresa que nace con grandes sueños en plena
          pandemia, con el compromiso de hacer las cosas bien desde el comienzo
          y siempre. Por eso y para ello las personas que componen NEUCRIST
          comparten la pasión, visión y el deseo de satisfacer las necesidades
          de los clientes a través de un servicio diferencial, con productos de
          alta calidad, avalados por marcas prestigiosas y servicio de logística
          propia.
        </p>
      </div>
      <div className="static md:absolute bottom-0 left-40 lg:left-80">
      <CreatorInfo />
      </div>
    </>
  );
};

export default ImageFixed;
