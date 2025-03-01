import React from 'react';
import { Box, Typography, TextField, Grid, Button, Stepper, Step, StepLabel, MenuItem } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const AviForms2 = () => {
  const navigate = useNavigate();

  const handleSecond = () => {
    navigate('/aviForms3');
  };

  const handleBack = () => {
    navigate('/aviForms1');
  };

  const steps = ['Informations de la procédure', 'Informations du compte', 'Validation'];

  return (
    <Box
      sx={{
        backgroundColor: '#0047AB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 2,
          padding: 4,
          width: '100%',
          maxWidth: '700px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#C90076', textAlign: 'center', mb: 2 }}>
          Mobiliis AVI
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666666', mb: 3 }}>
          Entrez vos informations ci-dessous pour souscrire à Mobiliis AVI.
        </Typography>
        <Typography variant="body2" sx={{ color: '#FF0000', mb: 2 }}>
          « * » indique les champs nécessaires
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={1} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label.toUpperCase()}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Form */}
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Nom *
              </Typography>
              <TextField
                fullWidth
                placeholder="Premier(s) Nom(s)"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Dernier(s) Nom(s) *
              </Typography>
              <TextField
                fullWidth
                placeholder="Dernier(s) Nom(s)"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                E-mail *
              </Typography>
              <TextField fullWidth placeholder="Votre adresse e-mail" variant="outlined" sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Téléphone *
              </Typography>
              <TextField fullWidth placeholder="Votre numéro de téléphone" variant="outlined" sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Adresse *
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth placeholder="Ville" variant="outlined" sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth placeholder="État / Province / Région" variant="outlined" sx={{ mb: 2 }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                defaultValue="Cameroun"
                variant="outlined"
                sx={{ mb: 4 }}
              >
                <MenuItem value="Cameroun">Cameroun</MenuItem>
                <MenuItem value="France">France</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Canada">Allemagne</MenuItem>
                <MenuItem value="Canada">Belgique</MenuItem>
                <MenuItem value="Canada">Espagne</MenuItem>
                <MenuItem value="Autre">Autre</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Bouton Précédent */}
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              textTransform: 'none',
              color: '#0047AB',
              borderColor: '#0047AB',
            }}
          >
            Précédent
          </Button>

          {/* Bouton Envoyer */}
          <Button
            variant="contained"
            onClick={handleSecond}
            sx={{
              textTransform: 'none',
              backgroundColor: '#0047AB',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#C90076',
              },
            }}
          >
            suivant
          </Button>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AviForms2;
