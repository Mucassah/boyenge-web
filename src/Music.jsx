import React from 'react';
import './Music.css';

const BoyengeMusic = () => {
  return (
    <div className="landing-page">
      {/* Header/Nav has been removed */}

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>World-Class Sound Experiences</h1>
          <p className="est">Established 2025</p>
          <p className="mission">
            Transforming ideas into powerful audio productions that resonate worldwide. 
            We specialize in producing, recording, mixing, and mastering across all genres.
          </p>

          {/* Social Links moved here */}
          <div className="hero-socials">
            <a href="https://youtube.com/@boyengemusic?si=xS6jdvAeG0wRN1SI" target="_blank" rel="noopener noreferrer" className="social-btn yt">YouTube</a>
            <a href="https://open.spotify.com/artist/0wPeG4O1NzVrt1fFx6DDEa" target="_blank" rel="noopener noreferrer" className="social-btn sp">Spotify</a>
          </div>

          <a href="#services" className="cta-button">Explore Our Services</a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <span>🎹</span>
            <h3>Music Production</h3>
            <p>From initial concept to the final polished track.</p>
          </div>
          <div className="service-card">
            <span>🎚️</span>
            <h3>Mixing & Mastering</h3>
            <p>Professional, radio-ready sound quality for every release.</p>
          </div>
          <div className="service-card">
            <span>🎧</span>
            <h3>Recording Studio</h3>
            <p>State-of-the-art facilities designed for elite artists.</p>
          </div>
          <div className="service-card">
            <span>🎼</span>
            <h3>Songwriting</h3>
            <p>Original compositions for independent artists and global brands.</p>
          </div>
          <div className="service-card">
            <span>🎬</span>
            <h3>Sound Design</h3>
            <p>Film scoring, background music, and cinematic effects.</p>
          </div>
          <div className="service-card">
            <span>📀</span>
            <h3>Artist Development</h3>
            <p>Mentorship, branding, and strategic career guidance.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p><strong>📍 Address:</strong> 80 Bis Q/MEDJE I C/MANGOBO Kisangani DR Congo</p>
            <p><strong>📞 Phone:</strong> +243854534130</p>
            <p><strong>📧 Email:</strong> music@boyenge.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Boyenge Music. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BoyengeMusic;