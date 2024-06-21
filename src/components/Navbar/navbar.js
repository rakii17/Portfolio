import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenuItems">
        <Link to="homepage" spy={true} smooth={true} offset={-30} duration={100} className="navMenuItem">Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={10} duration={600} className="navMenuItem">Skills</Link>
        <Link to="projects" spy={true} smooth={true} offset={-15} duration={700} className="navMenuItem">Projects</Link>
        <Link to="works" spy={true} smooth={true} offset={-30} duration={1200} className="navMenuItem">Works</Link>
        <Link to="studies" spy={true} smooth={true} offset={-30} duration={1200} className="navMenuItem">Studies</Link>
        <Link to="footer" spy={true} smooth={true} offset={-30} duration={1200} className="navMenuItem">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
