'use client';

import { useEffect, useRef } from 'react';
import { FiAward, FiUsers, FiCoffee } from 'react-icons/fi';
import styles from './About.module.css';

export default function About({ setActiveSection }) {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const stats = [
    { icon: FiAward, number: '50+', label: 'Projects Completed' },
    { icon: FiUsers, number: '30+', label: 'Happy Clients' },
    { icon: FiCoffee, number: '∞', label: 'Cups of Coffee' }
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Product Strategy', level: 85 },
    { name: 'User Research', level: 90 },
    { name: 'Prototyping', level: 92 },
    { name: 'Design Systems', level: 88 },
    { name: 'Frontend Dev', level: 75 }
  ];

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.sectionSubtitle}>
                Get to know the person behind the pixels
              </p>
            </div>

            <div className={styles.bio}>
              <p>
                Hello! I'm Chuka, a passionate UI/UX designer with a love for creating 
                digital experiences that not only look beautiful but also solve real problems. 
                I believe in the power of design to transform how people interact with technology.
              </p>
              
              <p>
                With a background in both design and development, I bring a unique perspective 
                to every project. I understand the technical constraints and possibilities, 
                which allows me to create designs that are both innovative and feasible to implement.
              </p>

              <p className={styles.highlighted}>
                <strong>I love blending code + design to create experiences that spark joy.</strong>
              </p>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className={styles.stat}>
                    <IconComponent className={styles.statIcon} />
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.photoPlaceholder}>
              <div className={styles.photoFrame}>
                <div className={styles.photoContent}>
                  <div className={styles.photoBlob}></div>
                </div>
              </div>
            </div>

            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skill}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}