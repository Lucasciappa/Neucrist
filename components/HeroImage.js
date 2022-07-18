import React from "react";
import { Slide } from 'react-slideshow-image';

const slideImages = [
    '/images/neumaticos/neu1.jpg',
    '/images/neumaticos/neumaticos.jpg',
    '/images/neumaticos/neu5.jpg'
];

const props = {
    'canSwipe': false,
    'arrows': false
};

const HeroImage = () => {
    return (

        <section class="flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">

            {/* <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0" /> */}

            <div class="absolute inset-0 h-full">
                <Slide easing="ease" {...props} className="w-full">
                    <div className="each-slide">
                        <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
                        <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
                        <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div className="absolute inset-0 bg-black bg-opacity-10 transition duration-300 ease-in-out"></div>
                        <div className="flex flex-col justify-evenly w-full mx-auto text-center" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        </div>
                    </div>
                </Slide>
            </div>
            <div class="sm:max-w-xl flex flex-col items-center relative p-4">
                <p class="text-gray-200 text-lg font-semibold sm:text-xl text-center mb-4 md:mb-8">Bienvenidos a</p>
                <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Neucrist</h1>

                <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                    <a href="#" class="inline-block bg-primary-red hover:bg-primary-red-hover active:bg-primary-red-hover focus-visible:ring ring-primary-red-hover text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contactame</a>
                </div>
            </div>
        </section>
    )
};

export default HeroImage;