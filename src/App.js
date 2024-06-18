import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Works from './components/Works/works';
import Studies from './components/Studies/studies';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Homepage />
        <Skills />
        <Projects />
        <Studies />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
