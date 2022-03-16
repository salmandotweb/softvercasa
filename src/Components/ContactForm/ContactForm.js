import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const Result = () => {
  return <p>Your Message has been successfully sent.</p>;
};

function ContactForm() {
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4ylywy",
        "template_g1w2rvd",
        form.current,
        "user_qZ4y74Zh6y6LrPxjhzyaC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="contact-form">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +92 309 86 75 247</div>
          </div>
          <div className="screen-body-item">
            <form className="app-form" onSubmit={sendEmail} ref={form}>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="NAME"
                  name="from_name"
                  required
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="EMAIL"
                  name="user_email"
                  required
                />
              </div>
              <div className="app-form-group message">
                <input
                  className="app-form-control"
                  placeholder="MESSAGE"
                  name="message"
                  required
                />
              </div>
              <div className="result">{result ? <Result /> : null}</div>
              <div className="app-form-group buttons">
                <button className="app-form-button" type="submit" value="Send">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
