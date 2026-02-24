import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans text-primary">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Gallery />
              <Contact />
              
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;