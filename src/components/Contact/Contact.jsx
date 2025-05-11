'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Get In Touch
      </motion.h2>

      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <motion.form 
          className={styles.contactForm}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className={styles.formGroup}>
            <input 
              type="text" 
              id="name" 
              className={styles.input}
              placeholder=" "
            />
            <label htmlFor="name" className={styles.label}>Name</label>
          </div>

          <div className={styles.formGroup}>
            <input 
              type="email" 
              id="email" 
              className={styles.input}
              placeholder=" "
            />
            <label htmlFor="email" className={styles.label}>Email</label>
          </div>

          <div className={styles.formGroup}>
            <textarea 
              id="message" 
              className={styles.textarea}
              placeholder=" "
              rows="4"
            ></textarea>
            <label htmlFor="message" className={styles.label}>Message</label>
          </div>

          <motion.button
            className={styles.submitButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className={styles.infoTitle}>Let's Connect!</h3>
          <p className={styles.infoText}>
            Have a project in mind or just want to say hi?<br />
            I'll try my best to get back to you!
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>ObetaChukwuka1@gmail.com</span>
            </div>
            
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <span>+234 805 102 5661</span>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub className={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin className={styles.socialIcon} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}