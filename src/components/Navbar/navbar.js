import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navMenuItems">
        <Link to="/homepage" className="navMenuItem">Home</Link>
        <Link to="/skills" className="navMenuItem">Skills</Link>
        <Link to="/projects" className="navMenuItem">Projects</Link>
        <Link to="/works" className="navMenuItem">Works</Link>
        <Link to="/studies" className="navMenuItem">Studies</Link>
        <Link to="/footer" className="navMenuItem">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;