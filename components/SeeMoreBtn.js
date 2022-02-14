import React from "react";
import Link from "next/link";

const SeeMoreBtn = () => {
  return (
    <Link href="/">
      <a
        target="_blank"
        className={`flex my-5 m-auto bg-primary-red hover:bg-pink-800 text-primary-white font-bold py-8 px-8 rounded-full h-20 w-20`}
      >
        <i className="fas fa-plus"></i>

      </a>
    </Link>
  );
};

export default SeeMoreBtn;