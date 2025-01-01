import React, { useState } from "react";
import "./sponsor.css";

const Sponsor = () => {
  const logos = [
    { id: 1, src: "images/mobiliis.jpeg", alt: "Logo 1" },
    { id: 2, src: "/images/studappart.png", alt: "Logo 2" },
    { id: 3, src: "/images/excelia.jpeg", alt: "Logo 3" },
    { id: 4, src: "/images/Manitour.png", alt: "Logo 4" },
    { id: 5, src: "/images/Afriland-First.png", alt: "Logo 5" },
    { id: 5, src: "/images/Afriland-First.png", alt: "Logo 5" },
    { id: 5, src: "/images/Afriland-First.png", alt: "Logo 5" },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < logos.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="sponsor-container">
      <h2 className="sponsor-title">NOS SPONSORS</h2>
      <div className="sponsor-carousel">
        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          ❮
        </button>
        <div className="carousel-logos">
          {logos.slice(currentIndex, currentIndex + 5).map((logo) => (
            <div key={logo.id} className="logo-item">
              <img src={logo.src} alt={logo.alt} className="sponsor-logo" />
            </div>
          ))}
        </div>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          ❯
        </button>
      </div>
      <div className="carousel-dots">
        {Array.from({ length: Math.ceil(logos.length / 5) }, (_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / 5) ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
