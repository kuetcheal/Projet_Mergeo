import React from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ImmigrerCanada4 = () => {
  const reasons = [
    "Vivre dans un environnement sûr avec votre famille",
    "Accès aux prestations des services sociaux",
    "Vivre, travailler et voyager partout au Canada",
    "Voyage sans visa dans plus de 80 pays",
    "Accès aux services de santé gratuits",
    "Enseignement subventionné pour les enfants",
  ];

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texte principal */}
        <Grid item xs={12} md={7}>
         
          <Typography variant="h4" fontWeight="bold" gutterBottom color='#A93D87'>
            Choisissez la France pour vos études à l’étranger !
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            La France est très attractive pour les étudiants étrangers ! Elle est le 4ème pays d’accueil des étudiants étrangers dans le monde.
          </Typography>
          <Typography variant="body1" paragraph>
            Ce succès tient à plusieurs raisons :
          </Typography>
          <ul>
            {reasons.map((reason, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <ThumbUpIcon sx={{ color: "red", marginRight: "10px" }} />
                <Typography>{reason}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="body1" paragraph>
            Détenir un diplôme d’une université Française est devenu synonyme d’excellence !
          </Typography>
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

export default ImmigrerCanada4;
