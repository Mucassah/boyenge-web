import React from "react";
import "./Estateservice4.css";

function Estateservice4() {
  return (
    <div className="estate-wrapper">
      <div className="estate-container">
        <h1 className="estate-title">
          <span className="icon">🎯</span> Real Estate Investment Consultancy
        </h1>

        <p className="subtitle">
          Maximize your returns and secure financial future with our expert investment guidance.
        </p>

       

        <div className="quote-box">
          <p className="quote">
            “Your journey to smart, profitable restate begins with a consultation.”
          </p>
        </div>

        <div className="services-section">
          <div className="service-card">
            <div className="service-icon squares"></div>
            <h3>Market Analysis</h3>
            
          </div>

          <div className="service-card">
            <div className="service-icon arrow"></div>
            <h3>Portfolio Strategy</h3>
            
          </div>

          <div className="service-card">
            <div className="service-icon shield"></div>
            <h3>Risk Assessment</h3>
            
          </div>
        </div>

        <div className="cta-box">
          <p>
            Ready you unlock your investment potential? Schedule a Free Initial Consultation 
            with one of is our Senior Analysts today.
          </p>
          <a href="mailto:realestate@boyenge.com">
          <button className="cta-btn">Book Your Consultation</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Estateservice4;
