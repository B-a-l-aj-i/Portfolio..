import React from 'react';
import './Project.css';
import maptyImg from  "./imgs/mapty.png";
import find from  "./imgs/find.png";
import wai from  "./imgs/image copy.png";
import pie from  "./imgs/ExpenseTrackerPiechart.png"
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
        description: 'Visualize and map your workout routes to track fitness progress effectively',
        technologies: [ 'HTML', 'CSS', 'JavaScript']
      },
      {
        image: `${wai}`,
        title: 'where-Am-i',
        description: 'Determine and exhibit your present geographical location, including city and country details',
        technologies: ['HTML','CSS', 'JavaScript']
      },
     {
      image:`${find}`,
      title: 'Find-Images',
      description: 'Conduct a thorough search for imagery across our website to enhance visual content engagement.',
      technologies: [ 'HTML', 'CSS',  'JavaScript','React',]
    },
    {
        image: `${pie}`,
        title: 'Expense-Tracker',
        description: 'Monitor and manage your expenses with our integrated tracking and budgeting tool.',
        technologies: ["Java","JavaFx","OOPS"]
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