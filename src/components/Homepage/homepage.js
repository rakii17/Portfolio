import React from 'react';
import './homepage.css';
import profilePic from '../../assets/profilepic.png';
import btnImg from '../../assets/telegram.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section id="intro">
      <div className="introContent">
      <img src={profilePic} alt="Profile" className="backgroundIntroImg" />
        <div className="introText">Hello, I'm <span className="introName">Rakesh</span></div>
        <span className="introSubText"> Data Analyst | Frontend Developer
        </span>
        <p className="introPara">
        I'm a recent Engineering graduate from BMS Institute of Technology and Management, I specialize in data analysis and tools like Excel, Python, Power BI and MySQL. I am skilled in ReactJS, JavaScript and Media query as am interested in Frontend Development. My hobbies are  reading, writing fictions and playing cricket. Let's connect to explore how my analytical and technical expertise can add value to your team.
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
