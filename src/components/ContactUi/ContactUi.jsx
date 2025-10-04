'use client';

import { useEffect, useRef, useState } from 'react';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './ContactUi.module.css';

export default function ContactUi({ setActiveSection }) {
  const sectionRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! Let's talk 🎉");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hello@chuka.design',
      link: 'mailto:hello@chuka.design'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Based in San Francisco, CA',
      link: '#'
    }
  ];

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <p className={styles.sectionSubtitle}>
            Ready to bring your next project to life? Let's create something amazing together!
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Get in Touch</h3>
            <p className={styles.contactDescription}>
              I'm always excited to discuss new projects, creative ideas, or opportunities 
              to be part of your vision. Reach out and let's start a conversation!
            </p>

            <div className={styles.contactDetails}>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIcon}>
                      <IconComponent />
                    </div>
                    <div className={styles.contactText}>
                      <div className={styles.contactLabel}>{item.label}</div>
                      <div className={styles.contactValue}>{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className={styles.availability}>
              <div className={styles.statusIndicator}></div>
              <span>Currently available for new projects</span>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="What should I call you?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="Where can I reach you?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                required
                rows="5"
                placeholder="Tell me about your project or just say hi! 👋"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Let's Talk 🎉 <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}