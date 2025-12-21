import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import FloatingParticles from './components/FloatingParticles'

function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

