import React from "react";
import { Slide } from 'react-slideshow-image';
import Button from '../Button';
// const d = document;

const slideImages = [
  '/images/fotos/neumaticos.jpg',
  '/images/fotos/neumaticos.jpg',
  '/images/fotos/automobile-special-workers-glazier-replacing-windscreen-windshield-of-picture-id1073249578.jpg'
];

const props = {
  'canSwipe': false,
  'arrows': false
};

const HeroCarrusel = () => {
    return (
      <div>
        <Slide  easing="ease" {...props} >
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full px-4 mx-auto text-center" style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span className="-mt-28 p-2 text-6xl font-bold text-primary-red bg-transparent items-center z-10">Bienvenidos a Neucrist</span>
              <div className="text-gray-300 mt-4 z-10 cursor-pointer">
                <Button
                  link="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
                  title="Contactanos"
                  background="bg-primary-red"
                />
              </div>
            </div>
          </div>
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full px-4 mx-auto text-center" style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span className="-mt-28 p-2 text-6xl font-bold text-primary-red bg-transparent items-center z-10">Bienvenidos a Neucrist</span>
              <div className="text-gray-300 mt-4 z-10 cursor-pointer">
                <Button
                  link="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
                  title="Contactanos"
                  background="bg-primary-red"
                />
              </div>
            </div>
          </div>
          <div className="each-slide">
          <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
            <div className="flex flex-col justify-evenly w-full px-4 mx-auto text-center" style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span className="-mt-28 p-2 text-6xl font-bold text-primary-red bg-transparent items-center z-10">Bienvenidos a Neucrist</span>
              <div className="text-gray-300 mt-4 z-10 cursor-pointer">
                <Button
                  link="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
                  title="Contactanos"
                  background="bg-primary-red"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default HeroCarrusel;