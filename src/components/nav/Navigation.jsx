import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
export default function Navigation() {
  const [active, setActive] = React.useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')}className={active === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActive('#services')} className={active === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
