// Works.js

import React, { useState } from 'react';
import './works.css';

const Works = () => {
  const [internshipOpen, setInternshipOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);

  const toggleInternship = () => {
    setInternshipOpen(!internshipOpen);
  };

  const toggleCertificates = () => {
    setCertificatesOpen(!certificatesOpen);
  };

  return (
    <div className="works-container">
      <h2 className="section-heading">Works</h2>

      {/* Internship section */}
      <div className="work-section">
        <div className="work-header" onClick={toggleInternship}>
          Internship
        </div>
        {internshipOpen && (
          <div className="work-details">
            <p> Aqmenz Automation Private Limited </p>
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
        <div className="work-header" onClick={toggleCertificates}>
          Certificates
        </div>
        {certificatesOpen && (
          <div className="work-details">
            <ul>
              <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">MySQL for Beginners</a></li>
              <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">JavaScript and jQuery for Beginners</a></li>
              <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">Introduction to Business Analyst</a></li>
              <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">MERN Stack with Blog Project</a></li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default Works;
