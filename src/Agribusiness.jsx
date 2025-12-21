import React from "react";
import "./Agribusiness.css";
import agritech from "./assets/agritech.JPG";
import agroprocessing from "./assets/agroprocessing.JPG";
import farmleasing from "./assets/farmleasing.JPG";
import livestock from "./assets/livestock.JPG";
import cropproduction from "./assets/cropproduction.JPG";

function Agribusiness() {
  return (
    <div className="agri-container">
      <div className="agri-content">

        <header className="agri-header">
          <h1 className="agri-title">BOYENGE AGRI-SOLUTIONS</h1>
          <p className="agri-subtitle">
            A Subsidiary of Boyenge Holdings Group
          </p>
        </header>

        <section className="agri-intro">
          <h2 className="agri-section-title">Cultivating the Future</h2>
          <p>
            Innovative, sustainable, and scalable agribusiness services for global
            markets. Boyenge Agri-Solutions leads the way in modern farming
            practices, food security, and agricultural technology integration.
          </p>
        </section>

        <section className="agri-services">
          <h3 className="agri-section-title">Our Agribusiness Services</h3>

          <div className="agri-service-list">

            {[
              { title: "Crop Production", text: "Sustainable organic farming and high-yield commercial agriculture using precision irrigation and smart cultivation methods.", img: cropproduction },
              { title: "Livestock Management", text: "Comprehensive animal care including breeding, nutrition planning, and veterinary support for optimal productivity.", img: livestock },
              { title: "Agri-Tech Integration", text: "Precision farming, drone surveillance, and AI-powered analytics to maximize yield and reduce waste.", img: agritech },
              { title: "Farm Leasing & Management", text: "Full-service farm operations for landowners and investors, including planning, cultivation, and harvesting.", img: farmleasing },
              { title: "Agro-processing & Export", text: "Value addition through processing and packaging, with global distribution and export management.", img: agroprocessing },
            ].map((service, index) => (
              <div className="agri-service-item" key={index}>
                <div className="agri-service-text">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <div className="agri-service-image">
                  <img src={service.img} alt={service.title} />
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>

      <footer className="agri-footer">
        <p>© {new Date().getFullYear()} Boyenge Agri-Solutions. All Rights Reserved.</p>
        <p>Part of the Boyenge Holdings Group. Sustainability | Innovation | Growth</p>
      </footer>
    </div>
  );
}

export default Agribusiness;
