import React from 'react';
import { Box, Typography, TextField, MenuItem, Button, Stepper, Step, StepLabel } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const AviForms1 = () => {
  const navigate=useNavigate();

  const handleNext = () => {
    console.log('Navigation vers /aviForms2');
    navigate('/aviForms2'); // Naviguer vers l'étape suivante
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
          maxWidth: '600px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#C90076', textAlign: 'center', mb: 2 }}>
          Mobiliis AVI
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666666', mb: 3 }}>
          Entrez vos informations ci-dessous pour souscrire à YimmiLine AVI.
        </Typography>
        <Typography variant="body2" sx={{ color: '#FF0000', mb: 2 }}>
          « * » indique les champs nécessaires
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={0} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label.toUpperCase()}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Form */}
        <Box component="form" noValidate autoComplete="off">
          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
            Package YimmiLine AVI Choisi *
          </Typography>
          <TextField
            select
            fullWidth
            defaultValue="YimmiLine AVI FULL OPTION"
            variant="outlined"
            sx={{ mb: 3 }}
          >
            <MenuItem value="YimmiLine AVI FULL OPTION">AVI SIMPLE</MenuItem>
            <MenuItem value="YimmiLine AVI BASIC">AVI + ASSURANCE VOYAGE</MenuItem>
            <MenuItem value="YimmiLine AVI PREMIUM">FULL PACKAGE</MenuItem>
          </TextField>

          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
            CODE PROMO/AMBASSADEUR <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>(facultatif)</span>
          </Typography>
          <TextField fullWidth variant="outlined" sx={{ mb: 4 }} />

          <Button
            variant="contained"
            fullWidth
            onClick={handleNext} // Appel de la fonction pour passer à l'étape suivante
            sx={{
              backgroundColor: '#0047AB',
              color: '#ffffff',
              fontWeight: 'bold',
              padding: '10px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#C90076',
              },
            }}
          >
            Suivant
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AviForms1;
