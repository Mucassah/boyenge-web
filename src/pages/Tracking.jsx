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
    <div className="tracking-container">
      <h2>Track Your Cargo</h2>

      <div className="tracking-input">
        <input
          type="text"
          placeholder="Enter Tracking Number (e.g. BL10001)"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button onClick={handleTrack}>Track</button>
      </div>

      {error && <p className="tracking-error">{error}</p>}

      {shipment && (
        <div className="tracking-result">
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Origin:</strong> {shipment.origin}</p>
          <p><strong>Destination:</strong> {shipment.destination}</p>
          <p><strong>Last Update:</strong> {shipment.lastUpdate}</p>

          <h4>Shipment Progress</h4>
          <ul>
            {shipment.progress.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tracking;
