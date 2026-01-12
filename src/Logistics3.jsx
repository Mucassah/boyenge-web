import React from 'react';
import './Logistics3.css';

const Logistics3 = () => {
  const services = [
    {
      title: "Full Container Load (FCL)",
      description: "Dedicated containers for large shipments, ensuring maximum security and efficiency for your bulk goods."
    },
    {
      title: "Less than Container Load (LCL)",
      description: "Cost-effective solutions for smaller shipments by sharing container space without compromising on speed."
    },
    {
      title: "Port-to-Port Delivery",
      description: "Global shipping network connecting major international hubs with precision scheduling."
    },
    {
      title: "Customs Clearance",
      description: "Expert handling of documentation and regulatory requirements to ensure smooth transit."
    }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:logistics@boyenge.com?subject=Sea Freight Quote Request&body=Hello Boyenge Logistics Team, I would like to request a quote for...";
  };

  return (
    <div className="log3-container">
      {/* Hero Section */}
      <section className="log3-hero">
        <div className="log3-hero-overlay">
          <h1>Sea Transport Solutions</h1>
          <p>Boyenge Logistics: Connecting Continents with Reliable Maritime Freight.</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="log3-content">
        <h2>Global Maritime Expertise</h2>
        <p className="log3-subtitle">
          From coastal shipping to international deep-sea routes, we provide 
          tailored logistics to keep your supply chain moving.
        </p>

        <div className="log3-service-grid">
          {services.map((service, index) => (
            <div key={index} className="log3-service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="log3-cta">
        <div className="log3-cta-box">
          <h3>Ready to ship with Boyenge?</h3>
          <button className="log3-quote-btn" onClick={handleEmailClick}>
            Request a Sea Freight Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Logistics3;
