import React, { useState } from 'react';
import {
  Box, Grid, TextField, Typography, Button, Paper, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', telephone: '', ville: '', pays: '', message: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 5, maxWidth: '1300px', mx: 'auto' }}>
      {/* Bloc Infos Contact - FOND COLORÉ */}
      <Box sx={{ bgcolor: '#004080',  color: 'white', borderRadius: 2, p: 4, mb: 6, }}>
        <Grid container spacing={3} justifyContent="center" textAlign="center">
          <Grid item xs={12} md={4}>
            <PlaceIcon sx={{ fontSize: 50, color: '#C90076' }} />
            <Typography fontWeight="bold">Ndogbong-Douala Rue du commissariat 10ᵉ</Typography>
            <Typography fontWeight="bold">Horaires: lundi-vendredi 08h-17h30</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CallIcon sx={{ fontSize: 50, color: '#C90076' }} />
            <Typography fontWeight="bold">+237 675 07 00 50 / +237 6 55 19 62 54</Typography>
            <Typography fontWeight="bold">+33 7 58 10 31 17</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MailOutlineIcon sx={{ fontSize: 50, color: '#C90076' }} />
            <Typography fontWeight="bold">mobiliis03@gmail.com</Typography>
            <Typography fontWeight="bold">www.mobiliis.com</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Image + Formulaire */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* 👉 Image à gauche */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/canada-ville.avif"
            alt="Background"
            style={{
              borderRadius: '8px',
              width: '100%',
              height: '600px',
              objectFit: 'cover'
            }}
          />
        </Grid>

        {/* 📝 Formulaire à droite */}
        <Grid item xs={12} md={6}>
          <Box component={Paper} elevation={4} sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ color: '#A93D87' }} mb={2} textAlign="center">Nous Contacter</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Nom *" fullWidth name="nom" value={formData.nom} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Prénom *" fullWidth name="prenom" value={formData.prenom} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email *" fullWidth name="email" value={formData.email} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Téléphone *" fullWidth name="telephone" value={formData.telephone} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Ville *" fullWidth name="ville" value={formData.ville} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Pays *" fullWidth name="pays" value={formData.pays} onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message *"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{
                      bgcolor: '#A93D87',
                      '&:hover': { bgcolor: '#C90076' },
                      fontWeight: 'bold'
                    }}
                  >
                    ENVOYER MESSAGE
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary" mt={3}>
                    Les informations recueillies font l’objet d’un traitement informatique destiné aux opérations de transmission des informations
                    et documentations sollicitées. Les destinataires des données sont les chargés de la communication et du recrutement et le service commercial.
                    Vos données sont conservées dans des conditions propres à en assurer leur sécurité et
                    confidentialité pendant trois ans à compter de leur collecte ou de votre dernière correspondance avec nous.
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
