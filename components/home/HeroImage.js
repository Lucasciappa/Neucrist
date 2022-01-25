import React from 'react';
import Button from '../Button';

const HeroImage = () => {
    return (
      <div
        className="relative flex content-center items-center justify-center font-primary"
        style={{ minHeight: "30rem" }}
      >
        <div className="hidden md:block" style={{ minHeight: "30rem" }}></div>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/productos/neumaticos.jpg')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
  
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className=" flex flex-col justify-around lg:justify-between h-40 md:h-44 w-full lg:w-9/12 2xl:w-7/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white leading-none text-3xl sm:text-4xl md:text-5xl">
                Titulo de la pagina
              </h1>
              <div className="mt-2 text-gray-300">
                {/* <Link
                  href="https://mrq1oddz6hq.typeform.com/to/SWwx8vZP"
                  passHref
                > */}
                <Button
                  link="/productos"
                  title="buscar productos"
                  background="bg-primary-red"
                />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default HeroImage;
