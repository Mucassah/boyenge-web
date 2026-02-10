import React from "react";
import "./Security2.css";
import privatesec from "./assets/Privatesecurity.JPG";
import audit from "./assets/Audit.JPG";
import cctv from "./assets/CCTV.JPG";
import Eventsecurity from "./assets/Eventsecurity.JPG";
import Surveillance from "./assets/Surveillance.JPG";

function Security() {
  return (
    <div className="sec-security">
      <div className="sec-security__content">

        <header className="sec-security__header">
          <h1 className="sec-security__title">Boyenge Security Solutions</h1>
          <p className="sec-security__subtitle">
            A Subsidiary of Boyenge Holdings Group
          </p>
        </header>

        <section className="sec-security__intro">
          <h2>Your Trust, Our Shield.</h2>
          <p>
            We deliver uncompromising security solutions built on trust,
            technology, and rapid response. Our commitment is to protect your
            assets and ensure absolute peace of mind, 24 hours a day.
          </p>
        </section>

        <section className="sec-security__services">
          <h3 className="sec-security__services-title">
            Our Core Security Offerings
          </h3>

          <div className="sec-security__service-list">

            {/* UPDATED SERVICE */}
            <div className="sec-security__service-item">
              <div className="sec-security__service-text">
                <h4>Professional Guarding Services</h4>
                <p>
                  Structured guarding programs for facilities and assets.
                  <br /><br />
                  Includes:
                  <br />• Static guarding
                  <br />• Commercial site security
                  <br />• Residential estate security
                  <br />• Industrial facility guarding
                  <br />• Access control operations
                  <br />• Gate & perimeter security
                </p>
              </div>
              <div className="sec-security__service-image">
                <img src={privatesec} alt="Professional Guarding Services" />
              </div>
            </div>

            <div className="sec-security__service-item sec-security__service-item--reverse">
              <div className="sec-security__service-text">
                <h4>CCTV Installation & Monitoring</h4>
                <p>
                  State-of-the-art closed-circuit television systems with remote and
                  on-site monitoring capabilities.
                </p>
              </div>
              <div className="sec-security__service-image">
                <img src={cctv} alt="CCTV Installation" />
              </div>
            </div>

            <div className="sec-security__service-item">
              <div className="sec-security__service-text">
                <h4>Event Security & VIP Protection</h4>
                <p>
                  Comprehensive security planning, crowd control, and discreet
                  protection for high-profile events and VIPs.
                </p>
              </div>
              <div className="sec-security__service-image">
                <img src={Eventsecurity} alt="Event Security" />
              </div>
            </div>

            <div className="sec-security__service-item sec-security__service-item--reverse">
              <div className="sec-security__service-text">
                <h4>Risk Assessment & Security Audits</h4>
                <p>
                  In-depth analysis of vulnerabilities, threat identification, and
                  strategic recommendations for mitigation.
                </p>
              </div>
              <div className="sec-security__service-image">
                <img src={audit} alt="Security Audit" />
              </div>
            </div>

            <div className="sec-security__service-item">
              <div className="sec-security__service-text">
                <h4>24/7 Surveillance & Rapid Response Units</h4>
                <p>
                  Constant monitoring by highly trained personnel and fast
                  deployment of response teams to emergencies.
                </p>
              </div>
              <div className="sec-security__service-image">
                <img src={Surveillance} alt="Surveillance" />
              </div>
            </div>

          </div>
        </section>
      </div>

      <footer className="sec-security__footer">
        <p>© {new Date().getFullYear()} Boyenge Security Solutions.</p>
        <p>Confidentiality | Vigilance | Integrity</p>
      </footer>
    </div>
  );
}

export default Security;
