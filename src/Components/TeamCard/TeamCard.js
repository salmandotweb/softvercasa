import React from "react";
import "./TeamCard.css";

function TeamCard({ img, name, about }) {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img src={img} alt="" />
      </div>
      <div className="team-card-details">
        <div className="team-card-about">
          <p className="team-member-name">{name}</p>
          <p className="team-member-about">{about}</p>
        </div>
        <ul className="team-social-links">
          <li>
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
