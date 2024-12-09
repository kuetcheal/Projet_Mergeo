import React from 'react';
import './coursAnglais.css';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Canada = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const features = [
    { icon: <PersonAddIcon fontSize="large" />, title: "TCF" },
    { icon: <AssignmentIcon fontSize="large" />, title: "TEF" },
    { icon: <MapIcon fontSize="large" />, title: "TEF Canada" },
    { icon: <ApartmentIcon fontSize="large" />, title: " DELF-DALF" },
  ];
  return (
    <div className="temoignages-page">
      <div className="anglais-section">
        <img src="/images/quebec.jpg" alt="Background" 
        style={{ height: '450px' }}
        className="anglais-image" />
        <div className="breadcrumb">
          Accueil »
          <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
            Améliorer vos connaissances en Anglais dès à présent
          </p>
          
          <button className="green-button" onClick={handleContactClick}>
            RESERVEZ VOTRE RENDEZ-VOUS
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '35px' }} />
          </button>
        </div>
      </div>
      <div className="content-section">
        <div className="overlay">
          <h1>Apprenez l'Anglais et valider vos tests de Langue</h1> <br />
          {/* Ajout d'espacement au-dessus de la grille */}
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
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#4A306D" }}
                  >
                    {feature.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

        </div> 
     <h3 style={{color: '#004080', fontSize: '20px'}}>Le Canada se classe régulièrement parmi les meilleures destinations d’études tant pour le niveau de vie pour lequel se classe au premier rang mondial qu’au niveau de
         la qualité des études reconnues à l’échelle internationale. Il accueille chaque année des milliers d’étudiants internationaux.</h3> <br />
       

         <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '2rem' }}>
      {/* Header */}
      <header>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>
          Centre agréé pour le <strong>Test de connaissance du français (TCF)</strong>
        </h1>
        <p>
          Le TCF, instrument créé pour évaluer le niveau de français des personnes non francophones, 
          est une référence pour la langue française.
        </p>
      </header>

      {/* Section: Description */}
      <section>
        <h2>À propos de notre centre</h2>
        <p>
          Nous vous offrons plusieurs options pour passer le TCF, comme le TCF TP (tous publics), TCF ANF 
          (nationalité française), ou encore le TCF Canada. Nos formateurs qualifiés vous accompagnent tout au long du processus.
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
          nécessaires pour votre session. Pour commencer, cliquez ici :{' '}
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

      {/* Footer */}
      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        <p>
          <strong>Contactez-nous</strong> pour toute question sur les prochaines sessions ou pour un accompagnement personnalisé.
        </p>
      </footer>
    </div>


        <button className="green-button" style={{marginLeft: '60px'}}>
            Je postule
          </button>
      </div>
    </div>
  );
};

export default Canada;
