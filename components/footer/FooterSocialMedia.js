import React from "react";

const SocialMediaCircle = ({fontAwesome, color}) => {
  return (
    <button
      className={`bg-white ${color} shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3`}
      type="button"
    >
      <i className={fontAwesome}></i>
    </button>
  );
};

export default SocialMediaCircle;
