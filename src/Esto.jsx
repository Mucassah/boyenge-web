import React from "react";
import { Link } from "react-router-dom";
import backVideo from "./assets/realesto.webm";
import "./Esto.css";

function Esto() {
  return (
    <div className="video-container">
      <video
        src={backVideo}
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      />

      <h3>REAL ESTATE SERVICES</h3>

      <div className="service">
        <Link to="/estateservice1" className="service-link">
          <div className="service-card">
            <h5>
              RESIDENTIAL<br />AND<br />COMMERCIAL SALE
            </h5>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </Link>

        <Link to="/estateservice2" className="service-link">
          <div className="service-card">
            <h5>
              PROPERTY DEVELOPMENT<br />AND<br />MANAGEMENT
            </h5>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </Link>

        <Link to="/estateservice3" className="service-link">
          <div className="service-card">
            <h5>
              LAND AQUISITION<br />AND<br />LEASING
            </h5>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </Link>

        <Link to="/estateservice4" className="service-link">
          <div className="service-card">
            <h5>
              REAL ESTATE INVESTMENT<br />CONSULTANCY
            </h5>
            <button className="read-more-btn">READ MORE</button>
          </div>
        </Link>
      </div>

      {/* CONTACT SECTION — UNCHANGED */}
      <div className="contact-wrapper">
        <div className="contact-left">
          <h4>Get In Touch</h4>
          <h2>
            Let’s Talk about your <br />
            <span>Next Project</span>
          </h2>
          <p>
            Transform your space with comprehensive & personalized services,
            tailored to capture your unique style and personality.
          </p>
          <ul>
            <li>20+ Years Of Experience</li>
            <li>Professionalism</li>
            <li>Custom & Personalized Design</li>
          </ul>
        </div>

        <div className="contact-right">
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Phone Number *</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
              <div className="input-group">
                <label>Subject *</label>
                <input type="text" placeholder="Enter subject" />
              </div>
            </div>

            <div className="input-group full-width">
              <label>Textarea *</label>
              <textarea placeholder="Write message" rows="5" />
            </div>

            <button type="submit" className="submit-btn">
              Send Us Message <span>➤</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Esto;
