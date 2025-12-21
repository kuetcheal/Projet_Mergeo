import React from 'react';
import './france.css';
import France1 from './france1';
// import France2 from './france2';
// import France3 from './france3';
import France4 from './france4';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const France = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const features = [
    { icon: <PersonAddIcon fontSize="large" />, title: "AVANTAGES" },
    { icon: <AssignmentIcon fontSize="large" />, title: "ADMISSION" },
    { icon: <MapIcon fontSize="large" />, title: "VISA ÉTUDIANT" },
    { icon: <ApartmentIcon fontSize="large" />, title: "HÉBERGEMENT" },
  ];

  return (
    <div className="temoignages-page">
      <div className="fran-section">
        <img src="/images/catable.jpg" alt="Background" className="fran-image" />
        {/* Overlay sombre */}
        <div className="overlayfran"></div>
        <div className="breadfrance">

          <p className="france-title">
            Résider et étudier en France
          </p>
          <div className="underline"></div>
          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
      <div className="content-section">
        <div className="overlayfrance">
          <h1>Etudiant en France</h1> <br />
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
        <h3 style={{ color: '#004080', fontSize: '20px' }}>Le système d’enseignement français est l’un des plus puissants, diversifié et adapté à tous les besoins ! En raison de ces qualités,
          détenir un diplôme français facilite l’accès au marché du travail, et ce, partout dans les pays francophones et mêmes dans certains
          pays Anglophones juste l'équivalence dans certains cas est suffisant pour faire valoir votre Dipôme.</h3> <br />
        <France1 />
        {/* <France2 />
        <France3 /> */}
        <France4 />
        <button className="green-button" style={{ marginLeft: '60px' }}>
          Je postule
        </button>
      </div>
    </div>
  );
};

export default France;
