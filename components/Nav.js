import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/logo-neucrist.svg";
import { useRouter } from "next/dist/client/router";
import DropDown from "./DropDown";

const Nav = () => {
  const router = useRouter();

  return (
    <header className="z-50 bg-gray-700 w-full font-primary sticky top-0">
      <nav className="flex justify-between font-primary">
        <div className="px-5 xl:px-12 py-3 flex flex-row justify-between w-full items-center">
          {/* <a className="text-3xl font-bold font-heading" href="#">
                        <Image
                            src={profilePic}
                            alt="Picture of the author" />
                    </a> */}
          <Link href={{ pathname: "/" }}>
            <a className="text-3xl font-bold font-heading" href="#">
              <Image src={profilePic} alt="Neucrist Logo Picture" />
            </a>
          </Link>

          {/* <!-- Nav Links --> */}
          <div className="flex flex-row justify-between items-center">
            <div className="hidden text-lg lg:block text-primary-red font-semibold leading-5">
              <ul className="px-4 space-x-8">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/about">
                  <a>Quienes Somos</a>
                </Link>
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
                <DropDown />
              </ul>
            </div>
            <div className="hidden lg:block md:px-16">
              <span>
                <Link href="tel:+34644318219">
                  <a className="flex items-center text-primary-red font-semibold hover:text-pink-800 outline-none ease-linear transition-all duration-100">
                    <i className="fas fa-phone-alt w-5 mr-2"></i>
                    <p className="text-lg">011 53123213</p>
                  </a>
                </Link>
              </span>
            </div>
          </div>
          {/* <!-- Responsive navbar --> */}
          <div className="flex-none lg:hidden">
            <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" />
            <label htmlFor="abrir-cerrar" className="toggle-button" />
            <div className="bg-primary-gray-light w-full h-72 mt-6 absolute z-50 left-0 hamburguer">
              <div className="my-10 text-center">
                <Link href="/">
                  <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                    Home
                  </p>
                </Link>
                <Link href="/about">
                  <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                    Quienes Somos
                  </p>
                </Link>
                <Link href="/contacto">
                  <p className="font-primary text-xl cursor-pointer font-semibold w-full py-3 hover:bg-gray-300">
                    Contacto
                  </p>
                </Link>
                <p className="cursor-pointer w-full hover:bg-gray-300 ml-2">
                  <DropDown />
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Mandanos un mensaje"
            //todo
            href="https://api.whatsapp.com/send/?phone=01131063791&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com%2F&app_absent=0"
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
    </header>
  );
};

export default Nav;
