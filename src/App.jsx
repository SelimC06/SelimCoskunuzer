import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Research from './sections/Research';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import NetworkSpine from './components/NetworkSpine';

const App = () => {
  return (
    <>
      <NetworkSpine />
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <About />
        <Research />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;