import React from 'react';
import './belgique.css';
import Canada1 from './canada1';
import Canada2 from './canada2';
import France3 from './france3';
import Belgique1 from './belgique1';
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
    { icon: <PersonAddIcon fontSize="large" />, title: "AVANTAGES" },
    { icon: <AssignmentIcon fontSize="large" />, title: "ADMISSION" },
    { icon: <MapIcon fontSize="large" />, title: "VISA ÉTUDIANT" },
    { icon: <ApartmentIcon fontSize="large" />, title: "HÉBERGEMENT" },
  ];

  return (
    <div className="temoignages-page">
      <div className="fran-section">
        <img src="/images/belge.jpg" alt="Background" className="fran-image" />
        <div style={{width: '110px', backgroundColor: '#C90076', height: '3px'}}></div>
        <div className="breadfrance">
          
          <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
            Resider et étudier en Belgique
          </p>
          
          <button className="green-button" onClick={handleContactClick}>
           NOUS CONTACTER
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
      <div className="content-section">
        <div className="overlayfrance">
          <h1>Etudier en Belgique</h1> <br />
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
     <h3 style={{color: '#004080', fontSize: '20px'}}>Choisir la Belgique pour vos études supérieures à l’étranger, c’est vivre la vie étudiante au centre de
         l’Europe dans un environnement d’études multilingue, multiculturel et de grande qualité.</h3> <br />
        <Canada1 />
        <Canada2 />
        <France3 />
        <Belgique1 />
        <button className="green-button" style={{marginLeft: '60px'}}>
            Je postule
          </button>
      </div>
    </div>
  );
};

export default Canada;
