import React from "react";
import Particles from "../Partciles/Particles";
import SpecialBtn from "../SpecialBtn/SpecialBtn";
import { Zoom } from "react-awesome-reveal";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="particles">
        <Particles />
      </div>
      <div className="header_content">
        <Zoom triggerOnce duration={500}>
          <div className="header_left">
            <h1>
              <span className="colorize">Creative</span> <br /> Digital Agency
            </h1>
            <p>
              <span class="text_1">
                If it has an online presence, we can make it work.
              </span>
              <span class="text_2">Consulting. Strategy. Creativity.</span>
            </p>
            <div class="social-buttons">
              <a
                href="/"
                class="social-buttons__button social-button social-button--facebook"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="/"
                class="social-buttons__button social-button social-button--linkedin"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="/"
                class="social-buttons__button social-button social-button--snapchat"
                aria-label="SnapChat"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="/"
                class="social-buttons__button social-button social-button--github"
                aria-label="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="/"
                class="social-buttons__button social-button social-button--codepen"
                aria-label="CodePen"
              >
                <i class="fab fa-codepen"></i>
              </a>
            </div>
            <SpecialBtn btnName="Contact Us" />
          </div>
        </Zoom>
        <Zoom triggerOnce duration={500}>
          <div className="header_right">
            <img src="images/header-vector.png" alt="" />
          </div>
        </Zoom>
      </div>
    </div>
  );
}
