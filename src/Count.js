import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Count({ number }) {
  return (
    <div>
      <h1 style={{
        fontSize: '4rem'
      }}>
        <CountUp start={0} end={number} duration={2} suffix="+">
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
      </h1>
    </div>
  );
}

export default Count;
