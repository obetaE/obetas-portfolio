'use client';
import { motion  } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaAward } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiFirebase, SiFigma } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import styles from './Skills.module.css';


// Skill Tags
const tags = ["REST APIs", "Responsive Design", "Web Performance", "CI/CD", "Agile Development"];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { 
        icon: <FaReact />, 
        name: 'React', 
        color: '#61DAFB', 
        level: 90,
        description: "Building dynamic SPAs with hooks and context API",
      },
      { 
        icon: <SiNextdotjs />, 
        name: 'Next.js', 
        color: '#000000', 
        level: 85,
        description: "SSR/SSG applications with optimized performance",
      },
      { 
        icon: <SiTypescript />, 
        name: 'TypeScript', 
        color: '#3178C6', 
        level: 80,
        description: "Strongly typed JavaScript development" 
      },
      { 
        icon: <SiFigma />, 
        name: 'Figma', 
        color: '#F24E1E', 
        level: 75,
        description: "UI/UX design and prototyping" 
      }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { 
        icon: <FaNodeJs />, 
        name: 'Node.js', 
        color: '#68A063', 
        level: 85,
        description: "Building scalable server-side applications" 
      },
      { 
        icon: <DiJava />, 
        name: 'Java', 
        color: '#007396', 
        level: 75,
        description: "Object-oriented programming and enterprise solutions" 
      },
      { 
        icon: <FaDatabase />, 
        name: 'SQL', 
        color: '#00758F', 
        level: 80,
        description: "Database design and management" 
      },
      { 
        icon: <SiFirebase />, 
        name: 'Firebase', 
        color: '#FFCA28', 
        level: 70,
        description: "Real-time database and authentication services" 
      }
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Developer",
    year: 2023,
    issuer: "Amazon Web Services"
  },
  {
    name: "React Professional",
    year: 2022,
    issuer: "Meta"
  },
  // Add more certifications
];

export default function Skills() {


  return (
    <div className={styles.skillsContainer}>



      {skillCategories.map((category, catIndex) => (
        <div key={category.title} className={styles.categorySection}>
          <motion.h3 
            className={styles.categoryTitle}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: catIndex * 0.2 }}
          >
            {category.title}
          </motion.h3>
          
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
              >
                <div className={styles.iconWrapper} style={{ color: skill.color }}>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                </div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, type: "spring" }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <div className={styles.skillDescription}>
                  <p>{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

       {/* Tags Cloud */}
      <div className={styles.categorySection}>
        <motion.h3 
          className={styles.categoryTitle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Core Competencies
        </motion.h3>
        <div className={styles.tagCloud}>
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className={styles.tag}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className={styles.categorySection}>
        <motion.h3 
          className={styles.categoryTitle}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Certifications
        </motion.h3>
        
        <div className={styles.certificationsGrid}>
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.name}
              className={styles.certificationCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.certificationHeader}>
                <FaAward className={styles.certificationIcon} />
                <h4 className={styles.certificationName}>{certification.name}</h4>
              </div>
              <div className={styles.certificationDetails}>
                <span className={styles.issuer}>{certification.issuer}</span>
                <span className={styles.year}>{certification.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}