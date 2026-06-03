import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from "./components/Preloader"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStackSlider from './components/TechStackSlider'
import About from './components/About'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import Footer from "./components/Footer"

const App: React.FC = () => {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!preloaderVisible) {
      // Trigger hero reveals after preloader
      setTimeout(() => {
        document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('active'));
      }, 400);
    }
  }, [preloaderVisible]);

  return (
    <div className="app">
      {preloaderVisible && <Preloader />}
      <Navbar />
      <Hero />
      <TechStackSlider />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
      <div className="grain"></div>
    </div>
  );
};

export default App;