import React from "react";
import "./Estateservice1.css";

// Import images from assets folder
import home1 from "./assets/home1.JPG";
import home2 from "./assets/home2.JPG";
import home3 from "./assets/home3.JPG";
import home4 from "./assets/home4.JPG";

import comm1 from "./assets/comm1.JPG";
import comm2 from "./assets/comm2.JPG";
import comm3 from "./assets/comm3.JPG";
import comm4 from "./assets/comm4.JPG";

const Estateservice1 = () => {
  const scrollToCommercial = () => {
    const section = document.getElementById("estate1-commercial");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const emailLink = "mailto:realestate@boyenge.com";

  // Residential Listings
  const residentialListings = [
    { id: 1, title: "Luxury Apartment", image: home1 },
    { id: 2, title: "Modern Family Home", image: home2 },
    { id: 3, title: "Urban Townhouse", image: home3 },
    { id: 4, title: "Elegant Villa", image: home4 },
  ];

  // Commercial Listings
  const commercialListings = [
    { id: 1, title: "Office Space", image: comm1 },
    { id: 2, title: "Retail Property", image: comm2 },
    { id: 3, title: "Business Complex", image: comm3 },
    { id: 4, title: "Corporate Building", image: comm4 },
  ];

  return (
    <div className="estate1-wrapper">
      {/* Hero Section */}
      <section className="estate1-hero">
        <div className="estate1-hero-content">
          <span className="estate1-badge">Urban Oasis</span>
          <h1>Find Your Urban Sanctuary</h1>
          <p>
            Boyenge Estate: Crafting luxury property, one at a time.
          </p>

          {/* Tabs */}
          <div className="estate1-tabs">
            <button className="active">Residential</button>
            <button onClick={scrollToCommercial}>Commercial</button>
          </div>

          {/* Filters */}
          <div className="estate1-filters">
            <select>
              <option>Price</option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
              <option value="4000">$4000</option>
              <option value="5000">Above $5000</option>
            </select>

            <select>
              <option>Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>
        </div>

        <div className="estate1-hero-image">
          <img src={home1} alt="Featured Property" />
        </div>
      </section>

      {/* Residential Listings */}
      <section className="estate1-featured">
        <h2>Featured Residential Listings</h2>
        <div className="estate1-cards">
          {residentialListings.map((listing) => (
            <div className="estate1-card" key={listing.id}>
              <img src={listing.image} alt={listing.title} loading="lazy" />
              <h4>{listing.title}</h4>
              <a href={emailLink}>
                <button>Contact Us</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Listings */}
      <section
        className="estate1-featured estate1-commercial"
        id="estate1-commercial"
      >
        <h2>Featured Commercial Listings</h2>
        <div className="estate1-cards">
          {commercialListings.map((listing) => (
            <div className="estate1-card" key={listing.id}>
              <img src={listing.image} alt={listing.title} loading="lazy" />
              <h4>{listing.title}</h4>
              <a href={emailLink}>
                <button>Contact Us</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Button */}
      <div className="estate1-chat">Chat</div>
    </div>
  );
};

export default Estateservice1;
