import React from "react";
import "./Estateservice2.css";

const Estateservice2 = () => {
  return (
    <div className="estate-wrapper">
      {/* Header */}
      <div className="estate-header">
        <h1>Property Development & Management</h1>
        <p>
          From concept to completion and beyond, we handle every aspect of your real estate
          investment. Our integrated approach ensures maximized value and stress-free ownership.
        </p>
      </div>

      {/* Cards Section */}
      <div className="estate-cards">
        {/* Card 1 */}
        <div className="estate-card">
          <h2>Full-Cycle Property Development</h2>
          <ul>
            <li><strong>Feasibility Studies:</strong> Detailed market analysis...</li>
            <li><span className="check">✔</span> <strong>Design & Planning:</strong> Strict quality control</li>
            <li><span className="check">✔</span> <strong>Construction Oversight:</strong> Strict quality control</li>
            <li><span className="check">✔</span> <strong>Sales & Marketing:</strong> Strategic positioning...</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="estate-card">
          <h2>Comprehensive Property Management</h2>
          <ul>
            <li><span className="check">✔</span> <strong>Tenant Acquisition:</strong> Vetting</li>
            <li><span className="check">✔</span> <strong>Financial Reporting:</strong> Transparent accounting</li>
            <li><span className="check">✔</span> Transparent accounting</li>
            <li><span className="check">✔</span> <strong>Maintenance Repairs:</strong> 24/7 emergency support...</li>
            <li><span className="check">✔</span> <strong>Legal & Compliance:</strong> Handling...</li>
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="estate-button-wrapper">
        <a href="mailto:realestate@boyenge.com">
          <button className="estate-button">
            Start Your Project with Us Today
          </button>
        </a>
      </div>
    </div>
  );
};

export default Estateservice2;
