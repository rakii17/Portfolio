import React from 'react';
import './projects.css';
import food from '../../assets/food.jpg';
import portfolio from '../../assets/portfolio.jpg';

const projectData = [
  {
    image: food,
    title: 'Foodelicious',
    description: 'Developed a dynamic web application for a food restaurant featuring Home, Menu, About, and Cart sections to enhance user experience and streamline order processing.',
    features: ['Interactive menu display with detailed descriptions and pricing.', 'User-friendly cart functionality for easy order management and checkout.'],
    techStack: ['ReactJS', 'JavScript', 'VS Code'],
    githubLink: 'https://github.com/rakii17'
  },
  {
    image: portfolio,
    title: 'Portfolio Website',
    description: 'Built a dynamic website showcasing my professional skills, projects, work experiences and more responsive.',
    features: ['Comprehensive sections for homepage, skills, projects, works and educational background.', 'User-friendly interface with smooth navigation and visually appealing design.'],
    techStack: ['ReactJS', 'JavScript', 'VS Code'],
    githubLink: 'https://github.com/rakii17/Portfolio'
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
