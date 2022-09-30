import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Nathan Gonçalves</h1>
        <h5 className="text-light">Desenvolvedor Front-End</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src='https://o.remove.bg/downloads/ed662c11-1c17-488d-a10e-c4089c300238/50429318-removebg-preview.png' alt="Nathan Gonçalves" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
