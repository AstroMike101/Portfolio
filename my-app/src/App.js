import React from 'react';
import Navbar from './Navbar.js'
import About from './About.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Footer from './Footer.js';
import Particles from "react-particles";


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { loadFull } from "tsparticles";
import { useCallback } from "react";





function App() {
  const options = {
    particles: {
      number: {
        value: 20,
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
      {/* <Navbar />
      <About />
      <Experience />
      <Projects /> */}


     


      <Navbar />
      <About id='about' />
      <Experience id="experience" />
      <Projects id="projects" />
      <Footer id="footer" />

      {/* <Contact id="contact" /> */}

    </div>
  );
}

export default App;
