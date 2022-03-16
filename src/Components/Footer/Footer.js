import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; SoftverCasa. All Rights Reserved.</p>
      </div>
      <div className="footer-buttons">
        <a href="/" className="footer-buttons__button" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="footer-buttons__button" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="/" className="footer-buttons__button" aria-label="SnapChat">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="footer-buttons__button" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="/" className="footer-buttons__button" aria-label="CodePen">
          <i className="fab fa-codepen"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
