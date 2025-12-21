import React from 'react';
import {
  Box, Grid, Typography, Button,
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

const Presentation1 = () => {
  const navigate = useNavigate();
  const handlePresentationClick = () => navigate('/presentation');

  return (
    // ✅ BG full width
    <Box sx={{ width: "100%", bgcolor: "#f9f9f9", py: { xs: 4, md: 5 } }}>
      {/* ✅ contenu dans un container interne (même largeur partout) */}
      <Box
        sx={{
          maxWidth: "1290px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/canada-ville.avif"
              alt="Background"
              sx={{
                borderRadius: "8px",
                width: "100%",
                height: { xs: 260, sm: 360, md: 600 }, // ✅ responsive
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#D6007F" }}>
              Votre partenaire fiable!
            </Typography>

            <Typography variant="body1" paragraph>
              En choisissant d’intégrer Mobiliis dans votre projet de voyage, profitez d’un accompagnement expert étape par étape.
              Nos compétences sur mesure sont ajustées en fonction de votre profil et de votre projet.
            </Typography>

            <Typography variant="body1" paragraph>
              Découvrez plus en détail notre approche distinctive et notre vision de la préparation de votre envol
              <strong> vers la France, la Belgique, le Canada, suivie de votre intégration.</strong>
            </Typography>

            <List sx={{ pl: 0 }}>
              {[
                'Mobiliis pour vos études',
                'Mobiliis pour votre procédure immigration Canada',
                'Mobiliis pour votre résidnece permanente Canada',
                'Mobiliis pour les recherches de logement',
                'Mobiliis pour les préfinancements de votre procédure',
                'Mobiliis pour les touristes et autres voyageurs',
                'Mobiliis pour les recherches de stage, de job',
              ].map((text, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <SendIcon sx={{ color: '#D6007F' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>

            <Button
              onClick={handlePresentationClick}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#0047AB',
                color: '#fff',
                fontWeight: 'bold',
                mt: 2,
                '&:hover': { backgroundColor: '#A93D87' }
              }}
            >
              En savoir plus
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Presentation1;
