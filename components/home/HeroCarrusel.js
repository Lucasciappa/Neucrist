import React from "react";
import { Slide } from 'react-slideshow-image';
import Button from '../Button';

const slideImages = [
  '/images/neumaticos/neu1.jpg',
  '/images/neumaticos/neumaticos.jpg',
  '/images/neumaticos/neu5.jpg'
];

const props = {
  'canSwipe': false,
  'arrows': false
};

const HeroCarrusel = () => {
    return (
      <div className="">
        <div className="absolute flex flex-col justify-center items-center h-96 w-full">
        <span className="p-2 text-3xl md:text-6xl font-bold text-primary-red bg-transparent items-center z-10">Bienvenidos a Neucrist</span>
        <div className="text-gray-300 mt-4 z-10 cursor-pointer">
                <Button
                  link="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
                  title="Contactanos"
                  background="bg-primary-red"
                />
              </div>
        </div>
        <Slide easing="ease" {...props} className="w-full">
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default HeroCarrusel;