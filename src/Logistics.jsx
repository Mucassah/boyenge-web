import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import logisticsAnimation from "./freezpak-logistics.json";
import Ship from "./assets/ship.JPG";
import Air from "./assets/Air.JPG";
import Road from "./assets/Road.JPG";
import Sea from "./assets/Sea.JPG";
import './Logistics.css';

const Logistics = () => {
  return (
    <div>
      <div className="home-fold">
        {/* 🔹 Video background */}
        <div className="home-fold__video">
          <Lottie
            animationData={logisticsAnimation}
            loop={true}
            autoplay={true}
            className="background-lottie"
          />

          {/* 🔹 H1 on top of the video */}
          <h1 className="home-fold__title">
            <span>BOYENGE</span>
            <span>LOGISTICS</span>
          </h1>
        </div>

        {/* 🔹 Everything else BELOW the video */}
        <div className="fold-animation__container">
          <div className="container container--fold-animation">
            <div className="about-us">
              <div>
                <h3>About us</h3>
                <p>MORE THAN JUST<br/>LOGISTICS</p>
                <p>
                  At Boyenge Logistics, we provide seamless, reliable, and innovative logistics solutions tailored to your needs. From timely deliveries to secure transport, our mission is to make your supply chain efficient, stress-free, and growth-oriented.<br/>
                  Why Choose Us?<br/>
                  i.Dependable Delivery: Your cargo, on time, every time.<br/>
                  ii.Tailored Solutions: Logistics that fit your business, not the other way around.<br/>
                  iii.Global Reach, Local Touch: Expertise that bridges markets and distances.
                </p> 
              </div>
              <div>
                <img src={Ship} alt="Shipping container" />
              </div>
            </div>
            <div className="logistics-methods-wrapper">
              <h2 className="methods-title">Available Shipping Methods</h2>
              <div className="methods-grid">
                {/* Air Transport */}
                <Link to="/logistics1" className="method-item">
                  <img src={Air} alt="Air Freight" />
                  <div className="method-label">
                    <h3>Air Transport</h3>
                  </div>
                
                </Link>

                {/* Road Transport */}
                <Link to="/logistics2" className="method-item">
                  <img src={Road} alt="Road Freight" />
                  <div className="method-label">
                    <h3>Road Transport</h3>
                  </div>
                </Link>

                {/* Sea Transport */}
                <Link to="/logistics3" className="method-item">
                  <img src={Sea} alt="Sea Freight" />
                  <div className="method-label">
                    <h3>Sea Transport</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="services-section">
              <h2 className="services-title">Our Services</h2>
              <div className="services-container">
                <div className="service-item">
                  <h3>Import and Export</h3>
                  <p className="service-info">
                    We handle the seamless import and export of a wide range of general merchandise, ensuring your goods reach their destination safely and on time. Our team manages all logistics, customs, and transportation to make cross-border trade hassle-free.
                  </p>
                </div>

                <div className="service-item">
                  <h3>Wholesale and Retail Distribution</h3>
                  <p className="service-info">
                    Boyenge Holdings Group provides efficient wholesale and retail distribution solutions, delivering products quickly and reliably to markets, stores, and end consumers. We help businesses maintain steady supply chains and meet growing demand with ease.
                  </p>
                </div>

                <div className="service-item">
                  <h3>Commodity trading</h3>
                  <p className="service-info">
                    We specialize in trading commodities including agricultural products, consumer goods, and more. By connecting suppliers and buyers, we facilitate profitable, transparent, and efficient transactions both locally and internationally.
                  </p>
                </div>

                <div className="service-item">
                  <h3>Local and international market linkage</h3>
                  <p className="service-info">
                    Our network bridges businesses with local and global markets, opening opportunities for expansion and growth. We create strategic connections that optimize trade, distribution, and market presence.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-left">
          <h4>Get In Touch</h4>
          <h2>
            TRANSFORM YOUR LOGISTICS<br />
            <span>CONTACT US TODAY</span>
          </h2>
          <p>
            Move your cargo through borders and local distributions with ease and efficiency 
          </p>
          <ul>
            <li>✅ 20+ Years Of Experience</li>
            <li>✅ Professionalism</li>
            <li>✅ Customized logistics to meet your needs</li>
          </ul>
        </div>

        <div className="contact-right">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  required
                />
              </div>
            </div>

            <div className="input-group full-width">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                placeholder="Write message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Us Message <span>➤</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
