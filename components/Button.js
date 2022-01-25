import React from "react";
import Link from "next/link";

const Button = ({ link, title, background}) => {
  return (
    <Link href={link}>
      <a
        target="_blank"
        className={`${background} text-white text-center hover:bg-primary-btn-hover hover:shadow-md outline-none ease-linear transition-all duration-200 uppercase px-6 py-3 rounded shadow `}
      >
        {title}
      </a>
    </Link>
  );
};

export default Button;
