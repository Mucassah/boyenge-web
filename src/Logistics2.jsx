import React from 'react';
import './Logistics2.css';

const Logistics2 = () => {
  const services = [
    { 
      title: 'Full Truckload (FTL)', 
      desc: 'Dedicated transport for high-volume shipments with priority routing.' 
    },
    { 
      title: 'Less than Truckload (LTL)', 
      desc: 'Optimized cargo sharing to reduce costs for smaller freight loads.' 
    },
    { 
      title: 'Temperature Controlled', 
      desc: 'Advanced reefer technology for pharmaceuticals and perishables.' 
    },
    { 
      title: 'Last-Mile Delivery', 
      desc: 'Precision distribution ensuring your goods reach the final doorstep.' 
    }
  ];

  return (
    <div className="l2-road-transport-page">
      {/* Hero Section */}
      <section className="l2-hero-section">
        <div className="l2-hero-overlay">
          <div className="l2-hero-inner">
            <span className="l2-subtitle">Boyenge Logistics</span>
            <h1 className="l2-hero-title">Road Transport Solutions</h1>
            <p className="l2-hero-text">Reliable, secure, and tech-driven haulage across the region.</p>
            {/* Email Link Button */}
            <a
              href="mailto:logistics@boyenge.com?subject=Shipping%20Rates%20Inquiry"
              className="l2-cta-button"
            >
              Get Shipping Rates
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="l2-content-block">
        <h2 className="l2-section-title">Our Haulage Expertise</h2>
        <div className="l2-services-container">
          {services.map((service, index) => (
            <div key={index} className="l2-service-item">
              <div className="l2-icon-placeholder"></div>
              <h3 className="l2-service-title">{service.title}</h3>
              <p className="l2-service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="l2-benefits-section">
        <div className="l2-benefits-card">
          <h2 className="l2-benefits-title">Why Boyenge Logistics?</h2>
          <div className="l2-benefits-list">
            <div className="l2-benefit">
              <strong>Real-Time Tracking</strong>
              <p>Full visibility of your cargo journey via GPS integration.</p>
            </div>
            <div className="l2-benefit">
              <strong>Modern Fleet</strong>
              <p>Euro 6 compliant vehicles maintained to the highest standards.</p>
            </div>
            <div className="l2-benefit">
              <strong>Safety Certified</strong>
              <p>Rigorous driver training and cargo insurance coverage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics2;
