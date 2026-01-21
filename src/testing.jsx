import React from "react";
import "./Estateservice1.css";

const Estateservice1 = () => {
  return (
    <div className="estate-container">
      <h1 className="estate-title">YOUR PARTNER IN PROPERTY SALES</h1>

      <p className="estate-description">
        Whether you’re looking to buy your first home or invest in multi-unit
        commercial property, our expert team provides unparalleled market
        knowledge and dedicated service to help you achieve your goals.
      </p>

      <div className="estate-cards">
        <div className="estate-card">
          <h2 className="estate-card-title">
            RESIDENTIAL SALES <span className="icon">🏠</span>
          </h2>
          <p className="estate-card-text">
            From cozy family homes to luxury urban apartments, we guide buyers
            and sellers through every step of the residential sales process.
          </p>
        </div>

        <div className="estate-card">
          <h2 className="estate-card-title">
            COMMERCIAL SALES <span className="icon">🏢</span>
          </h2>
          <p className="estate-card-text">
            Specializing in retail, office, and industrial properties, we
            connect clients with high-yield commercial real-estate opportunities.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Estateservice1;
