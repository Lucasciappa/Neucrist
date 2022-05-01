import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h2>Neumatico</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, consequuntur nesciunt minus inventore at recusandae harum! Magnam quis debitis odio!</p>
        </div>
        <img
          src="/images/transparentes/neumatico.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default ProductCard;

{/* <div
      className="
          bg-white
          shadow-md
          h-80
          md:h-96
          mx-3
          rounded-3xl
          flex flex-col
          justify-around
          items-center
          overflow-hidden
        "
    >
      <img
        className="h-1/2 w-full object-cover"
        src="/images/productos/neumaticos/rueda.jpg"
        alt="image"
      />
      <div
        className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
          "
      >
        <div className="flex flex-col justify-start items-baseline font-primary">
          <h1 className="text-xl font-semibold mb-0 text-gray-700">
            Furniture
          </h1>
          <span className="text-xs text-gray-500 mt-0">by supplier</span>
        </div>
        <p className="text-sm font-normal text-gray-700 pb-8 w-4/5">
          Ergonimical for human body curv
        </p>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-red">$200</h1>
          <button className="bg-primary-red text-lg mr-5 text-white px-3 py-1 rounded-lg shadow-md hover:bg-primary-red-hover">
            Ver producto
          </button>
        </div>
      </div>
    </div> */}

// <>
//     <div classNameName="max-w-full bg-primary-gray-light shadow-xl rounded-lg border border-primary-gray-light hover:shadow-2xl overflow-hidden my-4">
//         <div classNameName="px-4 py-2">
//             <h1 classNameName="text-gray-900 font-bold text-2xl uppercase">Neumatico GoodYear</h1>
//             <p classNameName="text-primary-gray text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
//         </div>
//         <div classNameName="h-44 md:h-48 relative">

//             <Image classNameName="h-56 w-full object-cover mt-2" src="/images/productos/neumaticos.jpg" alt="NIKE AIR" layout="fill"
//                 objectFit="cover" />
//         </div>
//         <div classNameName="flex items-center justify-between px-4 py-2 bg-primary-red">
//             <h1 classNameName="text-gray-200 font-bold text-xl">$129</h1>
//             <button classNameName="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Ver Producto</button>
//         </div>
//     </div>
// </>