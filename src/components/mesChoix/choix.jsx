import React from "react";
import { useNavigate } from "react-router-dom";
import "./choix.css"; // adapte le chemin si besoin

const destinations = [
  {
    name: "CANADA",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80",
    path: "/canada",
  },
  {
    name: "FRANCE",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60",
    path: "/france",
  },
  {
    name: "ALLEMAGNE",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60",
    path: "/allemagne",
  },
];

const DestinationGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="choix-wrapper">
      <h2 className="choix-title-main">Nos principales destinations</h2>

      <p className="choix-subtitle">
        Nous vous ouvrons un monde d&apos;opportunités et d&apos;expériences pour des
        destinations très attractives pour vos études, tourisme, résidence permanente !
      </p>

      <div className="choix-container-grid">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="dest-card"
            role="button"
            tabIndex={0}
            onClick={() => navigate(dest.path)}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(dest.path);
            }}
          >
            <img className="dest-image" src={dest.image} alt={dest.name} />

            <div className="dest-overlay">
              <span className="dest-name">{dest.name}</span>

              <button
                type="button"
                className="dest-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(dest.path);
                }}
              >
                Découvrir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;
