import React, { useEffect, useRef, useState } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai"

const marcas = [
    "/marcas/bfgoodrich.png",
    "/marcas/bridgestone.png",
    "/marcas/continental.png",
];

let count = 0;
let slideInterval; 
export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideRef = useRef()

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);
        startSlider();
        return () => {
            pauseSlider();
        }
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick()
        }, 3000);
    }

    const pauseSlider = () => {
        clearInterval(slideInterval);
    }

    const handleOnNextClick = () => { 
        count = (count + 1) % marcas.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim")
    }
    const handleOnPrevClick = () => {
        const marcasLength = marcas.length;
        count = (currentIndex + marcasLength - 1) % marcasLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    }

    return (
        <div ref={slideRef} className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <img src={marcas[currentIndex]} alt="" />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPrevClick}></button>
                <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnNextClick}></button>
            </div>
        </div>
    );
}