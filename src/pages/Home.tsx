import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStackSlider from '../components/TechStackSlider';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/** The original single-page portfolio, now its own route component. */
const Home: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <TechStackSlider />
    <About />
    <ProjectsSection />
    <Contact />
    <Footer />
  </>
);

export default Home;
