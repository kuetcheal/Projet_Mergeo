import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Button from "@mui/material/Button";
import "./brochure1.css";

export default function Brochure1() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // (optionnel) tu peux garder required, mais ça sécurise un minimum côté JS
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone || !formData.message) {
      alert(t("brochure1.alert"));
      return;
    }

    try {
      await axios.post("/api/enregistrer", formData);

      // téléchargement
      const link = document.createElement("a");
      link.href = "/documents/etude_cas.pdf";
      link.download = "Mobiliis_brochure.pdf";
      link.click();

      navigate("/telechargeBrochure");
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert(t("brochure1.error"));
    }
  };

  return (
    <section className="brochure1-section">
      <Container>
        <Row className="align-items-center g-4">
          {/* Image */}
          <Col lg={6} md={12}>
            <div className="brochure1-image-box">
              <img
                src="/images/catable.jpg"
                alt={t("brochure1.imageAlt")}
                className="brochure1-image"
              />
            </div>
          </Col>

          {/* Form */}
          <Col lg={6} md={12}>
            <div className="brochure1-form-box">
              <h1 className="brochure1-title">{t("brochure1.title")}</h1>

              <form onSubmit={handleSubmit} className="brochure1-form">
                <input
                  type="text"
                  name="nom"
                  placeholder={t("brochure1.fields.nom")}
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="brochure1-input"
                />

                <input
                  type="text"
                  name="prenom"
                  placeholder={t("brochure1.fields.prenom")}
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="brochure1-input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder={t("brochure1.fields.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brochure1-input"
                />

                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("brochure1.fields.telephone")}
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="brochure1-input"
                />

                <textarea
                  name="message"
                  placeholder={t("brochure1.fields.message")}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="brochure1-input brochure1-textarea"
                />

                <div className="brochure1-actions">
                  <Button type="submit" variant="contained" color="secondary" fullWidth>
                    {t("brochure1.cta")}
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}