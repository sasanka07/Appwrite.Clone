import React, { useState, useEffect, useRef } from 'react'; // Import necessary hooks
import './Programs.css';
import authLogo from '../../assets/auth.png'; 
import storageLogo from '../../assets/storage.png'; 
import dbLogo from '../../assets/databases.png'; 
import mesLogo from '../../assets/messaging.png'; 
import funLogo from '../../assets/functions.png'; 
import realLogo from '../../assets/realtime.png'; 
import hoverImageAuth from '../../assets/auth-shot.avif'; 
import hoverImageStorage from '../../assets/storage-shot.avif'; 
import hoverImageDb from '../../assets/db-shot.avif'; 
import hoverImageMes from '../../assets/messaging-shot.avif'; 
import hoverImagefun from '../../assets/fn-shot.avif'; 
import hoverImagereal from '../../assets/realtime-shot.avif'; 

const Programs = () => {
    // States for visibility of tooltips and images
    const [visibleSection, setVisibleSection] = useState('');

    // Refs to track each section
    const authRef = useRef(null);
    const dbRef = useRef(null);
    const mesRef = useRef(null);
    const funRef = useRef(null);
    const storageRef = useRef(null);
    const realRef = useRef(null);

    // Intersection Observer to detect which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.id); // Set the visible section when it comes into view
                }
            });
        }, { threshold: 0.6 }); // Adjust threshold for earlier/later trigger

        // Observe each section
        if (authRef.current) observer.observe(authRef.current);
        if (dbRef.current) observer.observe(dbRef.current);
        if (mesRef.current) observer.observe(mesRef.current);
        if (funRef.current) observer.observe(funRef.current);
        if (storageRef.current) observer.observe(storageRef.current);
        if (realRef.current) observer.observe(realRef.current);

        return () => observer.disconnect(); // Clean up observer on unmount
    }, []);

    return (
        <div className='programs-container'>
            {/* Auth Section */}
            <div id="auth" ref={authRef} className='program-section'>
                <div className='program-title'>
                    <img src={authLogo} alt="Auth Icon" />
                    Auth
                </div>
                {visibleSection === 'auth' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Secure login for all users</p>
                                <p>Authenticate users securely with multiple login methods like:
                                    Email/Password, SMS, OAuth, Anonymous, Magic URLs</p>
                                <span>🗹  30+ login methods</span><br />
                                <span>🗹  Support for teams, roles, and user labels</span><br />
                                <span>🗹  Rate-limits and advanced user protection</span><br />
                                <span>🗹  Custom SMTP and email templates</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImageAuth} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>

            {/* Databases Section */}
            <div id="databases" ref={dbRef} className='program-section'>
                <div className='program-title'>
                    <img src={dbLogo} alt="Database Icon" />
                    Databases
                </div>
                {visibleSection === 'databases' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Store, query, and manage data</p>
                                <p className='tooltip-head'>Scalable and robust database backed by your favorite technologies.</p>
                                <span>🗹  Never paused</span><br />
                                <span>🗹  Fast in-memory caching</span><br />
                                <span>🗹  Advanced permission models</span><br />
                                <span>🗹  Custom data validation</span><br />
                                <span>🗹  Relationships support</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImageDb} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>

            {/* Messaging Section */}
            <div id="messaging" ref={mesRef} className='program-section'>
                <div className='program-title'>
                    <img src={mesLogo} alt="Messaging Icon" />
                    Messaging
                </div>
                {visibleSection === 'messaging' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Communicate with your users</p>
                                <p className='tooltip-head'>Set up a fully functioning messaging service for your application.</p>
                                <span>🗹  Draft and preview your messages before delivery</span><br />
                                <span>🗹  Segment your users for specific targeting</span><br />
                                <span>🗹  Send push notifications, emails, and SMS</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImageMes} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>

            {/* Function Section */}
            <div id="functions" ref={funRef} className='program-section'>
                <div className='program-title'>
                    <img src={funLogo} alt="Function Icon" />
                    Functions
                </div>
                {visibleSection === 'functions' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Customize and extend your backend</p>
                                <p className='tooltip-head'>Deploy and scale serverless functions in secure, isolated runtimes.</p>
                                <span>🗹  Automatic deployment from GitHub</span><br />
                                <span>🗹  Trigger using GitHub, CLI, Event Listeners or HTTP requests</span><br />
                                <span>🗹  Support for 30+ runtimes in 13 languages</span><br />
                                <span>🗹  Custom domain support</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImagefun} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>

            {/* Storage Section */}
            <div id="storage" ref={storageRef} className='program-section'>
                <div className='program-title'>
                    <img src={storageLogo} alt="Storage Icon" />
                    Storage
                </div>
                {visibleSection === 'storage' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Upload and manage files</p>
                                <p className='tooltip-head'>Securely store files with advanced compression, encryption, and image transformations.</p>
                                <span>🗹  File encryption at rest and transit</span><br />
                                <span>🗹  Built-in image transformation capabilities</span><br />
                                <span>🗹  Advanced compression with WebP/Brotli support</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImageStorage} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>

            {/* Realtime Section */}
            <div id="realtime" ref={realRef} className='program-section'>
                <div className='program-title'>
                    <img src={realLogo} alt="Realtime Icon" />
                    Realtime
                </div>
                {visibleSection === 'realtime' && (
                    <div className='tooltip-container'>
                        <div className='tooltip'>
                            <div className='tooltip-text'>
                                <p className='tooltip-title'>Realtime events for every service</p>
                                <p className='tooltip-head'>Subscribe and react to any Appwrite event using the Realtime API.</p>
                                <span>🗹  Unlimited subscriptions</span><br />
                                <span>🗹  Built-in permission management</span><br />
                                <span>🗹  Support for DBs, Auth, Storage & Functions</span>
                            </div>
                        </div>
                        <div className='hover-image'>
                            <img src={hoverImagereal} alt="Hover Illustration" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Programs;
