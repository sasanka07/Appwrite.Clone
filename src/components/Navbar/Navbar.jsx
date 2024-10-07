import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/appwrite.svg';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control visibility of the navbar
  let lastScrollTop = 0; // Variable to keep track of last scroll position

  // Scroll event logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach the scroll event

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <div className={`Navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
      <div className="Navbar-left">
        <img src={logo} alt="Appwrite Logo" />
        <ul>
          <li>Docs</li>
          <li>Community</li>
          <li>Blogs</li>
          <li>Integrations</li>
          <li>Changelog</li>
          <li>Pricing</li>
          <li>
            <button className="btn">Get Started</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
