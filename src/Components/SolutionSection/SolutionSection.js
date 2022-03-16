import React from "react";
import "./SolutionSection.css";

function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="solution-section-left">
        <h1>
          We are here for <br /> Business{" "}
          <span className="title-color"> Solution & Ideas </span>
        </h1>
        <div className="solution-section-points">
          <div className="solution-section-point">
            <div className="points-icon-box">
              <img src="images/point-1.png" alt="" />
            </div>
            <div className="points-text">
              <h3>Flexible information tracking</h3>
              <p>
                We provide Flexible information tracking and security for our
                clients, providing you with a secure way to keep track of your
                finances.
              </p>
            </div>
          </div>
          <div className="solution-section-point">
            <div className="points-icon-box">
              <img src="images/point-2.png" alt="" />
            </div>
            <div className="points-text">
              <h3>Customizable workflow</h3>
              <p>
                We provide customizable workflow, as well! In short; there is a
                whole host of ways that we can help you grow your business.
              </p>
            </div>
          </div>
          <div className="solution-section-point">
            <div className="points-icon-box">
              {" "}
              <img src="images/point-3.png" alt="" />
            </div>
            <div className="points-text">
              <h3>Shareable working procedure</h3>
              <p>
                We share working procedure and we give the go-ahead for that
                process if it appears to us would be acceptable
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="solution-section-right">
        <img src="images/solution-img.png" alt="" />
      </div>
    </section>
  );
}

export default SolutionSection;
