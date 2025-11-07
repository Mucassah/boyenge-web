import React, { useEffect, useState } from "react";
import "./Consulting.css";
import heroImage from "./assets/hero-image.JPG";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import chessDark from "./assets/chess-dark.JPG";
import chessLight from "./assets/chess-light.JPG";

function Consulting() {
  const testimonials = [
    {
      text: `“Before working with Boyenge consulting team, I had hired various consultants and it was always chaotic. 
      With Boyenge Consulting, I now have an expert who takes care of everything 100%. Perfect!”`,
      name: "Sebastian Szalinski",
      title: "CEO IRON Media GmbH",
      image: person1,
      chess: chessDark,
    },
    {
      text: `"With Boyenge Consulting, my finances are in the best of hands and I can focus fully on my business, which is also well insured."`,
      name: "Maruan Faraj",
      title: "CEO Finally Freelancing GmbH",
      image: person2,
      chess: chessLight,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // how far past the hero section we are
      const scrollProgress = Math.max(0, scrollY - viewportHeight * 0.8);
      const sectionLength = viewportHeight * 1.5; // scroll distance before next testimonial
      const newIndex = Math.floor(scrollProgress / sectionLength) % testimonials.length;

      setCurrentIndex(newIndex);
      setRotation((scrollY / 5) % 360); // smooth anticlockwise rotation
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = testimonials[currentIndex];

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
            BOYENGE CONSULTING<br />
            <span>Fast. Digital. Competent.</span>
          </h1>
          <p className="hero-subtitle">
            Over <strong>700 satisfied customers</strong> are no coincidence — we offer
            all round and indepth analysis in different sectors of the economy.
          </p>
          <button className="cta-button">Book a call</button>
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <div className="testimonials-section">
        <div className="testimonials-content">
          <h2 className="testimonials-heading">
            What top <br />
            entrepreneurs say <br />
            about our work
          </h2>

          <p className="testimonial-text fade">{t.text}</p>

          <div className="testimonial-author">
            <img src={t.image} alt={t.name} className="author-img" />
            <div>
              <p className="author-name">{t.name}</p>
              <p className="author-title">{t.title}</p>
            </div>
          </div>
        </div>

        <div className="testimonials-image">
          <img
            src={t.chess}
            alt="chess piece"
            className="chess-piece"
            style={{ transform: `rotate(-${rotation}deg)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Consulting;
