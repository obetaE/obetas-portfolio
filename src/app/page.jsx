"use client"
import Image from "next/image";
import styles from "./home.module.css"
import { motion, useScroll, useTransform } from 'framer-motion';
import Projects from "@/components/Projects/Projects";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact/Contact";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div 
        className={styles.scrollProgress} 
        style={{ scaleX }} 
      />
     <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
        <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.accent}>Eric Obeta</span>
          </h1>
          <p className={styles.heroSubtitle}>Full Stack Developer & UI Designer</p>
          <a href="#contact" className={`${styles.ctaButton}`}>
            Get in Touch
          </a>

          <div className={styles.socialLinks}>
    <motion.a 
      href="https://github.com/obetaE" 
      aria-label="Visit my GitHub profile"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaGithub size={24} />
    </motion.a>
    <motion.a
      href="https://linkedin.com/in/chukwuka-obeta-codes"
      aria-label="Visit my LinkedIn profile"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaLinkedin size={24} />
    </motion.a>
    <motion.a
      href="https://x.com/ObetaEric_Codes"
      aria-label="Visit my X profile"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaTwitter size={24} />
    </motion.a>
    <motion.a
      href="mailto:obetachukwuka@gmail.com"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FaEnvelope size={24} />
    </motion.a>
  </div>
        </div>
          

        <motion.div 
            className={`${styles.profileImage} ${styles.floating}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/cv.jpeg" 
                alt="Eric Obeta" 
                className={styles.profileImg}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
      <motion.div className={styles.floating}>
        <div className={styles.head}>
          <h2 className={styles.sectionTitle}>Projects</h2>
        </div>
        <Projects/>
        </motion.div>
      </section>

      <section id="skills" className={styles.section}>
        <div className={styles.skills}>
        <div className={styles.head}>
          <h2 className={styles.sectionTitle}>Skills</h2>
        </div>
        <Skills/>
        </div>
      </section>

      <section id="contact" className={styles.section}>
         <Contact/>
        
      </section>

    </>
  );
}
