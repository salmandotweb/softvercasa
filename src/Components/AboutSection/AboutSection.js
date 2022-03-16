import React from "react";
import { Fade } from "react-awesome-reveal";
import SpecialBtn from "../SpecialBtn/SpecialBtn";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="about-section-left">
        <Fade>
          <p className="about-subText">About Us</p>
          <h1 className="about-title">Who We Are</h1>
          <p className="about-description">
            Softvercasa is a digital agency that provides digital services
            around all over the world. Our team combines decades of experience
            with our passion for helping you achieve your business goals and
            providing best services to help shape your ideas into success.
          </p>
        </Fade>
        <ul className="about-points">
          <li>
            <i className="fas fa-check-circle"></i>
            High Quality Services
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            Project On Time
          </li>
          <li>
            <i className="fas fa-check-circle"></i>
            24/7 Support
          </li>
        </ul>
        <SpecialBtn btnName="Let's Talk" />
      </div>
      <div className="about-section-right">
        <img src="images/about-img.png" alt="" />
      </div>
    </div>
  );
}

export default AboutSection;
