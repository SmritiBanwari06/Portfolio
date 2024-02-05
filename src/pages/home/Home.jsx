import React from "react";
import Profile from "../../assets/Me.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

export default function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Smriti Banwari.</span> Web Developer
          </h1>

          <p className="home__description">
            Passionate and dedicated Computer Science student at Bennett
            University with a strong foundation in Data Structures, Algorithms,
            and Software Engineering. Experienced Software Developer Intern at
            Capgemini and Frontend Developer Intern at Prabhavti Digital
            Services, showcasing expertise in UNIX, Python, and web
            technologies.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}
