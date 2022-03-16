import React from "react";
import Particles from "react-tsparticles";
import "./Particles.css";

export default function Header() {
  return (
    <>
      <div className="header" id="home">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "",
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                // bubble: {
                //   distance: 400,
                //   duration: 0.1,
                //   opacity: 0.5,
                //   size: 20,
                // },
                // repulse: {
                //   distance: 100,
                //   duration: 0.1,
                // },
              },
            },
            particles: {
              color: {
                value: "#f7b928",
              },
              links: {
                color: "#f7b928",
                distance: 100,
                enable: true,
                opacity: 0.7,
                width: 0.1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 1000,
                },
                value: 40,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 3,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
}
