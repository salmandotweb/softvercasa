import React from "react";
import { Link } from "react-router-dom";
import "./SpecialBtn.css";

function SpecialBtn({ btnName }) {
  return (
    <button className="specialBtn">
      <Link to="/home/contact">
        {btnName}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </button>
  );
}

export default SpecialBtn;
