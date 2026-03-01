import React, { useMemo, useCallback } from "react";
import "./langue.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

const Langue = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Cards depuis les taxos
  const cardsFromTaxo = useMemo(() => {
    const items = t("langue.cards", { returnObjects: true });
    return Array.isArray(items) ? items : [];
  }, [t]);

  // Routes (logique métier) -> useCallback pour être stable
  const handleCanada = useCallback(() => navigate("/coursCanada"), [navigate]);
  const handleAnglais = useCallback(() => navigate("/coursAnglais"), [navigate]);
  const handleAllemand = useCallback(() => navigate("/coursAllemand"), [navigate]);

  const formations = useMemo(() => {
    const assetsById = {
      1: { logo: "images/toeic.jpg", onClick: handleAnglais },
      2: { logo: "images/tcf.webp", onClick: handleCanada },
      3: { logo: "images/DELF-DALF.avif", onClick: handleAllemand },
      4: { logo: "images/tcf.webp", onClick: null },
    };

    return cardsFromTaxo.map((c) => ({
      id: c?.id,
      title: c?.title ?? "",
      description: c?.desc ?? "",
      location: c?.location ?? "",
      button: t("langue.ctaCard"),
      logo: assetsById[c?.id]?.logo ?? "images/tcf.webp",
      onClick: assetsById[c?.id]?.onClick ?? null,
    }));
  }, [cardsFromTaxo, t, handleAnglais, handleCanada, handleAllemand]);


  return (
    <Container>
    <section className="lg-section">
      <div className="lg-container">
        <h2 className="lg-title">{t("langue.title")}</h2>

        <p className="lg-description">{t("langue.description")}</p>

        <div className="lg-scroll">
          {formations.map((formation) => (
            <div className="lg-card" key={formation.id}>
              <img
                src={formation.logo}
                alt={formation.title}
                className="lg-image"
              />

              <div className="lg-body">
                <h3 className="lg-card-title">{formation.title}</h3>

                <ul className="lg-details">
                  <li className="lg-detail">{formation.description}</li>
                  <li className="lg-detail">{formation.location}</li>
                </ul>

                <button
                  className="lg-btn"
                  onClick={formation.onClick || undefined}
                  disabled={!formation.onClick}
                >
                  {formation.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg-bottom">
          <button className="lg-discover">
            {t("langue.ctaAll")}
          </button>
        </div>
      </div>
    </section>
    </Container>
  );
};

export default Langue;