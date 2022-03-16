import React from "react";
import Count from "../../Count";
import "./CounterBanner.css";

function CounterBanner() {
  const numbers = (title, number) => (
    <div className="number">
      <p>&#8226; {title}</p>
      <h1>{number}</h1>
    </div>
  );

  return (
    <div className="counter-banner">
      {numbers("Active CLients", <Count number="220" />)}
      {numbers("Projects Done", <Count number="500" />)}
      {numbers("Team Advisors", <Count number="20" />)}
      {numbers("Glorious Years", <Count number="1" />)}
    </div>
  );
}

export default CounterBanner;
