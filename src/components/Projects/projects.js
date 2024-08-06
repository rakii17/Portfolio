import React from 'react';
import './projects.css';
import food from '../../assets/food.jpg';
import portfolio from '../../assets/portfolio.jpg';
import pyml from '../../assets/model.png'
import store from '../../assets/store.png'
import analysis from '../../assets/analysis.png'

const projectData = [

  {
    image: store,
    title: 'Apple Store-Data Analysis',
    features: ['Implemented Power BI features to turn raw data into actionable insights, supporting data-driven decisions for the Apple Superstore.',' Monitored sales performance over time to identify trends and patterns.', 'Analyzed sales data by region and state to highlight high and low-performing areas.'],
    techStack: ['Power BI Desktop', 'Data Visualization','Kaggle'],
    githubLink: 'https://github.com/rakii17/Super-Store-Data-Analysis '
  }
  ,
  {
    image: analysis,
    title: 'Flipkart Mobiles-Data Analysis',
    features: ['This project features dynamic dashboards and interactive reports that offer comprehensive insights into mobile phones available in the Indian market.',' Created interactive Power BI dashboards to analyze mobile price distribution, premium offerings, and color preferences in the Indian market.', 'Performed detailed market analysis to visualize pricing strategies and brand positioning, aiding strategic decision-making.'],
    techStack: ['Power BI Desktop', 'Data Visualization','Kaggle'],
    githubLink: 'https://github.com/rakii17/Flipkart-Mobiles-Dataset-Analysis '
  }
  ,
  {
    image: pyml,
    title: 'Software Effort Estimation',
    features: ['Developed and implemented a machine learning-based software effort estimation model using AIML techniques, enhancing project timeline and resource predictions.', 'Led the creation of an advanced software effort estimation solution, applying machine learning principles to improve project management efficiency.'],
    techStack: ['Python', 'Matplotlib','Pandas', 'Numpy'],
    githubLink: 'https://github.com/rakii17/'
  }
  ,

  {
    image: food,
    title: 'Foodelicious',
    features: ['Interactive menu display with detailed descriptions and pricing.', 'User-friendly cart functionality for easy order management and checkout.'],
    techStack: ['ReactJS', 'JavScript', 'VS Code'],
    githubLink: 'https://github.com/rakii17'
  },
  
  {
    image: portfolio,
    title: 'Portfolio Website',
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
