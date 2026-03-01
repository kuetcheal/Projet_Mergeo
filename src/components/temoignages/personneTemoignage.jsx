import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CardTemoin from "./cardTemoin";
import "./personneTemoignage.css";
import { Container } from "react-bootstrap";

// petit helper pour générer un slug propre si besoin
const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const PersonneTemoignage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // listes depuis i18n
  const temoignagesEtudiants = useMemo(() => {
    const val = t("temoins.students", { returnObjects: true });
    return Array.isArray(val) ? val : [];
  }, [t]);

  const temoignagesAutres = useMemo(() => {
    const val = t("temoins.others", { returnObjects: true });
    return Array.isArray(val) ? val : [];
  }, [t]);

  const handleRead = (temoin) => {
    const slug = temoin.slug || slugify(temoin.nom);
    navigate(`/temoignage/${slug}`);
  };

  return (
    <section className="temoins-section">
      <Container>
        <div className="temoins-container">
          <h3 className="temoins-title">{t("temoins.sectionTitle1")}</h3>

          <div className="temoins-grid">
            {temoignagesEtudiants.map((tItem) => (
              <CardTemoin
                key={tItem.slug || tItem.nom}
                nom={tItem.nom}
                message={tItem.message}
                image={tItem.image}
                onRead={() => handleRead(tItem)}
                ctaLabel={t("temoins.ctaRead")}
              />
            ))}
          </div>

          <h3 className="temoins-title mt">{t("temoins.sectionTitle2")}</h3>

          <div className="temoins-grid">
            {temoignagesAutres.map((tItem) => (
              <CardTemoin
                key={tItem.slug || tItem.nom}
                nom={tItem.nom}
                message={tItem.message}
                image={tItem.image}
                onRead={() => handleRead(tItem)}
                ctaLabel={t("temoins.ctaRead")}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonneTemoignage;