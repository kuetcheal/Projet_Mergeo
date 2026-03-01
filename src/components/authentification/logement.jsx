import React from "react";
import "./logement.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

//  Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Logement = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const features = [
    { icon: <PersonAddIcon fontSize="large" />, title: "TCF" },
    { icon: <AssignmentIcon fontSize="large" />, title: "Des résidences étudiantes partenaires" },
    { icon: <MapIcon fontSize="large" />, title: "Une garantie locative gratuite" },
    { icon: <ApartmentIcon fontSize="large" />, title: "DELF-DALF" },
  ];

  // ✅ Partenaires (tu peux en rajouter / enlever)
  const partnerImages = [
    "/images/location.png",
    "/images/location1.jpg",
    "/images/location2.png",
    "/images/Amber.png",
    "/images/studappart.png",
 
  ];

  return (
    <div className="temoignages-page">
      {/* HERO */}
      <div className="fran-section">
        <img src="/images/Residence.jpg" alt="Background" className="fran-image" />
        <div className="overlayfran"></div>

        <div className="breadfrance">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              marginLeft: "10px",
              color: "white",
            }}
          >
            Trouver votre futur logement
          </p>

          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER
            <ChevronRightIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-section">
        <div className="overlayfrance">
          <h1>Trouver un logement étudiant avant mon arrivée, une vraie aubaine !</h1>
          <br />

          <Box sx={{ marginTop: "30px", backgroundColor: "#f7f7f7", padding: "20px 10px", borderRadius: "8px" }}>
            <Grid container spacing={2} justifyContent="center">
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{
                    textAlign: "center",
                    borderRight: index !== features.length - 1 ? "1px solid #E7C56F" : "none",
                    padding: "10px 20px",
                  }}
                >
                  <Box sx={{ color: "#4A306D", marginBottom: "10px" }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4A306D" }}>
                    {feature.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>

        <h3 style={{ color: "#004080", fontSize: "20px" }}>
          Le Canada se classe régulièrement parmi les meilleures destinations d’études tant pour le niveau de vie pour
          lequel se classe au premier rang mondial qu’au niveau de la qualité des études reconnues à l’échelle
          internationale. Il accueille chaque année des milliers d’étudiants internationaux.
        </h3>
        <br />

        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", margin: "2rem" }}>
          <header>
            <div className="allemand-header">
              <div className="allemand-DSH">
                <h1 style={{ fontSize: "2rem", color: "#A93D87" }}>
                  <strong>Qu’est-ce que le TEF Canada ?</strong>
                </h1>
                <h4>
                  Que vous soyez étudiant ou professionnel, si vous envisagez de partir étudier ou travailler au Canada,
                  il est fort probable que vous ayez déjà entendu parler du TEF Canada...
                </h4>
                <p>
                  Le test évalue votre niveau de français en se basant sur l'échelle NCLC, qui correspond aux Niveaux de
                  Compétence Linguistique Canadiens
                </p>

                <ul>
                  <li>La compréhension écrite dure 60 minutes :</li>
                  <li>La compréhension orale dure 40 minutes :</li>
                  <li>L’expression écrite dure 60 minutes :</li>
                  <li>L’expression orale dure 15 minutes :</li>
                </ul>
              </div>

              <div className="image-cours">
                <img src="/images/resi.jpg" alt="Cours d'Allemand" className="image1-cours" />
              </div>
            </div>

            <div className="allemand-header">
              <div className="allemand-DSH">
                <h1 style={{ fontSize: "2rem", color: "#A93D87" }}>Des résidences étudiantes partenaires</h1>

                <strong>Le TCF (test de connaissance en français)</strong> est un test de vérification du niveau de
                compétence en langue française d’un candidat à un instant « T ». Il donne lieu à la délivrance d’une
                attestation de niveau valable 2 ans.

                <p>
                  1.<strong> La compréhension écrite, évaluée sur une heure,</strong> ...
                </p>
                <p>
                  2.<strong> La compréhension orale, pendant 40 minutes,</strong> ...
                </p>
                <p>
                  3.<strong> L'expression à l'écrit, d'une heure,</strong> ...
                </p>
                <p>
                  4.<strong> L'oral, via un ordinateur, d'une grosse demi-heure (35 minutes le plus souvent)</strong>
                </p>
              </div>

              <div className="image-cours">
                <img src="/images/Residence-France.jpg" alt="Cours d'Allemand" className="image2-cours" />
              </div>
            </div>
          </header>

          {/* ✅ Section: Description (CAROUSEL) */}
          <section>
            <h1 style={{ fontSize: "2rem", color: "#A93D87" }}>Les partenaires immobiliers de Mobiliis</h1>

            <div className="partners-carousel">
              <Swiper
                  modules={[Autoplay, Pagination]}
  loop
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  spaceBetween={18}
  slidesPerView={3}
                breakpoints={{
                  0: { slidesPerView: 1.2 },
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                }}
              >
                {partnerImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="partner-card">
                      <img src={src} alt={`Partenaire ${i + 1}`} className="partner-img" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <p>
              Nous vous offrons plusieurs options pour passer le TCF, comme le TCF TP (tous publics), TCF ANF
              (nationalité française), ou encore le TCF Canada. Nos formateurs qualifiés vous accompagnent tout au long
              du processus.
            </p>
          </section>

          {/* Section: Préparation */}
          <section>
            <h2>Pourquoi choisir notre centre ?</h2>
            <ul>
              <li>Des sessions de préparation adaptées à vos besoins.</li>
              <li>Une plateforme d'e-learning pour vous entraîner efficacement.</li>
              <li>Un accompagnement individualisé pour assurer votre réussite.</li>
            </ul>
          </section>

          {/* Section: Inscription */}
          <section>
            <h2>Vos inscriptions au TCF</h2>
            <p>
              L'inscription se fait facilement en ligne. Vous recevrez un e-mail de confirmation ainsi que les détails
              nécessaires pour votre session. Pour commencer, cliquez ici :{" "}
              <a href="https://www.exemple.com/inscription" target="_blank" rel="noreferrer">
                Inscrivez-vous maintenant
              </a>
            </p>
          </section>

          {/* Section: Recommandations */}
          <section>
            <h2>Recommandé pour :</h2>
            <ul>
              <li>Les demandes d'admission universitaire en France.</li>
              <li>Les démarches d'immigration au Canada.</li>
              <li>La naturalisation française.</li>
            </ul>
          </section>

          <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
            <p>
              <strong>Contactez-nous</strong> pour toute question sur les prochaines sessions ou pour un accompagnement
              personnalisé.
            </p>
          </footer>
        </div>

        <button className="green-button" style={{ marginLeft: "60px" }}>
          Je postule
        </button>
      </div>
    </div>
  );
};

export default Logement;
