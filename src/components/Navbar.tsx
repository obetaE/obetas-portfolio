import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update the URL hash without triggering a full page refresh
      window.history.pushState(null, '', `/#${id}`);
    } else if (pathname !== '/') {
      // On a sub-page (e.g. a case study) the section does not exist yet, so
      // navigate home and let ScrollToTop scroll to the hash once it mounts.
      navigate(`/#${id}`);
    }

    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>OBETA<span className="accent-dot">.</span></Link>
          
          <div className="nav-links">
            <Link to="/#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</Link>
            <Link to="/#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Link>
            <Link to="/#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Link>
            <Link to="/#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Let's Talk</Link>
          </div>

          <button 
            id="mobileMenuBtn" 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              // Close icon (X)
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* New mobile dropdown (only visible on small screens) */}
        <div className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="dropdown-container">
            <Link to="/#about" className="mobile-link-new" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</Link>
            <Link to="/#projects" className="mobile-link-new" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</Link>
            <Link to="/#contact" className="mobile-link-new" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Link>
            <Link to="/#contact" className="mobile-cta-new" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Let's Talk</Link>
          </div>
        </div>
      </nav>

      {/* Overlay that blurs the background when menu is open */}
      <div 
        className={`menu-overlay ${mobileMenuOpen ? 'active' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;