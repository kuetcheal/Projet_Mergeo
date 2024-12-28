import React from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Belgique1 = () => {
  const reasons = [
    "Multilinguisme : Plusieurs langues officielles du pays (le français, l'anglais, le néerlandais et l’allemand)",
    "Système éducatif polyvalent et très compétitif",
    "Diplômes internationaux et reconnus partout dans le monde",
    "Un coût de vie et des frais de scolarité parmi les plus bas de l’Europe",
    "Système de santé très puissant (un des meilleurs au monde)",
    "Perspectives d’embauche post formation",
  ];

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texte principal */}
        <Grid item xs={12} md={7}>
         
          <Typography variant="h4" fontWeight="bold" gutterBottom color='#A93D87'>
          Pourquoi choisir la Belgique pour vos études à l’étranger !
          </Typography>
          <ul>
            {reasons.map((reason, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <ThumbUpIcon sx={{ color: "red", marginRight: "10px" }} />
                <Typography>{reason}</Typography>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Images */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <img
              src="/images/catable.jpg"
              alt="Modern Building"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>

    
    </Box>
  );
};

export default Belgique1;