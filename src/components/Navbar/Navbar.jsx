'use client';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}>Eric Obeta</span>
        
        {/* Desktop Links */}
        <div className={styles.links}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}