import React from "react";

const SmallCard = ({ image, title }) => {
  const styling = {
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className="relative w-full h-48 md:h-96 lg:h-40 bg-cover bg-center group rounded-sm overflow-hidden shadow-lg"
      style={styling}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
      <div className="relative w-full h-full px-4 py-5 sm:px-3 lg:px-4 flex flex-col justify-end items-start">
        <p className="text-center text-white text-xl font-semibold">
          <span className="absolute inset-0"></span>
          {title}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;