
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>OBETA<span className="accent-dot">.</span></a>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="nav-cta">Let's Talk</button>
          </div>
          <button id="mobileMenuBtn" className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button onClick={() => scrollToSection('about')} className="mobile-link">About</button>
        <button onClick={() => scrollToSection('projects')} className="mobile-link">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="mobile-link">Contact</button>
        <button onClick={() => scrollToSection('contact')} className="mobile-cta">Let's Talk</button>
      </div>
    </>
  );
};

export default Navbar;