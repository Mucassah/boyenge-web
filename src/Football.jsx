import React from 'react';
import './Football.css';

const BoyengeFC = () => {
  return (
    <div className="bfc-body-wrapper">
      {/* Hero Section */}
      <section className="bfc-hero">
        <div className="bfc-hero-overlay">
          <div className="bfc-hero-content">
            <h1 className="bfc-main-title">Nurturing the Next Generation of <span className="bfc-gold-text">Football Legends</span></h1>
            <p className="bfc-hero-subtext">At Boyenge Football Club, we develop character, discipline, and elite talent through professional coaching.</p>
            
            {/* Updated Button to Link to Email */}
            <a href="mailto:football@boyenge.com?subject=Academy%20Inquiry&body=Hello%20Boyenge%20FC,%20I%20am%20interested%20in%20joining%20the%20academy..." className="bfc-cta-link">
              <button className="bfc-cta-btn">Join the Academy</button>
            </a>
          </div>
        </div>
      </section>

      {/* Talent Growth Info */}
      <section className="bfc-info-block">
        <div className="bfc-container">
          <h2 className="bfc-section-title">Our Commitment to Talent Growth</h2>
          <div className="bfc-title-underline"></div>
          <p className="bfc-description">
            Boyenge FC is dedicated to identifying raw talent and refining it through professional 
            training modules. Our academy focuses on tactical intelligence, physical conditioning, 
            and mental resilience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bfc-services-area">
        <div className="bfc-container bfc-grid">
          <div className="bfc-service-card">
            <div className="bfc-card-icon">⚽</div>
            <h3 className="bfc-card-title">Youth Academy</h3>
            <p className="bfc-card-text">Specialized training programs for ages 6-18, led by certified UEFA/CAF coaches.</p>
          </div>
          
          <div className="bfc-service-card">
            <div className="bfc-card-icon">🏆</div>
            <h3 className="bfc-card-title">Talent Scouting</h3>
            <p className="bfc-card-text">Connecting standout players with professional trials and international opportunities.</p>
          </div>
          
          <div className="bfc-service-card">
            <div className="bfc-card-icon">📈</div>
            <h3 className="bfc-card-title">Personal Mentorship</h3>
            <p className="bfc-card-text">Career guidance and nutrition planning to ensure holistic athlete development.</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bfc-footer">
        <div className="bfc-container">
          <h2 className="bfc-footer-title">Get In Touch</h2>
          <p className="bfc-footer-text">Ready to take the next step in your football career?</p>
          <a href="mailto:football@boyenge.com" className="bfc-contact-link">football@boyenge.com</a>
          <div className="bfc-copyright">
            &copy; {new Date().getFullYear()} Boyenge Football Club. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BoyengeFC;