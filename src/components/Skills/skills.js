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
        I have a strong foundation in data analysis and front-end development, complemented by expertise in UI/UX design. This combination of skills enables me to create visually appealing and user-friendly interfaces while effectively analyzing and interpreting data.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={UiImg} alt="Ui" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Data <br/>Analysis</h2>
              <p>Click here to view works </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={FigmaImg} alt="Figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front-end Development</h2>
              <p>Click here to view works </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={FigmaImg} alt="Figma" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI / UX <br/>Design</h2>
              <p>Click here to view works </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
