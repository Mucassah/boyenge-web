import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import logisticsAnimation from "./freezpak-logistics.json";
import Ship from "./assets/ship.JPG";
import Air from "./assets/Air.JPG";
import Road from "./assets/Road.JPG";
import Sea from "./assets/Sea.JPG";
import "./Logistics.css";

const Logistics = () => {
  return (
    <div>
      <div className="home-fold">
        {/* 🔹 Video background */}
        <div className="home-fold__video">
          <Lottie
            animationData={logisticsAnimation}
            loop
            autoplay
            className="background-lottie"
          />

          {/* 🔹 H1 on top of the video */}
          <h1 className="home-fold__title">
            <span>BOYENGE</span>
            <span>LOGISTICS</span>
          </h1>

          {/* 🔹 Track Cargo Button */}
          <Link to="/track" className="track-btn-wrapper">
            <button className="method-btn track-btn">Track Cargo</button>
          </Link>
        </div>

        {/* 🔹 Everything else BELOW the video */}
        <div className="fold-animation__container">
          <div className="container container--fold-animation">
            <div className="about-us">
              <div>
                <h3>About us</h3>
                <p>MORE THAN JUST<br />LOGISTICS</p>
                <p>
                  At Boyenge Logistics, we provide seamless, reliable, and innovative
                  logistics solutions tailored to your needs. From timely deliveries
                  to secure transport, our mission is to make your supply chain
                  efficient, stress-free, and growth-oriented.
                  <br /><br />
                  Why Choose Us?
                  <br />
                  i. Dependable Delivery: Your cargo, on time, every time.
                  <br />
                  ii. Tailored Solutions: Logistics that fit your business.
                  <br />
                  iii. Global Reach, Local Touch.
                </p>
              </div>
              <div>
                <img src={Ship} alt="Shipping container" />
              </div>
            </div>

            <div className="logistics-methods-wrapper">
              <h2 className="methods-title">Available Shipping Methods</h2>
              <div className="methods-grid">
                <Link to="/logistics1" className="method-item">
                  <div className="method-label">
                    <h3>Air Transport</h3>
                  </div>
                  <img src={Air} alt="Air Freight" />
                  <div className="method-action">
                    <button className="method-btn">Read More</button>
                  </div>
                </Link>

                <Link to="/logistics2" className="method-item">
                  <div className="method-label">
                    <h3>Road Transport</h3>
                  </div>
                  <img src={Road} alt="Road Freight" />
                  <div className="method-action">
                    <button className="method-btn">Read More</button>
                  </div>
                </Link>

                <Link to="/logistics3" className="method-item">
                  <div className="method-label">
                    <h3>Sea Transport</h3>
                  </div>
                  <img src={Sea} alt="Sea Freight" />
                  <div className="method-action">
                    <button className="method-btn">Read More</button>
                  </div>
                </Link>
              </div>
            </div>

            {/* 🔹 CONTACT SECTION */}
            <div className="boyenge-contact-section">
              <h2 className="contact-email">
                Email: <a href="mailto:logistics@boyenge.com">logistics@boyenge.com</a>
              </h2>

              <div className="contact-locations">
                <div className="location-item">
                  <h4>Qatar</h4>
                  <p>Unit 17, floor 12th, Burj Marina Tower Lusail Doha Qatar</p>
                </div>

                <div className="location-item">
                  <h4>Hong Kong</h4>
                  <p>Two International Finance Centre (Two IFC): Level 19, 8 Finance Street, Central, Hong Kong</p>
                </div>

                <div className="location-item">
                  <h4>Philippines</h4>
                  <p>Level 24, One Bonifacio High Street, Philippine Stock Exchange Tower, 5th Avenue corner 28th Street, Bonifacio Global City (BGC), Taguig, Metro Manila, 1634</p>
                </div>

                <div className="location-item">
                  <h4>Dubai</h4>
                  <p>Emirates Towers - Office. Levels 41 & 42, Emirates Towers Sheikh Zayed Road</p>
                </div>

                <div className="location-item">
                  <h4>China</h4>
                  <p>Room A-747, 3rd Floor, Section F, Buildings BDEF, Air Harbor International Business Center, Air Harbor New City, Xixian New Area, Shaanxi Province, China</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
