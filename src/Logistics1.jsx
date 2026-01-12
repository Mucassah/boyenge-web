import React from 'react';
import './Logistics1.css';

const Logistics1 = () => {
  const services = [
    {
      title: "Express Air Freight",
      description: "Time-critical shipments delivered via the fastest available routes globally."
    },
    {
      title: "Charter Services",
      description: "Dedicated aircraft for oversized cargo or high-priority logistics needs."
    },
    {
      title: "Door-to-Door Delivery",
      description: "Full-chain management from pickup at origin to final delivery at destination."
    },
    {
      title: "Customs Clearance",
      description: "Expert handling of documentation and regulatory compliance for smooth transit."
    }
  ];

  return (
    <div className="logistics1-root">
      {/* Hero Section */}
      <section className="logistics1-hero">
        <div className="logistics1-hero-content">
          <h1>Boyenge Logistics</h1>
          <h2>Global Air Transport Solutions</h2>
          <p>Connecting your business to the world with speed, safety, and precision.</p>

          <a
            href="mailto:logistics@boyenge.com?subject=Air%20Freight%20Quote%20Request"
            className="logistics1-cta"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="logistics1-services">
        <h3>Our Air Freight Capabilities</h3>
        <div className="logistics1-grid">
          {services.map((service, index) => (
            <div key={index} className="logistics1-card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="logistics1-features">
        <div className="logistics1-feature">
          <strong>24/7</strong>
          <span>Real-time Tracking</span>
        </div>
        <div className="logistics1-feature">
          <strong>150+</strong>
          <span>Countries Served</span>
        </div>
        <div className="logistics1-feature">
          <strong>100%</strong>
          <span>Secure Handling</span>
        </div>
      </section>
    </div>
  );
};

export default Logistics1;
