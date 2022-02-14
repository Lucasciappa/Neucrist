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

// const ServiceCard = ({ image, icon, title, desc }) => {
//   return (
//     <>
//       <div class="py-4">
//         <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
//           <div>
//             <div class="w-full image-cover rounded-t-md">
//               <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
//                 <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
//                   {" "}
//                   12
//                 </span>
//                 <span class="text-xs tracking-wide font-bold uppercase block font-sans">
//                   April
//                 </span>
//               </div>
//             </div>
//             <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
//               <span class="block text-lg text-gray-800 font-bold tracking-wide">
//                 Book a flight
//               </span>
//               <span class="block text-gray-600 text-sm">
//                 Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
//                 Donec bibendum faucibus purus eget cursus. Proin enim ante,
//                 scelerisque vel sem sit amet, ultrices mollis risus. Praesent
//                 justo felis, ullamcorper a cursus sed, condimentum at dui.
//               </span>
//             </div>
//           </div>
//           <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
//             <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
//               Paris city of light
//             </span>
//             <div class="pt-8 text-center">
//               <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
//                 Learn more
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ServiceCard;
