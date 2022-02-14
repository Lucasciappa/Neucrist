import Link from "next/link";

const DropDown = () => {
  return (
    <>
      <div className="group inline-block mb-2 md:m-0 md:z-50">
        <button className="outline-none focus:outline-none rounded-sm flex items-center min-w-16">
          <span className="pr-1 md:text-base font-semibold flex-1 font-primary text-xl">Productos</span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul
          className="bg-primary-gray-light md:bg-white ml-10 border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
        >
          <div className="flex flex-col ">
            <Link href="/productos">
              <a className="rounded-sm px-5 py-2 font-semibold bg-gray-50 hover:bg-primary-gray-light hover:text-pink-800 ">
                Cristales
              </a>
            </Link>
            <Link href="/productos">
              <a className="rounded-sm px-5 py-2 font-semibold bg-gray-50 hover:bg-primary-gray-light hover:text-pink-800">
                Neumáticos
              </a>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
