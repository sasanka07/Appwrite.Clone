import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Programs from './components/Programs/Programs';
import Imageslider from './components/Imageslider/Imageslider';
import Footer from './components/Footer/Footer'; // Import Footer component

const App = () => {
    return (
        <div>
            <Navbar /> {/* Always display Navbar */}
            <Hero />
            <Programs /> {/* Programs section */}
            <Imageslider data={{ label: 'Products', number: '100', duration: '5' }} /> {/* Example data */}
            <Footer /> {/* Add Footer component */}
        </div>
    );
};

export default App;
