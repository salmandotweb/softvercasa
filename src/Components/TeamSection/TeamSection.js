import React from "react";
import { Fade } from "react-awesome-reveal";
import TeamCard from "../TeamCard/TeamCard";
import "./TeamSection.css";

function TeamSection() {
  return (
    <div className="team-section" id="team">
      <Fade>
        <div className="team-section-title">
          <p>Our Team</p>
          <h1>Meet our Expert Team</h1>
        </div>
      </Fade>
      <div className="team-cards-container">
        <TeamCard
          img="images/bilal.jpg"
          name="Bilal Rehman Khan"
          about="Founder & App Developer"
        />
        <TeamCard
          img="images/salman.jpg"
          name="Muhammad Salman"
          about="Web Developer"
        />
        <TeamCard
          img="images/owais.png"
          name="Muhammad Owais"
          about="Full Stack Developer"
        />
      </div>
    </div>
  );
}

export default TeamSection;
