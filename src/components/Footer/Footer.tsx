import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Connect With Me</h3>
          <div className={styles.socialLinks}>
            <a href="https://github.com/tsr-kairi" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/tsr_kairi" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/tsr-kairi" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <nav>
            <a href="about">About</a>
            <a href="projects">Projects</a>
            <a href="contact">Contact</a>
          </nav>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Ranjit Kairi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
