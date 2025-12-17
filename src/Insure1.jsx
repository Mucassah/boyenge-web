
import React from 'react';
import './Insure1.css';
import Health1 from "./assets/Health1.JPG";
import H2 from "./assets/H2.png";
import H3 from "./assets/H3.png";
import H4 from "./assets/H4.png";

const Insure1 = () => {
  return (
    <section className="insure-container">
      <div className="max-width-wrapper">
        
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">
            Health & Life Insurance Solutions
          </h1>
          <p className="description">
            Securing your future and protecting your loved ones with comprehensive coverage 
            tailored to your unique lifestyle.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          
          {/* Image Side */}
          <div className="image-container">
            <img 
              src={Health1}
              alt="Boyenge Health and Life Insurance" 
              className="service-img"
            />
            <div className="badge-247">
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>24/7</p>
              <p style={{ fontSize: '0.8rem', margin: 0 }}>Claims Support</p>
            </div>
          </div>

          {/* Features Side */}
          <div className="features-list">
            
            {/* Feature 1 */}
            <div className="feature-item">
              <div className="icon-box blue-bg">
                <img src={H4} alt="Health" width="24" height="24" />
              </div>
              <div className="feature-text">
                <h3>Comprehensive Health Coverage</h3>
                <p>
                  Access to top-tier medical networks, covering everything from routine 
                  check-ups to specialized surgical procedures.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <div className="icon-box green-bg">
                <img src={H2} alt="Life" width="24" height="24" />
              </div>
              <div className="feature-text">
                <h3>Flexible Life Plans</h3>
                <p>
                  Term and whole-life options designed to provide financial stability 
                  for your family when they need it most.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-item">
              <div className="icon-box purple-bg">
                <img src={H3} alt="Security" width="24" height="24" />
              </div>
              <div className="feature-text">
                <h3>Guaranteed Security</h3>
                <p>
                  Backed by the stability of Boyenge Holding Group, ensuring 
                  your claims are handled with speed and integrity.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button
              className="quote-btn"
              onClick={() => window.location.href = "mailto:insurance@boyenge.com"}>
              Get a Free Quote <span>&rarr;</span>
            </button>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insure1;