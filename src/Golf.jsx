import React from 'react';
import './Golf.css';
import Video from './assets/golf.webm'; 

function Golf () {
    return (
        <div className="golf-hero">
            <video
                className="background-video"
                src={Video}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="golf-overlay">
                <h2>YOUR ULTIMATE GOLFING DESTINATION</h2>
                <a href="mailto:info@boyenge.com?subject=Book%20a%20Tee%20Time" className="tee-button">
                BOOK A TEE TIME
                </a>
            </div>
            <a
                href="https://wa.me/+243854543130" // replace with your number
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                >
                <i className="fab fa-whatsapp"></i>
            </a>

         </div>
    );
}

export default Golf;
