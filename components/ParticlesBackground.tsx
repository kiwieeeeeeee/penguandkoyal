"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 120,

        particles: {
          color: {
            value: "#ff9acb",
          },

          links: {
            color: "#ff9acb",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },

          number: {
            density: {
              enable: true,
            },
            value: 60,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        detectRetina: true,
      }}
    />
  );
}