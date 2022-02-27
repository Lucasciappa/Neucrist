import React from "react";

const SocialMediaCircle = ({fontAwesome, link}) => {
  return (
      <a href={link} target="_blank" rel="noreferrer">
        <span className={`${fontAwesome} iconSocialMediaFooter`}></span>
      </a>
  );
};

export default SocialMediaCircle;
