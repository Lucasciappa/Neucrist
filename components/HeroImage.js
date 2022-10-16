import React from "react";
import { Slide } from 'react-slideshow-image';

const slideImages = [
    '/images/carousel/autopartes-carousel.png',
    '/images/carousel/cristal-carousel.png',
    '/images/carousel/neumaticos-carousel.png'
];

const props = {
    'canSwipe': false,
    'arrows': false
};

const HeroImage = () => {
    return (
        <div className="max-w-screen-2xl p-4 md:px-8 mx-auto z-20">
            <section className="flex justify-center items-center flex-1 max-w-screen-2xl shrink-0 font-primary bg-gray-100 overflow-hidden shadow-lg rounded-lg relative h-96 xl:h-112 2xl:h-128">
                <div className="absolute inset-0 h-auto">
                    <Slide easing="ease" {...props} className="w-full">
                        <div className="each-slide">
                            <div className="absolute inset-0 bg-black bg-opacity-20 transition duration-300 ease-in-out"></div>
                            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="absolute inset-0 bg-black bg-opacity-20 transition duration-300 ease-in-out"></div>
                            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="absolute inset-0 bg-black bg-opacity-20 transition duration-300 ease-in-out"></div>
                            <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="sm:max-w-xl flex flex-col items-center relative p-4">
                    <p className="text-gray-200 text-xl font-semibold sm:text-xl text-center mb-2 md:mb-6">Bienvenidos a</p>
                    <h1 className="font-secondary text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-5 md:mb-8 tracking-widest">Neucrist</h1>

                    <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                        <a href="#contacto" className="inline-block bg-primary-red hover:bg-primary-red-hover active:bg-primary-red-hover focus-visible:ring ring-primary-red-hover text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contactame</a>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HeroImage;