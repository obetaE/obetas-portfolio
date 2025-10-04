'use client';

import { useEffect, useRef } from 'react';
import { 
  FiSearch, 
  FiLayout, 
  FiSmartphone, 
  FiPlayCircle, 
  FiCheckCircle 
} from 'react-icons/fi';
import styles from './Process.module.css';

export default function Process({ setActiveSection }) {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('process');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const processSteps = [
    {
      icon: FiSearch,
      title: 'Research & Discovery',
      description: 'Understanding user needs, market analysis, and defining project goals through comprehensive research.',
      color: '#4DA6FF'
    },
    {
      icon: FiLayout,
      title: 'Wireframe & Structure',
      description: 'Creating information architecture and low-fidelity wireframes to establish the foundation.',
      color: '#B28DFF'
    },
    {
      icon: FiSmartphone,
      title: 'Prototype & Design',
      description: 'Developing high-fidelity mockups and interactive prototypes for user testing.',
      color: '#FF6F61'
    },
    {
      icon: FiPlayCircle,
      title: 'Test & Iterate',
      description: 'Conducting usability tests and gathering feedback to refine the design solution.',
      color: '#4DA6FF'
    },
    {
      icon: FiCheckCircle,
      title: 'Deliver & Launch',
      description: 'Preparing final assets, design systems, and supporting development through launch.',
      color: '#B28DFF'
    }
  ];

  return (
    <section id="process" className={styles.process} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>My Design Process</h2>
          <p className={styles.sectionSubtitle}>
            A structured approach that ensures every project delivers meaningful results
          </p>
        </div>

        <div className={styles.processTimeline}>
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepIndicator}>
                  <div 
                    className={styles.stepIcon}
                    style={{ backgroundColor: step.color }}
                  >
                    <IconComponent />
                  </div>
                  <div className={styles.stepConnector}></div>
                  <div className={styles.stepNumber}>0{index + 1}</div>
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.processNote}>
          <p>
            <strong>Note:</strong> This process is flexible and adapts to each project's unique needs, 
            ensuring the best possible outcome for both users and business goals.
          </p>
        </div>
      </div>
    </section>
  );
}