import React from 'react';
import './Project.css';
import maptyImg from  "./imgs/mapty.png";
import find from  "./imgs/find.png";
import wai from  "./imgs/image copy.png";
// ProjectCard Component
const ProjectCard = ({ image, title, description, technologies }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const projectData = [
    {
        image: `${maptyImg}`,
        title: 'Mapty',
        description: 'Mark your workouts on our websites',
        technologies: [ 'HTML', 'CSS', 'JavaScript']
      },
      {
        image: `${wai}`,
        title: 'where-Am-i',
        description: 'Search for images in our website',
        technologies: ['HTML', 'CSS',  'JavaScript']
      },
     {
      image:`${find}`,
      title: 'Find-Images',
      description: 'Search for images in our website',
      technologies: ['React', 'HTML', 'CSS',  'JavaScript']
    },

    
   
    {
        image: 'path/to/logorain-image.png',
        title: 'Expense-Tracker',
        description: 'Track your Expenses here',
        technologies: ["java"]
      }
  ];

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

function ProjectMain() {
    return (
      <div className="App">
      <h2>Projects</h2>
        <Projects />
      </div>
    );
  }
  
  export default ProjectMain;