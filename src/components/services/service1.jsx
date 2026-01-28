import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import "./service.css";

const services = [
  {
    id: 1,
    title: "préfinancement étudiant",
    description:
      "Votre court séjour dans l'espace Schengen peut s'étendre jusqu'à 90 jours. YimmiLine simplifie ce processus en trois points clés : évaluation de votre situation, gestion de votre visa, et préparation de vos justificatifs.",
    image: "/images/toeic.jpg",
    tag: "Préfinancement",
    buttonText: "En savoir plus",
  },
  {
    id: 3,
    title: "Trouver votre logement",
    description:
      "Mobiliis ouvre la voie aux étudiants internationaux pour étudier dans les grandes écoles, alliant bien plus qu'un simple programme. Nous vous guidons de A à Z, offrant une expérience unique qui marquera votre vie.",
    image: "/images/residence.jpg",
    tag: "logement",
    buttonText: "En savoir plus",
  },
  {
    id: 4,
    title: "AVI + Assurance Voyage",
    description:
      "Mobiliis ouvre la voie aux étudiants internationaux pour étudier dans les grandes écoles, alliant bien plus qu'un simple programme. Nous vous guidons de A à Z, offrant une expérience unique qui marquera votre vie.",
    image: "/images/caution.webp",
    tag: "Caution Bancaire",
    buttonText: "En savoir plus",
  },
  {
    id: 2,
    title: "Orientation scolaire + Admission",
    description:
      "Mobiliis est une société financière habilitée à recevoir des fonds du public, en sa qualité de Société.",
    image: "/images/orientation.jpg",
    tag: "Orientation étudiant",
    buttonText: "En savoir plus",
  },
  {
    id: 5,
    title: "Prepas aux tests de Langue",
    description: "Description pour le service supplémentaire 1.",
    image: "/images/canada.jpg",
    tag: "Nouveau service",
    buttonText: "En savoir plus",
  },
  {
    id: 6,
    title: "Service supplémentaire 2",
    description: "Description pour le service supplémentaire 2.",
    image: "/images/catable.jpg",
    tag: "Nouveau service",
    buttonText: "En savoir plus",
  },
];

const AnimatedCard = styled(Card)(() => ({
  overflow: "hidden",
  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#00274d",
}));

const ImageContainer = styled(Box)(() => ({
  position: "relative",
  height: "220px",
  overflow: "hidden",
}));

const FullImage = styled(CardMedia)(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
}));

// ✅ utilitaire : limite par N caractères (si tu préfères cette option)
// const truncateChars = (text, max = 140) => {
//   if (!text) return "";
//   return text.length > max ? text.slice(0, max).trim() + "..." : text;
// };

const Service = () => {
  const navigate = useNavigate();

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
    navigate("/services"); // ✅ adapte si ta route est différente
  };

  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="service-title">Nos Services</h2>

        <Typography variant="h5" component="h3"  gutterBottom className="loger">
          Nous proposons des services complets ou spécifiques pour votre procédure de voyage dans
          nos différentes destinations et pays de votre choix selon vos besoins.
        </Typography>

        {/* ✅ CAROUSEL */}
        <div className="service-horizontal-scroll">
          {services.map((service) => (
            <div className="service-slide" key={service.id}>
              <AnimatedCard className="service-card">
                {/* ✅ image + overlay hover */}
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

                  {/* ✅ OPTION A : limite visuelle par lignes (CSS line-clamp) */}
                  <Typography className="service-desc" variant="body2">
                    {service.description}
                  </Typography>

                  {/* ✅ OPTION B : limite par nombre de caractères (décommente si tu veux)
                  <Typography className="service-desc" variant="body2">
                    {truncateChars(service.description, 140)}
                  </Typography>
                  */}
                </CardContent>

                {/* ✅ bouton aligné à gauche */}
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

        {/* ✅ bouton "Tous nos services" */}
        <div className="service-bottom">
          <button className="service-all-btn" onClick={handleAllServices}>
            Tous nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
