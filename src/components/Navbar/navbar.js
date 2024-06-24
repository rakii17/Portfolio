import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenuItems">
        <Link activeClass="active" to="homepage" spy={true} smooth={true} offset={-100} duration={400} className="navMenuItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={400} className="navMenuItem">Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={400} className="navMenuItem">Projects</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-150} duration={400} className="navMenuItem">Works</Link>
        <Link activeClass="active" to="studies" spy={true} smooth={true} offset={-65} duration={400} className="navMenuItem">Studies</Link>
        <Link activeClass="active" to="footer" spy={true} smooth={true} offset={-30} duration={400} className="navMenuItem">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
