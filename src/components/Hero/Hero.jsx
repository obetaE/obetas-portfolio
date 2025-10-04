'use client';

import { useEffect, useRef } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './Hero.module.css';

export default function Hero({ setActiveSection }) {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section id="home" className={styles.hero} ref={sectionRef}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.headline}>
              Hi, I'm <span className={styles.nameHighlight}>Chuka</span> — 
              I design experiences that{' '}
              <span className={styles.highlight}>delight</span> and{' '}
              <span className={styles.highlight}>inspire</span>.
            </h1>
            
            <p className={styles.subheadline}>
              UI/UX Designer & Creative Developer crafting digital experiences 
              that blend beautiful aesthetics with seamless functionality.
            </p>
            
            <div className={styles.ctaContainer}>
              <a href="#projects" className={styles.primaryCta}>
                See My Work <FiArrowRight />
              </a>
              <a href="#contact" className={styles.secondaryCta}>
                Let's Talk
              </a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.blob}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>
      </div>
    </section>
  );
}