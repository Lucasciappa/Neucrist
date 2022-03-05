import React from 'react';
import Button from '../Button';

const HeroImage = () => {
    return (
      <div
        className="relative flex content-center items-center justify-center font-primary"
        style={{ minHeight: "40rem" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/fotos/neumaticos2.jpg')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
  
        <div className="relative mx-auto w-full">
          <div className="items-center flex flex-wrap">
            <div className=" flex flex-col justify-evenly -mt-28 h-40 md:h-44 w-full lg:w-9/12 2xl:w-7/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white leading-none text-5xl lg:text-6xl">
                Bienvenidos a <b>Neucrist</b> 
              </h1>
              <div className="text-gray-300 mt-4">
                {/* <Link
                  href="https://mrq1oddz6hq.typeform.com/to/SWwx8vZP"
                  passHref
                > */}
                <Button
                  link="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
                  title="Contactanos"
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
