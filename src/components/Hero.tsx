import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Create a pool of images representing projects, anime, novels, photography, art.
const IMAGE_POOL = [
  'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&h=600&fit=crop', // Photography
  'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=600&fit=crop', // Art
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop', // Portrait/Person
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop', // Nature/Night
  'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&h=600&fit=crop', // Urban
  'https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&h=600&fit=crop', // Architecture/Photography
  'https://images.unsplash.com/photo-1541562232579-51fca3bb941b?w=800&h=600&fit=crop', // Art/Abstract
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop', // Books/Novel
  'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=800&h=600&fit=crop', // Tech/Product Design
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop', // Anime aesthetic/Spirited away style
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop', // Paint/Art
  '/softroots.PNG',
];

// 2. Function to generate a random "Collage Grid" layout. 
const generateCollageItems = () => {
  return Array.from({ length: 12 }).map((_, i) => {
    const colSpan = Math.random() > 0.5 ? 2 : 1;
    const rowSpan = Math.random() > 0.5 ? 2 : 1;
    const randomImage = IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
    return {
      id: `${i}-${Date.now()}-${Math.random()}`,
      colSpan,
      rowSpan,
      url: randomImage,
    };
  });
};

const Hero: React.FC = () => {
  const [items, setItems] = useState(generateCollageItems());

  // 3. Update the collage every 3.5 seconds to create "constant motion"
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(generateCollageItems());
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero dot-grid">
      <div className="hero-bg-glow-1"></div>
      <div className="hero-bg-glow-2"></div>

      {/* --- COLLAGE BACKGROUND --- */}
      <div className="collage-wrapper">
        <div className="collage-grid">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              transition={{ 
                type: "spring", 
                stiffness: 50, 
                damping: 15, 
                mass: 1 
              }}
              className="collage-item"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
            >
              <motion.img
                src={item.url}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="collage-img"
              />
            </motion.div>
          ))}
        </div>
      </div>


      <div className="hero-overlay"></div>

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
                <img src="/main.jpeg" alt="Obeta" className="portrait-img" />
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