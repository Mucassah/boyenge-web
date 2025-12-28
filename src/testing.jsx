import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mainsecurity.css";

import privateBg from "./assets/private-army.jpg";
import otherBg from "./assets/other-security.jpg";

const Mainsecurity = () => {
  const navigate = useNavigate();

  return (
    <div className="mainsecurity-container">
      <div className="mainsecurity-header">
        <h1>Boyenge Security</h1>
        <p>Elite Protection & Professional Security Solutions</p>
      </div>

      <h2 className="core-services-title">Our Core Services</h2>

      <div className="services-wrapper">
        {/* Private Security */}
        <div
          className="service-card private-security"
          style={{ backgroundImage: `url(${privateBg})` }}
          onClick={() => navigate("/privatearmy")}
        >
          <div className="service-content">
            <h3>Private Security</h3>
          </div>
        </div>

        {/* Other Security Services */}
        <div
          className="service-card other-security"
          style={{ backgroundImage: `url(${otherBg})` }}
          onClick={() => navigate("/security")}
        >
          <div className="service-content">
            <h3>Other Security Services</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainsecurity;
