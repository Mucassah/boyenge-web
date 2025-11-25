import React from "react";
import "./Entertainment.css";
import Boyengelogo from "./assets/Logo.png";
import Muziki from "./assets/Muziki.JPG";
import Kocha from "./assets/Kocha.JPG";
import Runinga from "./assets/Runinga.JPG";
import { useNavigate } from "react-router-dom"; // remove if using scroll mode

const Entertainment = () => {
  const navigate = useNavigate(); // remove if using scroll mode

  // ---- OPTION A: NAVIGATE TO ROUTES ----
  const goTo = (path) => {
    navigate(path);
  };

  // ---- OPTION B: SCROLL TO SECTIONS IN THE SAME PAGE ----
  // const goTo = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) section.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="boyenge-container">
      <div className="header-section">
        <div className="title">
          <h1>BOYENGE<br />ENTERTAINMENT</h1>
        </div>

        <div className="logo-box">
          <img
            src={Boyengelogo}
            alt="Boyenge Holdings Logo"
            className="logo"
          />
        </div>
      </div>

      <div className="cards-container">

        <div className="card" onClick={() => goTo("/music")}>
          <img
            src={Muziki}
            alt="Music"
            className="card-image"
          />
          <span className="card-label">MUSIC</span>
        </div>

        <div className="card" onClick={() => goTo("/football")}>
          <img
            src={Kocha}
            alt="Football Club"
            className="card-image"
          />
          <span className="card-label">FOOTBALL CLUB</span>
        </div>

        <div className="card" onClick={() => goTo("/television")}>
          <img
            src={Runinga}
            alt="Television"
            className="card-image"
          />
          <span className="card-label">TELEVISION</span>
        </div>

      </div>
    </div>
  );
};

export default Entertainment;
