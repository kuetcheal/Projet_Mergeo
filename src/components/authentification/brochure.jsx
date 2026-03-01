import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import './brochure.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function BrochureForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      alert(t("brochure.alerts.fillAll"));
      return;
    }

    try {
      await axios.post('/api/enregistrer', formData);

      const link = document.createElement('a');
      link.href = "/documents/etude_cas.pdf";
      link.download = "Mobiliis_brochure.pdf";
      link.click();
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
    } finally {
      navigate('/telechargeBrochure');
    }
  };

  return (
    <div className="brochure-bg">
      <Container >
        <Row className="align-items-center">

          <Col md={6} lg={6} className="mb-4 mb-md-0">
            <div className="brochure-image-container">
              <img
                src="/images/catable.jpg"
                alt={t("brochure.imageAlt")}
                className="brochure-image"
              />
            </div>
          </Col>

          <Col md={6} lg={6}>
            <div className="brochure-form-container">
              <h2 className="brochure-form-title">
                {t("brochure.title")}
              </h2>

              <form onSubmit={handleSubmit} className="brochure-form">
                <input
                  type="text"
                  name="nom"
                  placeholder={t("brochure.placeholders.nom")}
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="brochure-input"
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder={t("brochure.placeholders.prenom")}
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="brochure-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("brochure.placeholders.email")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brochure-input"
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("brochure.placeholders.telephone")}
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="brochure-input"
                />

                <div className="brochure-actions">
                  <Button
                    type="submit"
                    className="submit-button"
                    variant="contained"
                    color="primary"
                  >
                    <FileDownloadIcon /> {t("brochure.buttons.download")}
                  </Button>
                </div>
              </form>

              <Typography variant="body2" color="textSecondary" mt={3}>
                {t("brochure.rgpd")}
              </Typography>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}