
import Link from "next/link";
import Image from 'next/image';
import profilePic from '../public/images/logo-neucrist.PNG';
import { useRouter } from "next/dist/client/router";
import DropDown from "./DropDown";

const Nav = () => {
    const router = useRouter()

    return (
        <>
            <nav className="flex justify-between bg-white text-primary-red w-screen">
                <div className="px-5 xl:px-12 py-3 flex flex-row justify-between w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        <Image
                            src={profilePic}
                            alt="Picture of the author" />
                    </a>
                    {/* <!-- Nav Links --> */}
                    <ul className="hidden md:flex px-4 font-semibold font-heading space-x-8">

                        <Link href="/">
                            <a className="hover:text-pink-800">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="hover:text-pink-800">Quienes Somos</a>
                        </Link>
                        <DropDown />
                        <Link href="/contacto">
                            <a className="hover:text-pink-800">Contacto</a>
                        </Link>
                    </ul>
                </div>
                {/* <!-- Responsive navbar --> */}
                <a className="navbar-burger self-center mr-12 md:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>
            {/* <!-- Does this resource worth a follow? --> */}
            {/* // <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
            //     <div>
            //         <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            //             <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
            //         </a>
            //     </div>
            // </div> */}
        </>

    );
};


export default Nav;

