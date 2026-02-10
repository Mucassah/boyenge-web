import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Security.css";

import privateBg from "./assets/private-army.jpg";
import otherBg from "./assets/other-security.jpg";
import secMain from "./assets/Secmain.JPEG";
import privateSecurityImg from "./assets/Privatesecurity.JPG";

const Security = () => {
  const navigate = useNavigate();
  const coreServicesRef = useRef(null);

  const scrollToCoreServices = () => {
    coreServicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sec-main-container">
      {/* ================= HERO ================= */}
      <div
        className="sec-hero"
        style={{ backgroundImage: `url(${secMain})` }}
      >
        <div className="sec-hero-overlay">
          <div className="sec-hero-content">
            <h2>WE SECURE.</h2>
            <p>Professional & Trusted Security Services</p>
          </div>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <div className="sec-about-container">
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
            strategic planning, risk assessment, and operational execution. We
            combine this expertise with modern technology and best practices to
            deliver security solutions tailored to your specific needs.
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
      </div>

      {/* ================= CORE SERVICES ================= */}
      <h2 className="sec-core-services-title" ref={coreServicesRef}>
        OUR CORE SERVICES
      </h2>

      <div className="sec-services-wrapper">
        {/* PRIVATE ARMY */}
        <div
          className="sec-service-item"
          onClick={() => navigate("/security1")}
        >
          <img src={privateBg} alt="Private Army" className="sec-service-image" />
          <div className="sec-service-overlay"></div>
          <div className="sec-service-label">
            <h3>PRIVATE ARMY</h3>
            <p className="sec-service-description">
              Our elite private army service provides highly trained personnel
              for strategic security operations, protecting assets, personnel,
              and critical infrastructure with precision and reliability.
            </p>
          </div>

          <div className="sec-service-action">
            <button
              className="sec-service-btn"
              onClick={() => navigate("/security1")}
            >
              Read More
            </button>
          </div>
        </div>

        {/* OTHER SECURITY SERVICES */}
        <div
          className="sec-service-item"
          onClick={() => navigate("/security2")}
        >
          <img
            src={otherBg}
            alt="Other Security Services"
            className="sec-service-image"
          />
          <div className="sec-service-overlay"></div>
          <div className="sec-service-label">
            <h3>PROFFESIONAL GUARDING SERVICES</h3>
            <p className="sec-service-description">
              Our advanced security solutions empower businesses to protect
              critical assets, cut risk management costs, increase revenue, and
              deliver a superior experience to their customers.
            </p>
          </div>

          <div className="sec-service-action">
            <button
              className="sec-service-btn"
              onClick={() => navigate("/security2")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="boyenge-contact-section">
        <p className="boyenge-contact-email">
          Email: <span>security@boyenge.com</span>
        </p>

        <div className="boyenge-contact-addresses">
          <div className="boyenge-address-card">
            <h4>Qatar</h4>
            <p>Unit 17, Floor 12, Burj Marina Tower, Lusail, Doha, Qatar</p>
          </div>

          <div className="boyenge-address-card">
            <h4>Hong Kong</h4>
            <p>
              Two International Finance Centre (Two IFC), Level 19, 8 Finance
              Street, Central, Hong Kong
            </p>
          </div>

          <div className="boyenge-address-card">
            <h4>Philippines</h4>
            <p>
              Level 24, One Bonifacio High Street, Philippine Stock Exchange
              Tower, BGC, Taguig, Metro Manila 1634
            </p>
          </div>

          <div className="boyenge-address-card">
            <h4>Dubai</h4>
            <p>Emirates Towers – Office, Levels 41 & 42, Sheikh Zayed Road</p>
          </div>

          <div className="boyenge-address-card">
            <h4>China</h4>
            <p>
              Room A-747, 3rd Floor, Section F, Building BDEF, Air Harbor
              International Business Center, Xixian New Area, Shaanxi Province
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
