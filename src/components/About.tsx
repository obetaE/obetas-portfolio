
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const countersRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);


  const animateCounter = (el: HTMLElement) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.target || '0');
    const duration = 1500;
    const start = performance.now();
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + (target === 99 ? '%' : '+');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Animate skill bars
          const skillBars = entry.target.querySelectorAll('.skill-fill');
          skillBars.forEach(bar => {
            setTimeout(() => bar.classList.add('filled'), 300);
          });
          
          // Animate counters (animateCounter now defined)
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => {
            animateCounter(counter as HTMLElement);
          });
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []); // No dependency on animateCounter because it's stable

  return (
    <section id="about" className="about-section">
      <div className="about-bg-glow"></div>
      <div className="about-container">
        <div className="section-header reveal">
          <span className="section-number">01</span>
          <div className="section-line"></div>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <h3 className="about-heading">
              I build products<br />
              <span className="accent-text">that matter.</span>
            </h3>
            <p className="about-desc">I'm a fullstack developer and UI/UX designer who believes great software should feel invisible — effortless for the user, yet powerful under the hood. I bridge the gap between pixel-perfect design and production-grade code.</p>
            <p className="about-subdesc">With deep expertise in Next.js, React, and Figma, I deliver end-to-end solutions — from concept and wireframe to deployment and scale. Every line of code is intentional; every design decision is purposeful.</p>
          </div>
          <div className="about-stats">
            <div className="stats-grid reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="stat-card">
                {/* Fixed ref callback: block body, returns void */}
                <p className="counter" data-target="50" ref={el => { countersRef.current[0] = el; }}>0</p>
                <p className="stat-label">Projects Delivered</p>
              </div>
              <div className="stat-card">
                <p className="counter" data-target="4" ref={el => { countersRef.current[1] = el; }}>0</p>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-card">
                <p className="counter accent-text" data-target="99" ref={el => { countersRef.current[2] = el; }}>0</p>
                <p className="stat-label">Client Satisfaction %</p>
              </div>
              <div className="stat-card">
                <p className="counter" data-target="15" ref={el => { countersRef.current[3] = el; }}>0</p>
                <p className="stat-label">Happy Clients</p>
              </div>
            </div>
            <div className="skills-container reveal" style={{ transitionDelay: '0.25s' }}>
              <div className="skill-item">
                <div className="skill-header"><span>Frontend Development</span><span className="skill-percent">92%</span></div>
                <div className="skill-bar-bg"><div className="skill-fill" style={{ '--fill': '92%' } as React.CSSProperties} ref={el => { skillBarsRef.current[0] = el; }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-header"><span>Backend Development</span><span className="skill-percent">85%</span></div>
                <div className="skill-bar-bg"><div className="skill-fill" style={{ '--fill': '85%' } as React.CSSProperties} ref={el => { skillBarsRef.current[1] = el; }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-header"><span>UI/UX Design</span><span className="skill-percent">90%</span></div>
                <div className="skill-bar-bg"><div className="skill-fill" style={{ '--fill': '90%' } as React.CSSProperties} ref={el => { skillBarsRef.current[2] = el; }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-header"><span>Mobile Development</span><span className="skill-percent">78%</span></div>
                <div className="skill-bar-bg"><div className="skill-fill" style={{ '--fill': '78%' } as React.CSSProperties} ref={el => { skillBarsRef.current[3] = el; }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;