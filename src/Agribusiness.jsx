import React from "react";
import "./Agribusiness.css"; 
import agritech from "./assets/agritech.jpg";
import agroprocessing from "./assets/agroprocessing.jpg";
import farmleasing from "./assets/farmleasing.jpg";
import livestock from "./assets/livestock.jpg";
import cropproduction from "./assets/cropproduction.jpg";

function Agribusiness() {
  return (
    <div className="agri-container">
      <div className="agri-content">
        <header>
          <h1>BOYENGE AGRI-SOLUTIONS</h1>
          <p>A Subsidiary of Boyenge Holdings Group</p>
        </header>

        <section className="intro">
          <h2>Cultivating the Future</h2>
          <p>
            Innovative, sustainable, and scalable agribusiness services for global
            markets. Boyenge Agri-Solutions leads the way in modern farming
            practices, food security, and agricultural technology integration.
          </p>
        </section>

        <section className="services">
          <h3>Our Agribusiness Services</h3>
          <div className="service-list">

            <div className="service-item">
              <div className="service-text">
                <h4>Crop Production</h4>
                <p>
                  Sustainable organic farming and high-yield commercial agriculture using
                  precision irrigation and smart cultivation methods.
                </p>
              </div>
              <div className="service-image">
              <img src={cropproduction} alt="Crop production" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Livestock Management</h4>
                <p>
                  Comprehensive animal care including breeding, nutrition planning,
                  and veterinary support for optimal productivity.
                </p>
              </div>
              <div className="service-image">
              <img src={livestock} alt="Livestock management" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Agri-Tech Integration</h4>
                <p>
                  Precision farming, drone surveillance, and AI-powered analytics to
                  maximize yield and reduce waste.
                </p>
              </div>
              <div className="service-image">
              <img src={agritech} alt="Agri tech" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Farm Leasing & Management</h4>
                <p>
                  Full-service farm operations for landowners and investors, including
                  planning, cultivation, and harvesting.
                </p>
              </div>
              <div className="service-image">
                <img src={farmleasing} alt="Farm leasing" />
              </div>
            </div>

            <div className="service-item">
              <div className="service-text">
                <h4>Agro-processing & Export</h4>
                <p>
                  Value addition through processing and packaging, with global
                  distribution and export management.
                </p>
              </div>
              <div className="service-image">
                <img src={agroprocessing} alt="Agro processing" />
              </div>
            </div>

          </div>
        </section>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Boyenge Agri-Solutions. All Rights Reserved.</p>
        <p>Part of the Boyenge Holdings Group. Sustainability | Innovation | Growth</p>
      </footer>
    </div>
  );
}

export default Agribusiness;
