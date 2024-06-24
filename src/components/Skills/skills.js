import './skills.css';
import React from 'react';
import UiImg from '../../assets/Data.png';
import FigmaImg from '../../assets/bg.png';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillContent">
        <div className="skillTitle">Skills</div>
        <span className="skillDesc">
          I have a solid background in data analysis and front-end development.<br/>This allows me to create visually appealing interfaces that are user-friendly,while effectively analyzing and interpreting data.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={FigmaImg} alt="Figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front-end Dev</h2>
              <p><a href="https://github.com/rakii17" target="_blank" rel="noopener noreferrer">
                 Click here to view works
                </a></p>
            </div>
          </div>

          <div className="skillBar">
            <img src={UiImg} alt="Ui" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Data Analysis</h2>
              <p><a href="https://github.com/rakii17" target="_blank" rel="noopener noreferrer">
                 Click here to view works
                </a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
