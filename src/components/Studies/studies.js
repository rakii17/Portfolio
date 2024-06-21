import React from 'react';
import './studies.css';

const studiesData = [
  {
    title: "Bachelor of Engineering",
    year: "2024",
    college: "BMS Institute of Technology and Management",
    percentage: "7.9(CGPA)",
    skills: "SQL, DBMS, Java, Python, OOPS"
  },
  {
    title: "2nd PUC / 12th Std",
    year: "2020",
    college: "Sri Kongadiyappa Pre-University College",
    percentage: "90%",
    skills: "Python, Microsoft Excel"
  },
  {
    title: "SSLC / 10th Std",
    year: "2018",
    college: "Sri Devala Maharshi English High School",
    percentage: "89%",
    skills: "Linux, Microsoft Excel"
  }
];

const Studies = () => {
  return (
    <div className="studies">
      <div> <h2 className="studies-heading">Studies</h2></div>
      {studiesData.map((study, index) => (
        <div key={index} className="study-bar">
          <div className="study-title">
            {study.title}
            <span className="study-year"> ({study.year})</span>
          </div>
          <div className="study-college">{study.college}</div>
          <div className="study-percentage">Percentage: {study.percentage}</div>
          <div className="study-skills">Skills Gained: {study.skills}</div>
        </div>
      ))}
    </div>
  );
};

export default Studies;
