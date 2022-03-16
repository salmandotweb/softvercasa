import React from "react";
import QualityCard from "../QualityCard/QualityCard";
import { Fade } from "react-awesome-reveal";
import "./WhySection.css";

export default function WhySection() {
  return (
    <div className="why-section">
      <Fade>
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>
            It’s our attention to the small stuff, scheduling of timelines and
            keen project management that makes us stand out from the rest.
          </p>
        </div>
      </Fade>
      <div className="qualities-section">
        <div className="quality-img">
          <img src="images/choose-vector.svg" alt="" />
        </div>
        <div className="qualities">
          <QualityCard
            icon="fas fa-adjust"
            title="High Quality Services"
            description="We work hard to ensure that our customers get the best quality they deserve, "
          />
          <QualityCard
            icon="fas fa-pencil-ruler"
            title="Creativity"
            description="We have team which work with creativity and talent, we want to contribute more in the market"
          />
          <QualityCard
            icon="fas fa-clock"
            title="Project On Time"
            description="We deliver every project on time, and we know how to do things right. We've been doing this for over three years now"
          />
          <QualityCard
            icon="fas fa-user-astronaut"
            title="24/7 Support"
            description="We are available 24/7 by telephone (+92) 309-8675247 or text us at (+92) 309-8675247"
          />
        </div>
      </div>
    </div>
  );
}
