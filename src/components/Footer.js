// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="/services">Services</a>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Tech Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
