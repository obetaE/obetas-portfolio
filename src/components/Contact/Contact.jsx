'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

      if (!formData.name || !formData.email || !formData.message) {
    setError('All fields are required');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    setError('Please enter a valid email address');
    return;
  }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

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
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>

          <div className={styles.formGroup}>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder=" "
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
          </div>

          <motion.button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : undefined}
            whileTap={!loading ? { scale: 0.95 } : undefined}
          >
            {loading ? (
              <span className={styles.loadingText}>
                Sending Message...
                <span className={styles.spinner} />
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {error && (
            <motion.div
              className={styles.errorMessage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              role="alert"
              aria-live="assertive"
            >
              {error}
            </motion.div>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className={styles.infoTitle}>Let's Connect!</h3>
          <p className={styles.infoText}>
            Have a project in mind or just want to say hi?
            <br />
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
              href="https://github.com/obetaE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub className={styles.socialIcon} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/chukwuka-obeta-codes"
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