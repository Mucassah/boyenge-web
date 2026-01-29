import React from "react";
import "./Consulting.css";
import heroImage from "./assets/hero-image.JPG";

import home1 from "./assets/home1.JPG";
import privateBg from "./assets/private-army.jpg";
import cropproduction from "./assets/cropproduction.JPG";
import Insurancepic from "./assets/Insurancepic.JPG";
import Air from "./assets/Air.JPG";
import Muziki from "./assets/Muziki.JPG";
import Mining from "./assets/Mining.JPG";




function Consulting() {
  const sectors = [
    {
      title: "Real Estate",
      description:
        "Navigating the complexities of property acquisition, urban development, and investment management. We provide data-driven insights to maximize your portfolio's value.",
      image: home1 ,
    },
    {
      title: "Security",
      description:
        "Comprehensive risk assessment and strategic security consulting. We specialize in protecting assets, personnel, and infrastructure through innovative technology.",
      image: privateBg ,
    },
    {
      title: "Agribusiness",
      description:
        "Modernizing the agricultural value chain. From sustainable farming practices to supply chain optimization, we help scale agribusiness operations.",
      image: cropproduction,
    },
    {
      title: "Mining",
      description:
        "Expert guidance in mineral exploration, regulatory compliance, and sustainable extraction. We bridge the gap between resource potential and operational excellence.",
      image: Mining ,
    },
    {
      title: "Insurance",
      description:
        "Strategic risk management and insurance advisory. We help clients navigate complex policy landscapes and secure robust coverage tailored to corporate needs.",
      image: Insurancepic,
    },
    {
      title: "Logistics",
      description:
        "Streamlining global supply chains through efficient distribution strategies and freight management.",
      image: Air,
    },
    {
      title: "Entertainment",
      description:
        "Consulting for the evolving media landscape, including production, talent management, and digital distribution.",
      image: Muziki ,
    },
  ];

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            BOYENGE CONSULTING
            <br />
            <span>Fast. Digital. Competent.</span>
          </h1>

          <p className="hero-subtitle">
            Over <strong>700 satisfied customers</strong> are no coincidence — we
            offer all round and indepth analysis in different sectors of the
            economy.
          </p>

          <a href="mailto:consulting@boyenge.com" className="cta-button">
            Book a call
          </a>
        </div>
      </section>

      {/* ===== SECTORS SECTION ===== */}
      <section className="sectors-section">
        <div className="sectors-header">
          <h2>Our Expertise</h2>
          <div className="sectors-divider"></div>
        </div>

        <div className="sectors-list">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`sector-item ${
                index % 2 !== 0 ? "sector-reverse" : ""
              }`}
            >
              <div className="sector-content">
                <h3>{sector.title}</h3>
                <p>"{sector.description}"</p>
              </div>

              <div className="sector-media">
                <img
                  src={sector.image}
                  alt={sector.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600?text=${sector.title}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Consulting;
