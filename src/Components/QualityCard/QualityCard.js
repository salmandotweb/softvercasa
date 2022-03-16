import React from "react";
import "./QualityCard.css";

export default function QualityCard({ icon, title, description }) {
  return (
    <>
      <div className="quality">
        <div className="quality-icon">
          <i className={icon}></i>
        </div>
        <div className="quality-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
