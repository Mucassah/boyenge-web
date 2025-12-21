import React from 'react';
import './Television.css';

const BoyengeTV = () => {
  const youtubeUrl = "https://www.youtube.com/@BoyengeTV"; 

  return (
    <div className="boyenge-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="logo-main">BOYENGE<span>TV</span></div>
        <h1>Broadcasting Excellence</h1>
        <p>Your premier destination for high-quality television and media services.</p>
        
        <div className="cta-container">
          <a 
            href={youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="youtube-btn"
          >
            Watch on YouTube
          </a>
          <div className="contact-info">
            <p>Direct inquiries: <a href="mailto:television@boyenge.com">television@boyeneg.com</a></p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon">📡</div>
            <h3>Broadcasting</h3>
            <p>Reliable live transmission and satellite broadcasting services for global reach.</p>
          </div>
          <div className="service-card">
            <div className="icon">🎬</div>
            <h3>Content Production</h3>
            <p>Professional studio recording, editing, and creative media production.</p>
          </div>
          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>Digital Media</h3>
            <p>Streaming services and digital content distribution for modern audiences.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Boyenge Television. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BoyengeTV;