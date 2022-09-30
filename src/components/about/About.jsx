import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export default function About() {
  return (
    <section className="" id="about">
      <h5>Me conheça um pouco!</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="about" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiências</h5>
              <small>1+ anos trabalhando</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>3 clientes</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>5+ projetos concluídos</small>
            </article>
          </div>

          <p>
            Olá, meu nome é <span>Nathan</span>, sou desenvolvedor web
          </p>
          <a href="#contact" className="btn btn-primary">
            Contate-me
          </a>
        </div>
      </div>
    </section>
  );
}
