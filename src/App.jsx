import React from 'react'
import Hero from './components/Hero'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Courses from './components/Courses'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <TechnicalSkills />
      <Projects />
      <Courses />
      <About />
      <Contact />
    </div>
  )
}

export default App

