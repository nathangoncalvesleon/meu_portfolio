import React from "react";
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://www.facebook.com/" target="_blank">
      <BsFacebook/>

      </a>
      <a href="https://www.facebook.com/" target="_blank">
      <BsGithub/>

      </a>
    </div>
  );
};

export default HeaderSocials;
