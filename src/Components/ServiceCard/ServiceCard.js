import React from "react";
import "./ServiceCard.css";

function ServiceCard({ img, title, description }) {
  return (
    <div className="service-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
