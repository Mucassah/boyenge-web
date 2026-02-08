import React, { useState } from "react";
import { trackingData } from "../data/trackingData";
import "./Tracking.css";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = () => {
    const result = trackingData[trackingNumber.trim()];

    if (result) {
      setShipment(result);
      setError("");
    } else {
      setShipment(null);
      setError("Tracking number not found");
    }
  };

  return (
    <div className="tracking-page">
      <div className="tracking-card">
        <h2>GLOBAL CARGO TRACKING</h2>

        <div className="tracking-input">
          <input
            type="text"
            placeholder="Enter your tracking number..."
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <button onClick={handleTrack}>TRACK NOW</button>
        </div>

        {error && <p className="tracking-error">{error}</p>}

        {shipment && (
          <>
            {/* Visual progress */}
            <div className="progress-bar">
              <div className="step active">Picked Up</div>
              <div className={`step ${shipment.status !== "Picked Up" ? "active" : ""}`}>
                In Transit
              </div>
              <div className={`step ${shipment.status === "Delivered" ? "active" : ""}`}>
                Delivered
              </div>
            </div>

            {/* Shipment details */}
            <div className="tracking-details">
              <p><strong>Status:</strong> {shipment.status}</p>
              <p><strong>Origin:</strong> {shipment.origin}</p>
              <p><strong>Destination:</strong> {shipment.destination}</p>
              <p><strong>Last Update:</strong> {shipment.lastUpdate}</p>
            </div>

            {/* Full progress list */}
            <div className="tracking-progress">
              <h4>Shipment Progress</h4>
              <ul>
                {shipment.progress.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tracking;
