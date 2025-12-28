import React from 'react';
import './Security1.css';

const Security1 = () => {
  const services = [
    {
      id: 1,
      title: "Executive Protection",
      description: "Close protection details for high-net-worth individuals and diplomats in high-threat environments.",
      icon: "🛡️"
    },
    {
      id: 2,
      title: "Asset Recovery",
      description: "Specialized tactical units for the secure retrieval of high-value physical and digital assets.",
      icon: "💼"
    },
    {
      id: 3,
      title: "Critical Infrastructure",
      description: "Paramilitary-grade security for power plants, mines, and sensitive industrial sites.",
      icon: "🏭"
    },
    {
      id: 4,
      title: "Rapid Response",
      description: "24/7 air and ground deployment teams capable of reaching any location within the region in under 60 minutes.",
      icon: "🚁"
    }
  ];

  return (
    <div className="security1-container">
      <header className="security1-header">
        <h2 className="security1-subtitle">BOYENGE SECURITY</h2>
        <h1 className="security1-title">Private Military & Tactical Services</h1>
        <div className="security1-header-line"></div>
      </header>

      <div className="security1-services-grid">
        {services.map(service => (
          <div key={service.id} className="security1-service-card">
            <div className="security1-icon">{service.icon}</div>
            <h3 className="security1-service-title">{service.title}</h3>
            <p className="security1-service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <footer className="security1-cta">
        <p>Operational Excellence. Absolute Discretion.</p>
        <a href="mailto:security@boyenge.com">
          <button className="security1-contact-btn">Deploy Unit</button>
        </a>
      </footer>
    </div>
  );
};

export default Security1;
