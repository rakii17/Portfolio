import React from 'react';
import './projects.css';
import javaL from '../../assets/javaL.png';
import instag from '../../assets/instag.png';

const projectData = [
  {
    image: instag,
    title: 'Foodelicious',
    description: 'A web service for a food restaurant webpage, designed to handle all the essential operations.',
    features: ['Menu management, Order processing ', 'Reservation and  Review management'],
    techStack: ['ReactJS', 'NodeJS', 'MongoDB'],
    githubLink: 'https://github.com/rakii17'
  },
  {
    image: javaL,
    title: 'Blog Web Application',
    description: 'A RESTful API web service for a blog project. This API performs all the CRUD operations.',
    features: ['Create, read, update, delete posts ', 'Comment and Like management'],
    techStack: ['ReactJS', 'NodeJS', 'MongoDB'],
    githubLink: 'https://github.com/rakii17/Blog-Web-Application'
  }
];

const Projects = () => {
  return (
    <div>
      <div className='projectsTitle'>Projects</div>
      <div className="projects-container">

        {projectData.map((project, index) => (
          
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="project-techstack">
                {project.techStack.join(', ')}
              </div>
              <button
                onClick={() => window.open(project.githubLink, '_blank')}
                className="project-button"
              >
                View on GitHub
              </button>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Projects;
