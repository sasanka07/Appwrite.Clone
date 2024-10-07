import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
let currentSlide = 0; // Start from the first slide
const slides = document.querySelectorAll('.slide'); // Select all slides
const totalSlides = slides.length;
const programsSection = document.getElementById('programs-section'); // Select the programs section

window.addEventListener('wheel', (event) => {
    const heroContainer = document.querySelector('.hero-container');
    const heroHeight = heroContainer.offsetHeight; // Get the height of the hero section

    if (window.scrollY < heroHeight) { // Check if currently in the hero section
        event.preventDefault(); // Prevent default scrolling behavior

        // Scroll to the programs section
        programsSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start', // Align to the top
        });
    } else {
        if (event.deltaY > 0) {
            // Scrolling down
            currentSlide++;
            if (currentSlide >= totalSlides) {
                currentSlide = totalSlides - 1; // Prevent going past the last slide
            }
        } else {
            // Scrolling up
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = 0; // Prevent going before the first slide
            }
        }

        // Scroll to the current slide
        slides[currentSlide].scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the top of the viewport
        });
    }
});
