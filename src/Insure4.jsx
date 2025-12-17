import React from 'react';
import './Insure4.css';

const Insure4 = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Report Incident",
      description: "Notify us immediately through our 24/7 hotline or mobile app to start your claim file."
    },
    {
      id: 2,
      number: "02",
      title: "Documentation",
      description: "Upload photos, police reports, or damage estimates directly to our secure portal."
    },
    {
      id: 3,
      number: "03",
      title: "Review & Pay",
      description: "Our adjusters review the details and, once approved, funds are sent via instant transfer."
    }
  ];

  return (
    <section className="claims-section">
      <div className="claims-header">
        <h2>Hassle-Free Claims Process</h2>
        <p>We're here when you need us most. Follow our simple three-step process to get back on your feet.</p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="claims-support-box">
        <div className="support-info">
          <h4>Need immediate help?</h4>
          <p>Our dedicated claims specialists are available 24/7.</p>
        </div>
        <div className="support-actions">
            <a href="mailto:insurance@boyenge.com?subject=Check%20Claim%20Status">
                <button className="btn-secondary">Check Claim Status</button>
            </a>

            <a href="mailto:insurance@boyenge.com?subject=File%20a%20New%20Claim">
                <button className="btn-primary">File a New Claim</button>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Insure4;