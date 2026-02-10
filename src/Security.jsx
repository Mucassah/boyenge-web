import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Security.css';

// Import newly required assets for the About Section
import privateSecurityImg from "./assets/Privatesecurity.JPG";

const Security = () => {
  const navigate = useNavigate();
  const overviewRef = useRef(null);

  // Function to scroll down to services from the About section
  const scrollToCoreServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation Trigger on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bs-animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (overviewRef.current) {
      observer.observe(overviewRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bs-main-wrapper">
      {/* NAVIGATION */}
      <nav className="bs-navbar">
        <div className="bs-nav-container">
          <div className="bs-brand-logo">
            <span className="bs-gold-text">BOYENGE</span> SECURITY
          </div>
          <div className="bs-nav-links">
            <button onClick={() => window.scrollTo(0,0)} className="bs-nav-item">Home</button>
            <a href="#overview" className="bs-nav-item">Overview</a>
            <a href="#services" className="bs-nav-item">Services</a>
            <button 
              onClick={() => navigate('/Security1')} 
              className="bs-nav-btn-link"
            >
              Private Army
            </button>
          </div>
          <a href="mailto:security@boyenge.com" className="bs-nav-cta-wrapper">
            <button className="bs-nav-cta-btn">Engage Our Team</button>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bs-hero-section">
        <div className="bs-hero-overlay">
          <div className="bs-hero-content">
            <h1 className="bs-hero-title">
              SECURITY ENGINEERED <br />
              <span className="bs-highlight-text">NOT IMPROVISED.</span>
            </h1>
            <p className="bs-hero-subtitle">
              Professional, licensed, and intelligence-led protection services across 
              corporate, institutional, and high-risk contexts.
            </p>
            <div className="bs-hero-actions">
              <button 
                onClick={() => navigate('/Security2')} 
                className="bs-btn-solid-gold"
              >
                Protective Services
              </button>
              <button 
                onClick={() => navigate('/Security1')} 
                className="bs-btn-outline-white"
              >
                Private Army
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDED ABOUT SECTION ================= */}
      <section className="sec-about-container">
        <div className="sec-about-content">
          <span className="sec-about-subtitle">WHO WE ARE</span>
          <h2 className="sec-about-title">BOYENGE SECURITY</h2>

          <p className="sec-about-text">
            At Boyenge Security, we are dedicated to providing unparalleled
            protection and security solutions for a diverse range of clients.
            With years of expertise in military, private security, and
            specialized protection services, we ensure safety, reliability, and
            peace of mind.
            <br /><br />
            Our team is composed of highly trained professionals with experience
            in military and army operations, giving us a unique edge in
            strategic planning, risk assessment, and operational execution.
          </p>

          <button className="sec-about-btn" onClick={scrollToCoreServices}>
            READ MORE
          </button>
        </div>

        <div className="sec-about-image-wrapper">
          <img
            src={privateSecurityImg}
            alt="Private Security"
            className="sec-about-image"
          />
        </div>
      </section>
      {/* ======================================================= */}

      {/* DIVISION OVERVIEW - ANIMATED */}
      <section id="overview" className="bs-division-container" ref={overviewRef}>
        <div className="bs-content-limit">
          <div className="bs-section-heading">
            <h2 className="bs-section-title">Division Overview</h2>
            <div className="bs-title-underline"></div>
          </div>
          
          <div className="bs-dual-layout">
            <div className="bs-division-module bs-bg-other-security bs-slide-left">
              <div className="bs-module-content">
                <h3 className="bs-module-header">Boyenge Security</h3>
                <p className="bs-module-desc">Specialized risk control for commercial and high-value environments.</p>
                <ul className="bs-feature-list">
                  <li>Executive Protection</li>
                  <li>Professional Guarding</li>
                  <li>Security Technology</li>
                </ul>
                <button 
                  onClick={() => navigate('/Security2')} 
                  className="bs-read-more-btn"
                >
                  READ MORE
                </button>
              </div>
            </div>

            <div className="bs-division-module bs-tactical-variant bs-bg-private-army bs-slide-right">
              <div className="bs-module-content">
                <h3 className="bs-module-header">Boyenge Private Army</h3>
                <p className="bs-module-desc">Defensive stabilization for high-risk and mission-critical zones.</p>
                <ul className="bs-feature-list">
                  <li>Crisis Stabilization</li>
                  <li>Secure Mobility</li>
                  <li>Asset Shielding</li>
                </ul>
                <button 
                  className="bs-read-more-btn bs-tactical-btn"
                  onClick={() => navigate('/Security1')}
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bs-services-section">
        <div className="bs-content-limit">
          <h2 className="bs-text-center">Core Service Lines</h2>
          <div className="bs-services-matrix">
            <div className="bs-service-block">
              <div className="bs-service-icon">🛡️</div>
              <h4 className="bs-service-name">Executive Protection</h4>
              <p className="bs-service-detail">VIP close protection and travel risk planning delivered with discretion.</p>
            </div>
            <div className="bs-service-block">
              <div className="bs-service-icon">🏗️</div>
              <h4 className="bs-service-name">Infrastructure Security</h4>
              <p className="bs-service-detail">Layered perimeter design for energy, utility, and logistics hubs.</p>
            </div>
            <div className="bs-service-block">
              <div className="bs-service-icon">📡</div>
              <h4 className="bs-service-name">Protective Intelligence</h4>
              <p className="bs-service-detail">Threat landscape monitoring and pre-incident risk detection reports.</p>
            </div>
            <div className="bs-service-block">
              <div className="bs-service-icon">🚨</div>
              <h4 className="bs-service-name">Rapid Response</h4>
              <p className="bs-service-detail">Mobile patrol units and emergency site stabilization protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bs-main-footer">
        <div className="bs-footer-grid">
          <div className="bs-footer-brand">
            <h4 className="bs-footer-logo">BOYENGE SECURITY</h4>
            <p className="bs-footer-slogan">Secure what matters with structured, professional protection solutions.</p>
          </div>
          <div className="bs-footer-nav">
            <h5 className="bs-footer-heading">Framework</h5>
            <a href="#" className="bs-footer-link">Legal Force Limitations</a>
            <a href="#" className="bs-footer-link">Human Rights Standards</a>
            <a href="#" className="bs-footer-link">Rules of Engagement</a>
          </div>
          <div className="bs-footer-contact">
            <h5 className="bs-footer-heading">Contact</h5>
            <p className="bs-contact-email">
              Inquiry: <a href="mailto:security@boyenge.com">security@boyenge.com</a>
            </p>
          </div>
        </div>
        <div className="bs-footer-legal">
          <p className="bs-copyright-text">&copy; 2026 Boyenge Security. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Security;