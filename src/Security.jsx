import React from "react";
import "./Security.css";
import privatesec from "./assets/Privatesecurity.JPG";
import audit from "./assets/Audit.JPG";
import cctv from "./assets/CCTV.JPG";
import Eventsecurity from "./assets/Eventsecurity.JPG";
import Surveillance from "./assets/Surveillance.JPG";


function Security() {
  return (
    <div className="security-container">
      <div className="security-content">
        <header>
          <h1>Boyenge Security Solutions</h1>
          <p>A Subsidiary of Boyenge Holdings Group</p>
        </header>

        <section className="intro">
          <h2>Your Trust, Our Shield.</h2>
          <p>
            We deliver uncompromising security solutions built on trust,
            technology, and rapid response. Our commitment is to protect your
            assets and ensure absolute peace of mind, 24 hours a day.
          </p>
        </section>

        <section className="services">
          <h3>Our Core Security Offerings</h3>
          <div className="service-list">

            <div className="service-item">
              <div className="service-text">
                <h4>Private & Corporate Security Solutions</h4>
                <p>
                  Tailored physical security, access control, and executive protection
                  services for businesses and individuals.
                </p>
              </div>
              <div className="service-image">
                <img src={privatesec} alt="Private and  corporate security" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>CCTV Installation & Monitoring</h4>
                <p>
                  State-of-the-art closed-circuit television systems with remote and on-site
                  monitoring capabilities.
                </p>
              </div>
              <div className="service-image">
                <img src={cctv} alt="CCTV Installation" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Event Security & VIP Protection</h4>
                <p>
                  Comprehensive security planning, crowd control, and discreet protection
                  for high-profile events and VIPs.
                </p>
              </div>
              <div className="service-image">
                <img src={Eventsecurity} alt="CCTV Installation" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Risk Assessment & Security Audits</h4>
                <p>
                  In-depth analysis of vulnerabilities, threat identification, and strategic
                  recommendations for mitigation.
                </p>
              </div>
              <div className="service-image">
                <img src={audit} alt="CCTV Installation" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>24/7 Surveillance & Rapid Response Units</h4>
                <p>
                  Constant monitoring by highly trained personnel and fast deployment of
                  response teams to emergencies.
                </p>
              </div>
              <div className="service-image">
                <img src={Surveillance} alt="CCTV Installation" />
              </div>
            </div>

          </div>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Boyenge Security Solutions. All Rights Reserved.</p>
        <p>Part of the Boyenge Holdings Group. Confidentiality | Vigilance | Integrity</p>
      </footer>
    </div>
  );
}

export default Security;
