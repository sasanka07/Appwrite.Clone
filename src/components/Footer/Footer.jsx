import React from 'react';
import './Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Quick Starts</h3>
        <ul>
          <li>Web</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Vue.js</li>
          <li>Nuxt</li>
          <li>SvelteKit</li>
          <li>Refine</li>
          <li>Angular</li>
          <li>React Native</li>
          <li>Flutter</li>
          <li>Apple</li>
          <li>Android</li>
          <li>Qwik</li>
          <li>Astro</li>
          <li>Solid</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Products</h3>
        <ul>
          <li>Auth</li>
          <li>Databases</li>
          <li>Functions</li>
          <li>Messaging</li>
          <li>Storage</li>
          <li>Realtime</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Learn</h3>
        <ul>
          <li>Docs</li>
          <li>Integrations</li>
          <li>Community</li>
          <li>Init</li>
          <li>Threads</li>
          <li>Blog</li>
          <li>Changelog</li>
          <li>Roadmap</li>
          <li>Source code</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Programs</h3>
        <ul>
          <li>Heroes</li>
          <li>Startups</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>Company</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Store</li>
          <li>Contact us</li>
          <li>Assets</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Appwrite.Clone</p>
        <ul className="footer-terms">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
