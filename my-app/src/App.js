import React from 'react';
import Navbar from './Navbar.js'
import About from './About.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";




function App() {
  const options = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          area: 1500
        }
      },
      color: {
        value: ["#CAD2C5"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.2,
        width: 0.3
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles options={options} init={particlesInit} />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      
    </div>
  );
} 

export default App;
