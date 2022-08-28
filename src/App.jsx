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
      <InfoSection title={'About Me'} />
      <InfoSection title={'Skills'} />
      <InfoSection title={'Projects'} />
      <Footer />
    </Router>
  )
}

export default App
