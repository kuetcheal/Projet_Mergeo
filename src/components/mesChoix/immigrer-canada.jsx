import React from 'react';
import './france.css';
import Canada1 from './canada1';
import Canada2 from './canada2';
import France3 from './france3';
import ImmigrerCanada4 from './immigrer-canada4';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CanadaSubMenu from './CanadaSubMenu'; 

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
        <img src="/images/vancouver.webp" alt="Background" className="fran-image" />
        <div className="overlayfran"></div>
        <div className="breadfrance">
          <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
            Immigrer au Canada
          </p>
          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>

      {/* 🔽 Barre de navigation contextuelle */}
      

      <div className="content-section">
        <div className="overlayfrance">
        <CanadaSubMenu />
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

        <h3 style={{ color: '#004080', fontSize: '20px' }}>
          Le Canada se classe régulièrement parmi les meilleures destinations d’études tant pour le niveau de vie pour lequel se classe au premier rang mondial qu’au niveau de la qualité des études reconnues à l’échelle internationale. Il accueille chaque année des milliers d’étudiants internationaux.
        </h3> <br />

        <Canada1 />
        <Canada2 />
        <France3 />
        <ImmigrerCanada4 />

        <button className="green-button" style={{ marginLeft: '60px' }}>
          Je postule
        </button>
      </div>
    </div>
  );
};

export default Canada;
