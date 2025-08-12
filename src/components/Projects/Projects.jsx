'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import Link from 'next/link';
import { 
  FaReact, FaNodeJs, FaGithub 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiJavascript, SiHtml5, SiCss3, SiMongodb, SiExpress
} from 'react-icons/si';

const projects = [
  {
    title: "Gamma Suites",
    shortDesc: "A vibrant, modern hotel website built with React and Next.js, featuring an engaging dark theme, interactive sections, and responsive design.",
    image: "GammaSuites.PNG",
    link: "https://gammasuites.vercel.app/",
    tech: ['react', 'nextjs', 'javascript', 'tailwind']
  },
  {
    title: "Travelling With Erii!!",
    shortDesc: "A fully responsive, custom-designed travel blog built from scratch to showcase modern web development and UI/UX practices.",
    image: "/TravelWithErii.PNG",
    link: "https://travelwitherii.vercel.app/homepage",
    tech: ['react', 'javascript', 'html', 'tailwind']
  },
  {
    title: "Verve Digital",
    shortDesc: "Senior-focused music distribution platform combining luxury design with accessibility",
    image: "/VD.PNG",
    link: "https://verve-digital.vercel.app/",
    tech: ['nextjs', 'nodejs', 'mongodb', 'express']
  },
  {
    title: "Soft Roots",
    shortDesc: "This is a dealer company focused on selling customizable trucks to their users",
    image: "/softroots.PNG",
    link: "https://soft-roots.vercel.app/",
    tech: ['nextjs', 'nodejs', 'mongodb', 'express']
  },
  {
    title: "Aces Week Registration Site",
    shortDesc: "This is a registration website used to get feedback from an already built in audience for possible expectations for an event",
    image: "/vol.PNG",
    link: "https://techfest-three.vercel.app/",
    tech: ['nextjs', 'nodejs', 'mongodb', 'css']
  },
  {
    title: "TechFest Jam",
    shortDesc: "This is a live voting platform used to monitor the live votings for an event",
    image: "/vote.PNG",
    link: "https://acestech-jam.vercel.app/",
    tech: ['nextjs', 'nodejs', 'mongodb', 'css']
  },
  {
    title: "TechAcademy",
    shortDesc: "A fully responsive teaching platform with nice designs and nice learning processes",
    image: "/techa.PNG",
    link: "https://tech-academy-nine.vercel.app/",
    tech: ['nextjs', 'nodejs', 'mongodb', 'css']
  },
];

const techIcons = {
  react: <FaReact className="text-[#61DAFB]" />,
  nextjs: <SiNextdotjs className="text-white" />,
  typescript: <SiTypescript className="text-[#3178C6]" />,
  nodejs: <FaNodeJs className="text-[#68A063]" />,
  tailwind: <SiTailwindcss className="text-[#38B2AC]" />,
  javascript: <SiJavascript className="text-[#F7DF1E]" />,
  html: <SiHtml5 className="text-[#E34F26]" />,
  css: <SiCss3 className="text-[#1572B6]" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  express: <SiExpress className="text-white" />,
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            whileHover={{ 
              y: -15,
              boxShadow: "0 0 25px rgba(0, 255, 136, 0.3)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              duration: 0.5
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Neon glow effect */}
            <div className={styles.neonGlow}></div>
            
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  whileHover={{ scale: 1.03 }}
                />
              </div>
              
              <div className={styles.textContent}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.shortDesc}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={styles.techIcon}
                      whileHover={{ 
                        scale: 1.2,
                        filter: "drop-shadow(0 0 6px var(--accent))"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {techIcons[tech]}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hover overlay with button */}
            {hoveredIndex === index && (
              <motion.div
                className={styles.hoverOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit Project
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}