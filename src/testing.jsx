import React from "react";
import { useNavigate } from "react-router-dom";
import "./Security.css";

import privateBg from "./assets/private-army.jpg";
import otherBg from "./assets/other-security.jpg";

const Security = () => {
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
          className="service-cardmain private-security"
          style={{ backgroundImage: `url(${privateBg})` }}
          onClick={() => navigate("/security1")}
        >
          <div className="service-content">
            <h3>PRIVATE ARMY</h3>
          </div>
        </div>

        {/* Other Security Services */}
        <div
          className="service-cardmain other-security"
          style={{ backgroundImage: `url(${otherBg})` }}
          onClick={() => navigate("/security2")}
        >
          <div className="service-content">
            <h3>OTHER SECURITY SERVICES</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;