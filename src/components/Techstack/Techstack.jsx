// src/TechStack.js
import React from 'react';
import { motion } from 'framer-motion';
import './Techstack.css';

import bootstrap from "./imgs/simple-icons--bootstrap.png"
import css from "./imgs/simple-icons--css3.png"
import html from "./imgs/uiw--html5.png"
import java from "./imgs/devicon-plain--java.png"
// import sql from "./imgs/simple-icons--postgresql.png"
import react from "./imgs/ri--reactjs-fill.png"
import figma from "./imgs/logos--figma.png"
import git from "./imgs/cib--git.png"
import js from "./imgs/fa-brands--js.png"

const techs = [
  { name: 'REACT', logo: `${react}`},
  { name: 'HTML', logo: `${html}`},
  { name: 'CSS', logo: `${css}` },
  { name: 'JavaScript', logo:`${js}` },
  { name: 'jQuery', logo: `${java}` },
  { name: 'Java', logo: `${java}` },
  { name: 'Bootstrap', logo:`${bootstrap}` },
  { name: 'Git & GitHub', logo:`${git}` },
  // { name: 'PostgreSQL', logo: `${sql}` },
  { name: 'FIGMA', logo: `${figma}`}
];

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <h2>My Tech Stack</h2>
      <div className="tech-stack-grid">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-item"
            whileHover={{ scale:1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={tech.logo} alt={`${tech.name} logo`}  className="tech-logo" />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
