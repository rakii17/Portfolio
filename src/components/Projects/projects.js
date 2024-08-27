import React from 'react';
import './projects.css';
import food from '../../assets/food.jpg';
import portfolio from '../../assets/portfolio.jpg';
import hr_analytics from '../../assets/business-analyst.png';
import pyml from '../../assets/model.png'
import store from '../../assets/store.png'
import analysis from '../../assets/analysis.png'

const projectData = [

  {
    image: store,
    title: 'Apple Store-Data Analysis',
    features: ['Utilized Power BI to transform raw sales data into actionable insights, creating dynamic dashboards for regional performance analysis. Identified trends and underperforming areas, leading to targeted strategies that boosted revenue in low-performing regions. Monitored KPIs to refine business strategies.'],
    techStack: ['Power BI Desktop', 'KPI Tracking','Kaggle'],
    githubLink: 'https://github.com/rakii17/Super-Store-Data-Analysis '
  }
  ,

  {
    image: hr_analytics,
    title: 'HR Analytics',
    features: ['Utilized Power BI to analyze over 1,400 employee records, focusing on attrition, job satisfaction, and salary distribution. Developed interactive dashboards that enhanced HR analytics, leading to improved data-driven decision-making, strategic planning, and increased organizational efficiency.'],
    techStack: ['Power BI Desktop', 'Data Visualization','Data Cleaning'],
    githubLink: 'https://github.com/rakii17/HR-Analytics '
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
    features: ['Developed a machine learning model for software effort estimation, enhancing project timeline predictions through data analysis and algorithm optimization. Led a team to implement AIML techniques, significantly improving resource allocation efficiency and project planning accuracy.'],
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
