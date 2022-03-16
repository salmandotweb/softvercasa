import React from "react";
import SpecialBtn from "../SpecialBtn/SpecialBtn";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="chevron">
        <div className="contact-text">
          <h1>Take your business to next level right now!</h1>
          <p>Make the right choice for your future. Choose SoftverCasa!</p>
          <SpecialBtn btnName="Start Now" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
