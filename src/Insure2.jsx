import React from 'react';
import './Insure2.css';

const Insure2 = () => {
  const plans = [
    {
      id: 1,
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicles, including collision, liability, and 24/7 roadside assistance.",
      icon: "🚗",
      features: ["Accident Forgiveness", "New Car Replacement", "Rental Reimbursement"]
    },
    {
      id: 2,
      title: "Property Insurance",
      description: "Protect your home, condo, or rental property against fire, theft, and natural disasters.",
      icon: "🏠",
      features: ["Personal Liability", "Flood & Fire Protection", "Identity Theft Cover"]
    }
  ];

  return (
    <section className="insurance-container">
      <div className="insurance-header">
        <h2>Protect What Matters Most</h2>
        <p>Choose from our specialized coverage plans tailored to your lifestyle.</p>
      </div>

      <div className="insurance-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="insurance-card">
            <div className="card-icon">{plan.icon}</div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <ul className="feature-list">
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button
              className="quote-btn"
              onClick={() => window.location.href = "mailto:insurance@boyenge.com"}>
              Get a Free Quote <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insure2;