import React from "react";
import Link from "next/link";

const ItemLink = ({title}) => {
  return (
    <li>
    <Link href="/about">
      <a className="text-gray-200 hover:text-gray-300 font-normal block pb-1 text-md">
        {title}
      </a>
    </Link>
  </li>
  );
};

export default ItemLink;
