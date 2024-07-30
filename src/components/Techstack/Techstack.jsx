// src/TechStack.js
import React from 'react';
import { motion } from 'framer-motion';
import './Techstack.css';

const techs = [
  { name: 'HTML', logo: 'path/to/html-logo.png' },
  { name: 'CSS', logo: 'path/to/css-logo.png' },
  { name: 'JavaScript', logo: 'path/to/javascript-logo.png' },
  { name: 'jQuery', logo: 'path/to/jquery-logo.png' },
  { name: 'Java', logo: 'path/to/java-logo.png' },
  { name: 'Bootstrap', logo: 'path/to/bootstrap-logo.png' },
  { name: 'Git & GitHub', logo: 'path/to/git-logo.png' },
  { name: 'PostgreSQL', logo: 'path/to/postgresql-logo.png' },
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
