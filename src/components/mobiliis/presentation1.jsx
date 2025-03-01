import React from 'react';
import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

const Presentation1 = () => {
    const navigate = useNavigate();
    const handlePresentationClick = () => {
        navigate('/presentation');
      };

  return (
    <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src="/images/canada-ville.avif"
            alt="Background"
            className="fran-image"
            style={{ borderRadius: '8px', width: '100%', height: '600px' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            Votre partenaire fiable!
          </Typography>
          <Typography variant="body1" paragraph>
            En choisissant d’intégrer YimmiLine dans votre projet de voyage, profitez d’un accompagnement expert étape par étape.
            Nos compétences sur mesure sont ajustées en fonction de votre profil et de votre projet.
          </Typography>
          <Typography variant="body1" paragraph>
            Découvrez plus en détail notre approche distinctive et notre vision de la préparation de votre envol
            <strong> vers la France, la Belgique, le Canada, l’Italie, l’Allemagne suivie de votre intégration.</strong>
          </Typography>
          <List>
            {[
              'YimmiLine pour études',
              'YimmiLine pour les paiements',
              'YimmiLine pour les transferts d’argent',
              'YimmiLine pour les recherches de logement',
              'YimmiLine pour les crédits et préfinancement',
              'YimmiLine pour les touristes et autres voyageurs',
              'YimmiLine pour les recherches de stage, de job',
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <SendIcon sx={{ color: '#FFD700' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Button
            onClick={handlePresentationClick}
            variant="contained"
            sx={{ backgroundColor: '#0047AB', color: '#fff', fontWeight: 'bold', mt: 2 }}
            size="large"
          >
           En savoir plus
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Presentation1;
