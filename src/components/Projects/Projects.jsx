'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Project 1",
    shortDesc: "Brief description",
    longDesc: "Detailed description of the project...",
    image: "/1.jpg",
    video: "/2.mp4",
    link: "https://project1.com"
  },
  {
    title: "Project 1",
    shortDesc: "Brief description",
    longDesc: "Detailed description of the project...",
    image: "/1.jpg",
    video: "/2.mp4",
    link: "https://project1.com"
  },
  {
    title: "Project 1",
    shortDesc: "Brief description",
    longDesc: "Detailed description of the project...",
    image: "/1.jpg",
    video: "/2.mp4",
    link: "https://project1.com"
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

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.gradientBorder}
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
            <h3>{project.title}</h3>
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
                  <h2>{projects[selectedId].title}</h2>
                  <p>{projects[selectedId].longDesc}</p>
                  <a
                    href={projects[selectedId].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}