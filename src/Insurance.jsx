import React from "react";
import { Link } from "react-router-dom"; 
import "./Insurance.css";
import Insurancepic from "./assets/Insurancepic.JPG";
import Health from "./assets/Health.JPG";
import Property from "./assets/Property.JPG";
import Bizrisk from "./assets/Bizrisk.JPG";
import Claim from "./assets/Claim.JPG";
import Logo from "./assets/Logo.png";

const Insurance = () => {
  return (
    <section className="hero-container">

      {/* ---- HERO CONTENT ---- */}
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <img
            src={Insurancepic}
            alt="Two professionals walking and talking"
            className="hero-image"
          />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">De-Risking</h1>
          <h1 className="hero-title emphasis">Human Progress</h1>

          <p className="hero-description">
            With elite insurance expertise empowered by breakthrough
            technology, Boyenge is the modern insurance brokerage for the
            21st century.
          </p>

          {/* --- EMAIL BUTTON --- */}
          <a
            href="mailto:insurance@boyenge.com?subject=Inquiry"
            className="hero-button"
          >
            Talk to an Expert →
          </a>
        </div>
      </div>

      {/* ---- BY THE NUMBERS SECTION ---- */}
      <div className="numbers-section">

        <div className="numbers-header">
          <h2>By the Numbers</h2>
          <p>
            The data speaks for itself. From our large roster of established and
            growing clients to our stellar client retention rate—we build
            relationships that last.
          </p>
        </div>

        <div className="numbers-grid">

          <div className="numbers-card">
            <img src={Logo} alt="Logo" className="numbers-icon" />
            <h3>$3.1B</h3>
            <p>in annual premiums placed</p>
          </div>

          <div className="numbers-card">
            <img src={Logo} alt="Logo" className="numbers-icon" />
            <h3>~20%</h3>
            <p>Global unicorns represented</p>
          </div>

          <div className="numbers-card">
            <img src={Logo} alt="Logo" className="numbers-icon" />
            <h3>500+</h3>
            <p>public company experience</p>
          </div>

        </div>

      </div>

      {/* ---- INDUSTRIES & SERVICES SECTION ---- */}
      <div className="industries-section">
        <div className="industries-header">
          <h2>
            Explore Our Industries<br />and Insurance Services
          </h2>

          <div className="industries-arrows">
            <button className="arrow-btn">‹</button>
            <button className="arrow-btn">›</button>
          </div>
        </div>

        <div className="industries-scroll">
          <div className="industry-card">
            <Link to="/insure1">
              <img src={Health} alt="Health insurance" />
              <span className="industry-label">LIFE & HEALTH INSURANCE</span>
            </Link>
          </div>

          <div className="industry-card">
            <Link to="/insure2">
              <img src={Property} alt="Property insurance" />
              <span className="industry-label">PROPERTY & AUTO INSURANCE</span>
            </Link>
          </div>

          <div className="industry-card">
          <Link to="/insure3">
            <img src={Bizrisk} alt="Business risk coverage" />
            <span className="industry-label">BUSINESS RISK COVERAGE</span>
          </Link>
          </div>

          <div className="industry-card">
          <Link to="/insure4">
            <img src={Claim} alt="Insurance claim" />
            <span className="industry-label">INSURANCE CLAIM ASSISTANCE</span>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
