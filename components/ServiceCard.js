import React from "react";
import Image from "next/image";

const ServiceCard = ({image, icon, title, desc}) => {
  return (
    <div className="w-full sm:w-1/2 h-60 p-4">
      <div className="flex h-full relative">
        <Image
          src={image}
          alt="neu1 ejemplo"
          layout="fill"
          objectFit="cover"
        />
        <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-black opacity-0 hover:opacity-40 transition duration-200 ease-in-out">
          {/* <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            THE SUBTITLE
          </h2> */}
          <h1 className="title-font font-black text-4xl text-center mb-3">
            {title}
          </h1>
          <p className="leading-relaxed text-center text-xl">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
