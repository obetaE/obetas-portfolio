'use client';

import { useEffect, useRef } from 'react';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import styles from './ProjectsUi.module.css';

export default function ProjectsUi({ setActiveSection }) {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const projects = [
    {
      id: 1,
      title: 'EcoCart - Sustainable Shopping',
      description: 'A mobile app that helps users make eco-friendly purchasing decisions with carbon footprint tracking.',
      tags: ['UI/UX Design', 'Mobile App', 'Sustainability'],
      image: '/project-1.jpg',
      liveLink: '#',
      codeLink: '#',
      wireframe: '/project-1-wireframe.jpg'
    },
    {
      id: 2,
      title: 'Mindful Moments - Meditation App',
      description: 'Daily meditation and mindfulness app with personalized recommendations and progress tracking.',
      tags: ['UI Design', 'iOS', 'Wellness'],
      image: '/project-2.jpg',
      liveLink: '#',
      codeLink: '#',
      wireframe: '/project-2-wireframe.jpg'
    },
    {
      id: 3,
      title: 'FoodieMap - Local Dining Guide',
      description: 'Discover hidden gem restaurants in your city with community reviews and food photography.',
      tags: ['UX Research', 'Web App', 'Community'],
      image: '/project-3.jpg',
      liveLink: '#',
      codeLink: '#',
      wireframe: '/project-3-wireframe.jpg'
    }
  ];

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            A curated selection of work that showcases my design process and creative solutions
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${styles[`projectCard${index + 1}`]}`}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectLinks}>
                      <a href={project.liveLink} className={styles.projectLink}>
                        <FiExternalLink />
                      </a>
                      <a href={project.codeLink} className={styles.projectLink}>
                        <FiGithub />
                      </a>
                      <button className={styles.wireframeToggle}>
                        <FiCode />
                      </button>
                    </div>
                  </div>
                  <div className={styles.projectNumber}>0{index + 1}</div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <a href={project.liveLink} className={styles.projectCta}>
                  View Case Study <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}