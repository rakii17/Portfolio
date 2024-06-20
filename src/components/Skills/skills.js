import './skills.css';
import React from 'react';
import reactImg from '../../assets/reactLogo.png';
import UiImg from '../../assets/Ui.jpg';
import FigmaImg from '../../assets/Figma.jpg';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillContent">
        <div className="skillTitle">Skills</div>
        <span className="skillDesc">
        I have a solid background in data analysis and front-end development, complemented by strong expertise in UI/UX design. This allows me to create visually appealing interfaces that are user-friendly, <br/>while effectively analyzing and interpreting data.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UiImg} alt="Ui" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Data Analysis</h2>
              <p>Click here to view works </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={FigmaImg} alt="Figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front-end Dev</h2>
              <p>Click here to view works </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={FigmaImg} alt="Figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI / UX  Design</h2>
              <p>Click here to view works </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
