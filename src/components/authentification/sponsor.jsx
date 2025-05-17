import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./sponsor.css";

const Sponsor = () => {
  const logos = [
    { id: 1, src: "images/mobiliis.jpeg", alt: "Logo 1" },
    { id: 2, src: "/images/studappart.png", alt: "Logo 2" },
    { id: 3, src: "/images/excelia.jpeg", alt: "Logo 3" },
    { id: 4, src: "/images/Manitour.png", alt: "Logo 4" },
    { id: 5, src: "/images/Manitour.png", alt: "Logo 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < logos.length - 3) {
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

      {/* ✅ Sous-titre dynamique */}
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mt: 2,
          mb: 4,
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Nos partenaires nous accompagnent dans la réussite de votre projet de
        mobilité. Qu'il s'agisse d’écoles, de résidences ou d’acteurs privés,
        ils partagent notre mission : vous simplifier les démarches de voyage.
      </Typography>

      <div className="sponsor-carousel">
        <button className="carousel-btn prev-btn" onClick={handlePrev}>
          ❮
        </button>
        <div className="carousel-logos">
          {logos.slice(currentIndex, currentIndex + 3).map((logo) => (
            <Box
              key={logo.id}
              sx={{
                width: 230,
                height: 120,
                backgroundColor: "#f9f9f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 1,
                boxShadow: 1,
                borderRadius: 1,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </div>
        <button className="carousel-btn next-btn" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {logos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
