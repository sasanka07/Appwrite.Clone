import React, { useRef } from 'react';
import './hero.css';

const Hero = () => {
  const heroRef = useRef(null); // Reference to the hero section

  return (
    <div className="hero" ref={heroRef}> {/* Assign ref to the hero section */}
      <div className='Product-btns'>
        <button className='btn'>
          <img src="" alt="" /> PRODUCTS_
        </button>
        <div className='message'>Your backend, minus the hassle</div>
        <div className='description'>
          Build secure and scalable applications with less code. Add authentication, databases,<br />
          storage, and more using Appwrite's development platform.
        </div>
      </div>
    </div>
  );
}

export default Hero;
