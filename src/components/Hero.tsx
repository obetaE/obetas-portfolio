
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero dot-grid">
      <div className="hero-bg-glow-1"></div>
      <div className="hero-bg-glow-2"></div>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status reveal">
              <div className="status-dot pulse-dot"></div>
              <span className="status-text">Available for work</span>
            </div>
            <h1 className="hero-name reveal" style={{ transitionDelay: '0.1s' }}>
              <span>OBETA</span>
            </h1>
            <div className="hero-title reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="title-line"></div>
              <p className="title-text">Fullstack Developer <span className="accent-text">&</span> UI/UX Designer</p>
            </div>
            <p className="hero-desc reveal" style={{ transitionDelay: '0.3s' }}>
              Crafting digital experiences where great design feels invisible and clean code makes it unstoppable. Specializing in Next.js, React & Figma.
            </p>
            <div className="hero-buttons reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="image-wrapper">
              <div className="image-border"></div>
              <div className="image-glow"></div>
              <div className="image-container">
                <img src="/port.jpeg" alt="Obeta" className="portrait-img" />
                <div className="image-overlay"></div>
              </div>
              <div className="image-card">
                <div className="card-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8552D" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div>
                  <p className="card-label">Core Stack</p>
                  <p className="card-value">Next.js · React · Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator bounce-down">
        <span className="scroll-text">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
};

export default Hero;