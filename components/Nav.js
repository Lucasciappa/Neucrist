import Link from "next/link";
import Image from "next/image";

const Nav = () => {

  return (
    <>
      <header class="flex justify-between items-center bg-primary-dark py-1 md:py-2 px-4 md:px-8 mx-auto sticky top-0 z-50 shadow-shadow-bot">

        {/* <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-primary-red" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift
          </a> */}
        <Link href={{ pathname: "/" }}>
          <a className="font-bold font-heading" href="#">
            <Image src="/images/logo-neucrist.png" alt="Neucrist Logo Picture" width={90} height={90} objectFit="cover" />
          </a>
        </Link>

        <nav class="hidden lg:flex gap-12">
          <a href="#" className="text-primary-red text-lg font-semibold">Inicio</a>
          <a href="#about" className="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Quienes Somos</a>
          <a href="#productos" className="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Productos</a>
          <a href="#servicios" className="text-gray-600 hover:text-primary-red active:text-indigo-700 text-lg font-semibold transition duration-100">Servicios</a>
        </nav>

        <a href="#contacto" class="hidden lg:inline-block bg-primary-red hover:bg-primary-red-hover focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contacto</a>

        <button type="button" className="inline-flex items-center lg:hidden bg-primary-dark hover:bg-gray-200 focus-visible:ring ring-indigo-300 text-primary-red active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
          <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" />
          <label htmlFor="abrir-cerrar" className="toggle-button" />
          Menu
          <div className="bg-primary-dark w-full h-72 absolute z-50 left-0 top-20 hamburguer shadow-shadow-bot" >
            <div className="my-5 text-center">
              <Link href="#about">
                <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                  Quienes Somos
                </p>
              </Link>
              <Link href="#productos">
                <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                  Productos
                </p>
              </Link>
              <Link href="#servicios">
                <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                  Servicios
                </p>
              </Link>
              <Link href="#contacto">
                <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                  Contacto
                </p>
              </Link>
            </div>
          </div>
        </button>
      </header>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Mandanos un mensaje"
            href="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+Neucrist%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 relative"
          >
            <Image
              src="/images/pngwing.com.png"
              alt="logo WhatsApp"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
    </>
  )
};

export default Nav;