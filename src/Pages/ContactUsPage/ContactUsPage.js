import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./ContactUsPage.css";

function ContactUsPage() {
  return (
    <div className="contact-us">
      <div className="contact-us-title">
        <Link to="/home" className="title-links">
          Home
        </Link>
        <span className="title-links">
          <i className="fas fa-chevron-right"></i>Contact
        </span>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactUsPage;
