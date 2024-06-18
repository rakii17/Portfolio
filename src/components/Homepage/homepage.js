import React from 'react';
import './homepage.css';
import profilePic from '../../assets/reactL.png';
import btnImg from '../../assets/telegram.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section id="intro">
      <div className="introContent">
      <img src={profilePic} alt="Profile" className="backgroundIntroImg" />
        <div className="hello">Hello,</div>
        <span className="introText">
          I'm <span className="introName">Rakesh</span> <br /> Website Designer <br/> Data Analyst
        </span>
        <p className="introPara">
        As a recent Bachelor of Engineering graduate from BMS Institute of Technology and Management, I specialize in data analysis and software development using tools like Excel, Python, Power BI, Tableau, MySQL, and MongoDB. I am passionate about driving strategic decisions and business growth. My interests in graphic design, reading, writing fictions and playing cricket. Let's connect to explore how my analytical and technical expertise can add value to your team.
        </p>
        <Link to="/contact">
          <button className="btn">
            <img src={btnImg} alt="Button" className="btnImg" /> Reach Out
          </button>
        </Link>
      </div>
      
    </section>
  );
}

export default Homepage;
