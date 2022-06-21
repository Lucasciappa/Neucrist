import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/logo-neucrist.png";
import { useRouter } from "next/dist/client/router";
import DropDown from "./DropDown";

const Nav = () => {
  const router = useRouter();

  // return (
  //   <header className="z-50 bg-gray-300 from-gray-400 w-full font-primary sticky top-0">
  //     <nav className="px-5 xl:px-12 flex flex-row justify-between w-full items-center font-primary h-24">
  //       <Link href={{ pathname: "/" }}>
  //         <a className="h-28 w-28 -mt-8 font-bold font-heading" href="#">
  //           <Image src={profilePic} alt="Neucrist Logo Picture" />
  //         </a>
  //       </Link>

  //       {/* <!-- Nav Links --> */}
  //       <div className="flex flex-row justify-between items-center">
  //         <div className="hidden text-lg lg:block text-primary-red font-semibold leading-5">
  //           <ul className="px-4 space-x-8">
  //             <Link href="/">
  //               <a>Home</a>
  //             </Link>
  //             <Link href="/about">
  //               <a>Quienes Somos</a>
  //             </Link>
  //             <Link href="/contacto">
  //               <a>Contacto</a>
  //             </Link>
  //             <DropDown />
  //           </ul>
  //         </div>
  //         <div className="hidden lg:block md:px-16">
  //           <span>
  //             <Link href="tel:+34644318219">
  //               <a className="flex items-center text-primary-red font-semibold hover:text-pink-800 outline-none ease-linear transition-all duration-100">
  //                 <i className="fas fa-phone-alt w-5 mr-2"></i>
  //                 <p className="text-lg">011 53123213</p>
  //               </a>
  //             </Link>
  //           </span>
  //         </div>
  //       </div>
  //       {/* <!-- Responsive navbar --> */}
  //       <div className="flex-none lg:hidden">
  //         <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" />
  //         <label htmlFor="abrir-cerrar" className="toggle-button" />
  //         <div className="bg-primary-gray-light w-full h-72 mt-6 absolute z-50 left-0 hamburguer">
  //           <div className="my-10 text-center">
  //             <Link href="/">
  //               <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
  //                 Home
  //               </p>
  //             </Link>
  //             <Link href="/about">
  //               <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
  //                 Quienes Somos
  //               </p>
  //             </Link>
  //             <Link href="/contacto">
  //               <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
  //                 Contacto
  //               </p>
  //             </Link>
  //             <div className="cursor-pointer w-full hover:bg-gray-300">
  //               <DropDown />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
  //         <div>
  //           <a
  //             title="Mandanos un mensaje"
  //             //todo
  //             href="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
  //             target="_blank"
  //             className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 relative"
  //           >
  //             <Image
  //               src="/images/pngwing.com.png"
  //               alt="logo WhatsApp"
  //               layout="fill"
  //               objectFit="cover"
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </nav>
  //   </header>
  // );

  return (
    <div class="bg-primary-dark pb-6 sm:pb-8 lg:pb-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header class="flex justify-between items-center py-4 md:py-8 mb-4">

          <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-primary-red" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>

            Flowrift
          </a>

          <nav class="hidden lg:flex gap-12">
            <a href="#" class="text-primary-red text-lg font-semibold">Inicio</a>
            <a href="#" class="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Quienes Somos</a>
            <a href="#" class="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Productos</a>
            <a href="#" class="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Servicios</a>
          </nav>

          <a href="#" class="hidden lg:inline-block bg-primary-red hover:bg-primary-red-hover focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contacto</a>

          <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>

            Menu
          </button>
        </header>

        <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">

          <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0" />

          <div class="bg-primary-red mix-blend-multiply absolute inset-0"></div>
          <div class="sm:max-w-xl flex flex-col items-center relative p-4">
            <p class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">Bienvenidos a</p>
            <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Neucrist</h1>

            <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
              <a href="#" class="inline-block bg-primary-red hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contactame</a>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
};

export default Nav;
