import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'


const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
    </Router>
  )
}

export default App
