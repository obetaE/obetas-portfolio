'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';
import Link from 'next/link';

const projects = [
  {
    title: "Gamma Suites",
    shortDesc: "A vibrant, modern hotel website built with React and Next.js, featuring an engaging dark theme, interactive sections, and responsive design. It showcases amenities, attractions, and a luxury experience tailored for urban travelers.",
    longDesc: "This is a fully responsive hotel website designed with a bold nightlife-inspired aesthetic, using a deep charcoal background with electric purple and cool blue accents. Built with React and Next.js, it features an elegant user interface optimized for both desktop and mobile devices. The site includes a dynamic Experiences section highlighting the hotel's premium amenities and a visually rich Attractions slider that transitions between local destinations with synchronized content and imagery. Animations and smooth interactions elevate the user experience, while clean, semantic code ensures scalability and performance. From layout to micro-interactions, every element was crafted to convey a sense of style, energy, and comfort — perfect for travelers seeking a modern escape.",
    image: "GammaSuites.PNG",
    video: "/Gamma Suites.mp4",
    link: "https://gammasuites.vercel.app/"
  },
  {
  title: "Travelling With Erii!!",
  shortDesc: "A fully responsive, custom-designed travel blog built from scratch to showcase modern web development and UI/UX practices. This project features dynamic content loading, SEO optimization, and interactive elements, all wrapped in a wanderlust-inspired aesthetic. Disclaimer: “Eri” is a fictional persona for demo purposes.",
  longDesc: `Project Overview
“Travelling With Eri!!” is a conceptual travel blog created to demonstrate my full-stack web development and design capabilities. Designed as a portfolio piece, it mimics a real-world travel platform with a focus on clean code, responsive layouts, and immersive storytelling through UI.

Key Technical & Design Goals

Front-End Development: Built with semantic HTML5, CSS3 (Flexbox/Grid), and vanilla JavaScript for animations and dynamic content.

Responsive Design: Mobile-first approach with breakpoints optimized for all devices.

CMS Integration: Mock blog posts managed via a decoupled headless CMS (e.g., Sanity.io) for easy content updates.

Performance: Optimized images (WebP format), lazy loading, and minimal dependencies for fast load times.

Design System: Custom color palette, typography (pairing serif and sans-serif fonts), and reusable components (cards, forms, modals).`,
  image: "/TravelWithErii.PNG",
  video: "/Travel Vlogs.mp4",
  link: "https://travelwitherii.vercel.app/homepage"
},
  {
    title: "Verve Digital",
    shortDesc: "Senior-focused music distribution platform combining luxury design with accessibility",
    longDesc: `Verve Digital: Bridging Generations Through Accessible Music Commerce
Objective: Create a senior-friendly digital storefront for a classic rock distributor needing to balance luxury branding with accessibility requirements for older users.

Key Features & Solutions:

Age-Inclusive UX Framework

Designed 45% larger tap targets and 18px base font sizes

Implemented dyslexic-friendly typography with adjustable contrast modes

Developed voice navigation compatibility using React Aria

Performance-Optimized Architecture

Achieved 0.3s FCP using Next.js SSG with CDN caching

Reduced JS bundle size by 60% via code splitting

Automated image optimization with AVIF/WebP fallbacks

Senior-First Commerce Features

Built "Call to Order" CTA with click-to-dial functionality

Created guided checkout flows with progress indicators

Integrated trusted payment badges at 200% scaling

SEO/ACCESSIBILITY SYNERGY

Structured data markup for screen readers + search crawlers

Dynamic meta descriptions using NLP analysis of vintage tracks

Accelerated Mobile Pages (AMP) for low-bandwidth users`,
    image: "/VD.PNG",
    video: "/Verve-Digital.mp4",
    link: "https://verve-digital.vercel.app/"
  },
  {
    title: "Project 1",
    shortDesc: "Brief description",
    longDesc: "Detailed description of the project...",
    image: "/1.jpg",
    video: "/2.mp4",
    link: "https://project1.com"
  },
  // Add more projects
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId !== null) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedId]);

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`${styles.gradientBorder} ${selectedId !== null && styles.none}`}
          layout
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => setSelectedId(index)}
        >
          <motion.div className={styles.projectCard}>
            <motion.img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className={styles.title}>{project.title}</h3>
            <p>{project.shortDesc}</p>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            className={styles.projectOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className={styles.expandedProject}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedId(null)}
              >
                &times;
              </button>

              <div className={styles.projectContent}>
                <div className={styles.mediaContainer}>
                  <video
                    src={projects[selectedId].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.projectVideo}
                  />
                </div>

                <div className={styles.detailsContainer}>
                  <div className={styles.details}>
                    <h2>{projects[selectedId].title}</h2>
                  <p>{projects[selectedId].longDesc}</p>
                  </div>
                  <Link
                    href={projects[selectedId].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
