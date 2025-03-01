import React from 'react';
import { Box, Button, Typography, Divider, Stepper, Step, StepLabel } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const AviForms3 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/aviForms2');
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
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0047AB', textAlign: 'center', mb: 2 }}>
        Mobiliis AVI
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#666666', mb: 3 }}>
          Entrez vos informations ci-dessous pour souscrire à Mobiliis AVI.
        </Typography>
        <Typography variant="body2" sx={{ color: '#FF0000', mb: 2 }}>
          « * » indique les champs nécessaires
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={2} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label.toUpperCase()}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Contenu spécifique à l'étape 3 */}
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
          C'est parti !
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
          Vérifiez vos informations et cliquez sur le bouton <strong>"Envoyer"</strong> ci-dessous.
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#666666', mb: 2 }}>
          Merci d'avoir souscrit à notre service AVI.
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#666666', mb: 4 }}>
          Vous recevrez un E-mail vous notifiant de l’avancé de votre dossier.
        </Typography>

        {/* Boutons de navigation */}
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
            // onClick={handleSubmit}
            sx={{
              textTransform: 'none',
              backgroundColor: '#0047AB',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#003680',
              },
            }}
          >
            Envoyer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AviForms3;
