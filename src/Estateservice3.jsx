import React from "react";
import "./Estateservice3.css";

export default function EstateService3() {
  return (
    <div className="es3 estate-container">
      {/* Header */}
      <div className="es3-header">
        <h1 className="es3-title">Land Acquisition & Leasing</h1>
        <p className="es3-subtitle">
          We specialize on connecting our clients with the ideal land
          opportunities...
        </p>
      </div>

      {/* Service Cards */}
      <div className="es3-grid">
        <div className="es3-card">
          <h3 className="es3-card-title">Strategic Land Sourcing</h3>
          <p className="es3-card-text">Identifying prime parcels...</p>
        </div>

        <div className="es3-card">
          <h3 className="es3-card-title">Negotiation & Acquisition</h3>
          <p className="es3-card-text">Expert negotiation services...</p>
        </div>

        <div className="es3-card">
          <h3 className="es3-card-title">Lease Management & Renewal</h3>
          <p className="es3-card-text">
            Comprehensive management of land leases.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <a href="mailto:realestate@boyenge.com">
        <button className="es3-button">Consult Our Land Experts</button>
      </a>
    </div>
  );
}
