import React from 'react';
import './Insure3.css';

const Insure3 = () => {
  const businessPlans = [
    {
      id: 1,
      title: "General Liability",
      description: "Protect your enterprise against claims of bodily injury, property damage, and advertising mistakes.",
      icon: "🏢",
      features: ["Third-party Injuries", "Medical Expenses", "Legal Defense Costs"]
    },
    {
      id: 2,
      title: "Cyber Risk & Data",
      description: "Comprehensive recovery solutions for data breaches, ransomware attacks, and digital business interruption.",
      icon: "🛡️",
      features: ["Data Recovery", "Notification Costs", "System Restoration"]
    }
  ];

  return (
    <section className="business-risk-section">
      <div className="section-intro">
        <span className="badge">For Enterprises</span>
        <h2>Mitigate Business Vulnerabilities</h2>
        <p>Advanced risk management solutions designed to keep your operations running smoothly.</p>
      </div>

      <div className="risk-grid">
        {businessPlans.map((plan) => (
          <div key={plan.id} className="risk-card">
            <div className="risk-icon-wrapper">
              <span className="risk-icon">{plan.icon}</span>
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <ul className="benefit-list">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">L</span> {feature}
                </li>
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

export default Insure3;