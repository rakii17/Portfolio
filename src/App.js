import React from 'react';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Works from './components/Works/works';
import Studies from './components/Studies/studies';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Homepage />
        <Skills />
        <Projects />
        <Works />
        <Studies />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
