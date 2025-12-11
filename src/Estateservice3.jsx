import React from "react";
import "./EstateService3.css";

export default function EstateService3() {
  return (
    <div className="estate-container">
      {/* Header */}
      <div className="estate-header">
        <h1>Land Acquisition & Leasing</h1>
        <p>
          We specialize on connecting our clients with the ideal land
          opportunities...
        </p>
      </div>

      {/* Service Cards */}
      <div className="estate-grid">
        <div className="estate-card">
          <img src="/icons/location-icon.svg" alt="Strategic Land Sourcing" />
          <h3>Strategic Land Sourcing</h3>
          <p>Identifying prime parcels...</p>
        </div>

        <div className="estate-card">
          <img src="/icons/handshake-icon.svg" alt="Negotiation & Acquisition" />
          <h3>Negotiation & Acquisition</h3>
          <p>Expert negotiation services...</p>
        </div>

        <div className="estate-card">
          <img src="/icons/gavel-icon.svg" alt="Lease Management & Renewal" />
          <h3>Lease Management & Renewal</h3>
          <p>Comprehensive management of land leases.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="estate-button">Consult Our Land Experts</button>
    </div>
  );
}
