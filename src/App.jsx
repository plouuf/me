import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import InfoSection from './components/InfoSection/InfoSection';
import Footer from './components/Footer/Footer';
import ProjectSection from './components/ProjectSection/ProjectSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <InfoSection id={'about'} />
      <ProjectSection id={'projects'} />
      <Footer />
    </Router>
  );
};

export default App;
