import React from "react";
import Link from "next/link";

const SeeMoreBtn = () => {
  return (
    <Link href="/">
      <a
        target="_blank"
        className={`flex mt-10 m-auto bg-primary-red hover:bg-pink-800 text-primary-white font-bold py-4 px-4 rounded-full h-12 w-12`}
      >
        <i className="fas fa-plus"></i>

      </a>
    </Link>
  );
};

export default SeeMoreBtn;