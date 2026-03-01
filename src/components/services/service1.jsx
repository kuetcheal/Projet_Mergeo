import React, { useMemo } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import "./service.css";

const servicesStatic = [
  { id: 1, image: "/images/toeic.jpg" },
  { id: 3, image: "/images/residence.jpg" },
  { id: 4, image: "/images/caution.webp" },
  { id: 2, image: "/images/orientation.jpg" },
  { id: 5, image: "/images/canada.jpg" },
  { id: 6, image: "/images/catable.jpg" }
];

const AnimatedCard = styled(Card)(() => ({
  overflow: "hidden",
  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#00274d"
}));

const ImageContainer = styled(Box)(() => ({
  position: "relative",
  height: "220px",
  overflow: "hidden"
}));

const FullImage = styled(CardMedia)(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out"
}));

const Service = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = useMemo(() => {
    const trItems = t("servicesSection.items", { returnObjects: true });
    const items = Array.isArray(trItems) ? trItems : [];

    return servicesStatic.map((s) => {
      const tr = items.find((it) => Number(it?.id) === Number(s.id));
      return {
        ...s,
        title: tr?.title || "",
        description: tr?.description || "",
        tag: tr?.tag || "",
        buttonText: tr?.buttonText || ""
      };
    });
  }, [t]);

  const handleNavigation = (id) => {
    switch (id) {
      case 1:
        navigate("/financeEtudiant");
        break;
      case 3:
        navigate("/logement");
        break;
      case 4:
        navigate("/avi");
        break;
      case 2:
        navigate("/coaching");
        break;
      default:
        break;
    }
  };

  const handleAllServices = () => {
    navigate("/services");
  };

  return (
    <Container>
      <section className="service-section">
        <div className="service-container">
          <h2 className="service-title">{t("servicesSection.title")}</h2>

          <p>{t("servicesSection.subtitle")}</p>

          <div className="service-horizontal-scroll">
            {services.map((service) => (
              <div className="service-slide" key={service.id}>
                <AnimatedCard className="service-card">
                  <ImageContainer className="service-image-container service-imageWrap">
                    <FullImage
                      component="img"
                      image={service.image}
                      alt={service.title}
                      className="image"
                    />
                    <div className="service-imageOverlay" />
                  </ImageContainer>

                  <CardContent className="service-content">
                    <Typography className="service-tag" variant="caption">
                      {service.tag}
                    </Typography>

                    <Typography variant="h6" component="h2" className="service-cardTitle">
                      {service.title}
                    </Typography>

                    <Typography className="service-desc" variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>

                  <Box className="service-action">
                    <Button
                      variant="outlined"
                      className="service-btn"
                      onClick={() => handleNavigation(service.id)}
                    >
                      {service.buttonText}
                    </Button>
                  </Box>
                </AnimatedCard>
              </div>
            ))}
          </div>

          <div className="service-bottom">
            <button className="service-all-btn" onClick={handleAllServices}>
              {t("servicesSection.allCta")}
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Service;