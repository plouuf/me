import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'
import InfoSection from './components/InfoSection/InfoSection'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <InfoSection id={"about"} title={'About Me'} />
      <InfoSection id={"skills"} title={'Skills'} />
      <InfoSection id={"projects"} title={'Projects'} />
      <Footer />
    </Router>
  )
}

export default App
