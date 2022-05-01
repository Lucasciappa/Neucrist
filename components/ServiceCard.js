import React from "react";
import Image from "next/image";

const ServiceCard = ({ image, icon, title, desc }) => {
  return (
    <div className="relative block group h-60">
      <span className="absolute inset-0 border-2 border-primary-red border-dashed"></span>

      <div className="relative flex items-end h-full transition-transform transform bg-red-200 border-2 border-primary-red group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 700 412" stroke="currentColor" fill="#C22C0D">
          <path d={icon} />
        </svg>
        <i class="fa-solid fa-user-headset"></i>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */}
          <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
        </div>

        <div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
          <h2 className="mt-4 text-2xl font-semibold">{title}</h2>

          <p className="mt-4">
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
//       <div className="py-4">
//         <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
//           <div>
//             <div className="w-full image-cover rounded-t-md">
//               <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
//                 <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
//                   {" "}
//                   12
//                 </span>
//                 <span className="text-xs tracking-wide font-bold uppercase block font-sans">
//                   April
//                 </span>
//               </div>
//             </div>
//             <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
//               <span className="block text-lg text-gray-800 font-bold tracking-wide">
//                 Book a flight
//               </span>
//               <span className="block text-gray-600 text-sm">
//                 Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
//                 Donec bibendum faucibus purus eget cursus. Proin enim ante,
//                 scelerisque vel sem sit amet, ultrices mollis risus. Praesent
//                 justo felis, ullamcorper a cursus sed, condimentum at dui.
//               </span>
//             </div>
//           </div>
//           <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
//             <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
//               Paris city of light
//             </span>
//             <div className="pt-8 text-center">
//               <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
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