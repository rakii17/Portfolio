import React, { useState } from 'react';
import './works.css';

const Works = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="works-container">
      <h2 className="section-heading">Works</h2>

      {/* Internship section */}
      <div className="work-section">
        <div className="work-header" onClick={() => toggleSection('internship')}>
          Internship
        </div>
        {openSection === 'internship' && ( 
          <div className="work-details">
            <p> Company : Aqmenz Automation Private Limited </p>
            <p className='role'>Job Role: Web Developer Trainee</p>
            <p className='resp'>Key Responsibilities :</p>
            <ul>
              <li>Created a food restaurant web application </li>
              <li>Acquired skills in ReactJS, JavaScript</li>
              <li>Enhanced responsiveness of the webpages</li>
              <li>Built a portfolio website</li>
            </ul>
          </div>
        )}
      </div>

      {/* Certificates section */}
      <div className="work-section">
        <div className="work-header" onClick={() => toggleSection('certificates')}>
          Certificates
        </div>
        {openSection === 'certificates' && ( 
          <div className="work-details">
            <ul>
              <li><a href="https://www.udemy.com/certificate/UC-512c0489-e8dd-4bfe-a1e3-8222ace20185/" target="_blank" rel="noopener noreferrer">JavaScript and jQuery for Beginners</a></li>
              <li><a href="https://www.udemy.com/certificate/UC-433d4331-94e4-49b9-bce0-c228c03ec361/" target="_blank" rel="noopener noreferrer">SQL Tutorial - Certification Course</a></li>
              <li><a href="https://www.udemy.com/certificate/UC-ebf26e25-8185-48db-866c-c70a48fd21f0/" target="_blank" rel="noopener noreferrer">Introduction to Business Analyst</a></li>
              <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">Microsoft Excel - Beginner to Advance
              </a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
