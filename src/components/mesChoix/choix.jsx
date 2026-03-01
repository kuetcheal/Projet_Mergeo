import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./choix.css";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const imagesByPath = {
  "/canada":
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80",
  "/france":
    "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60",
  "/allemagne":
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60",
};

const DestinationGrid = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const destinations = useMemo(() => {
    const val = t("destinations.items", { returnObjects: true });
    return Array.isArray(val) ? val : [];
  }, [t]);

  return (
    <Container>
      <div className="choix-wrapper">
        <h2 className="choix-title-main">{t("destinations.title")}</h2>

        <p className="choix-subtitle">{t("destinations.subtitle")}</p>

        <div className="choix-container-grid">
          {destinations.map((dest, index) => (
            <div
              key={`${dest.path}-${index}`}
              className="dest-card"
              role="button"
              tabIndex={0}
              onClick={() => navigate(dest.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(dest.path);
              }}
            >
              <img
                className="dest-image"
                src={imagesByPath[dest.path]}
                alt={dest.name}
              />

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
                  {t("destinations.discover")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DestinationGrid;