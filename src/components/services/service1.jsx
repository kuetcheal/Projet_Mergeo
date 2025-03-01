import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { styled } from "@mui/system";
import  './service.css';
const services = [
  {
    id: 1,
    title: "préfinancement étudiant",
    description:
      "Votre court séjour dans l'espace Schengen peut s'étendre jusqu'à 90 jours. YimmiLine simplifie ce processus en trois points clés : évaluation de votre situation, gestion de votre visa, et préparation de vos justificatifs.",
    image: "/images/brochure.jpeg",
    tag: "Court séjour",
    buttonText: "En savoir plus",
  },
 
  {
    id: 3,
    title: "Trouver votre logement",
    description:
      "YimmiLine ouvre la voie aux étudiants internationaux pour étudier dans les grandes écoles, alliant bien plus qu'un simple programme. Nous vous guidons de A à Z, offrant une expérience unique qui marquera votre vie.",
    image: "/images/Photo_Alex.jpeg",
    tag: "Études",
    buttonText: "En savoir plus",
  },
  {
    id: 4,
    title: "AVI + Assurance Voyage",
    description:
      "YimmiLine ouvre la voie aux étudiants internationaux pour étudier dans les grandes écoles, alliant bien plus qu'un simple programme. Nous vous guidons de A à Z, offrant une expérience unique qui marquera votre vie.",
    image: "/images/Photo_Alex.jpeg",
    tag: "Études",
    buttonText: "En savoir plus",
  },
  {
    id: 2,
    title: "Orientation scolaire + Admission",
    description:
      "YIMMILINE est une société financière habilitée à recevoir des fonds du public, en sa qualité de Société.",
    image: "/images/brochure.jpeg",
    tag: "Intégration étudiant",
    buttonText: "En savoir plus",
  },
  // Cartes supplémentaires
  {
    id: 5,
    title: "Prepas aux tests de Langue",
    description: "Description pour le service supplémentaire 1.",
    image: "/images/Photo_Alex.jpeg",
    tag: "Nouveau service",
    buttonText: "En savoir plus",
  },
  {
    id: 6,
    title: "Service supplémentaire 2",
    description: "Description pour le service supplémentaire 2.",
    image: "/images/Photo_Alex.jpeg",
    tag: "Nouveau service",
    buttonText: "En savoir plus",
  },
];
const AnimatedCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: 3,
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#00274d",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&:hover .image": {
    transform: "scale(0.95)",
  },
}));
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "220px",
  overflow: "hidden",
  borderBottomLeftRadius: "16px",
  borderBottomRightRadius: "16px",
}));
const FullImage = styled(CardMedia)(({ theme }) => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
}));
const Service = () => {
  const [visibleCards, setVisibleCards] = useState(4);

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


  const handleShowMore = () => {
    setVisibleCards(visibleCards + 4); // Affiche 4 cartes supplémentaires
  };
  const handleShowLess = () => {
    setVisibleCards(4); // Réinitialise pour afficher uniquement les 4 premières cartes
  };
  return (
    <Box sx={{ padding: "20px" }}>
      <h2 className="service-title">NOS SERVICES</h2>
      <Typography variant="h5" component="h3" align="center" gutterBottom>
        Nous proposons des services complets ou spécifiques pour votre procédure de voyage dans 
        nos différentes destinations et pays de votre choix selon vos besoins.
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {services.slice(0, visibleCards).map((service) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={service.id}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimatedCard>
              <ImageContainer>
                <FullImage
                  component="img"
                  image={service.image}
                  alt={service.title}
                  className="image"
                />
              </ImageContainer>
              <CardContent sx={{ color: "#ffffff", minHeight: "180px" }}>
                <Typography
                  variant="caption"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#00274d",
                    padding: "2px 8px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    position: "absolute",
                    marginTop: "-24px",
                  }}
                >
                  {service.tag}
                </Typography>
                <Typography variant="h6" component="h2" sx={{ marginTop: 2 }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, fontSize: "14px", lineHeight: 1.5 }}
                >
                  {service.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: "16px", textAlign: "center" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    borderColor: "#ffffff",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#ffffff", color: "#00274d" },
                  }}
                  onClick={() => handleNavigation(service.id)}
                >
                  {service.buttonText}
                </Button>
              </Box>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        {visibleCards < services.length ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleShowMore}
            sx={{
              backgroundColor: "#00274d",
              "&:hover": { backgroundColor: "#001d3a" },
              marginRight: "10px",
            }}
          >
            Afficher plus
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleShowLess}
            sx={{
              backgroundColor: "#d32f2f",
              "&:hover": { backgroundColor: "#b71c1c" },
            }}
          >
            Afficher moins
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Service;