import React from 'react';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Works from './components/Works/works';
import Studies from './components/Studies/studies';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="homepage">
          <Homepage />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="studies">
          <Studies />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
