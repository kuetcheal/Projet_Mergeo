import React, { useState, useMemo } from 'react';
import ChatBot from 'react-simple-chatbot';
//import { ThemeProvider } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField, Typography, Button, Stack, Paper } from '@mui/material';
import './chatbot.css';

// Formulaire
const ContactForm = ({ triggerNextStep }) => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire :', formData);

   
    triggerNextStep(); 
  };

  return (
    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h6" gutterBottom>
        Vos informations de contact
      </Typography>
  
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Téléphone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
  
          <Box textAlign="right">
            <Button variant="contained" color="primary" type="submit">
              Envoyer
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );  
};



// Composant principal
const Chat = ({ closeChat }) => {
  const steps = useMemo(() => [
    {
      id: '1',
      message: 'Bonjour ! Que désirez-vous  ?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'voyage', label: 'Je souhaite voyager', trigger: 'destination' },
        { value: 'cours', label: ' faire des cours de langue', trigger: 'coursMenu' },
        { value: 'job', label: 'Je recherche un emploi', trigger: '4' },
        { value: 'service', label: 'J\'ai besoin d\'un service', trigger: 'serviceMenu' },
        { value: 'renseignement', label: 'Je veux des renseignements', trigger: '4' },
      ],
    },
    {
      id: '4',
      message: 'Merci pour votre intérêt ! Veuillez remplir le formulaire pour qu’un conseiller vous recontacte.',
      trigger: 'contactForm',
    },
    {
      id: 'destination',
      message: 'Quelle est votre destination ?',
      trigger: 'destinationOptions',
    },
    {
      id: 'destinationOptions',
      options: [
        { value: 'France', label: 'France', trigger: 'reasonMenuFrance' },
        { value: 'Canada', label: 'Canada', trigger: 'reasonMenuCanada' },
        { value: 'Allemagne', label: 'Allemagne', trigger: 'reasonMenuAllemagne' },
        { value: 'Belgique', label: 'Belgique', trigger: 'reasonMenuBelgique' },
      ],
    },
    {
      id: 'reasonMenuFrance',
      message: 'Quelle est la raison de votre voyage en France ?',
      trigger: 'reasonOptionsFrance',
    },
    {
      id: 'reasonOptionsFrance',
      options: [
        { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
        { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
        { value: 'affaires', label: 'Voyage d\'affaires', trigger: 'contactForm' },
        { value: 'autres', label: 'Autres raisons', trigger: 'contactForm' },
      ],
    },
    {
      id: 'reasonMenuCanada',
      message: 'Quelle est la raison de votre voyage au Canada ?',
      trigger: 'reasonOptionsCanada',
    },
    {
      id: 'reasonOptionsCanada',
      options: [
        { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
        { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
        { value: 'affaires', label: 'Immigration Canada', trigger: 'contactForm' },
        { value: 'autres', label: 'Résidence permanente', trigger: 'contactForm' },
      ],
    },
    {
      id: 'reasonMenuAllemagne',
      message: 'Quelle est la raison de votre voyage en Allemagne ?',
      trigger: 'reasonOptionsAllemagne',
    },
    {
      id: 'reasonOptionsAllemagne',
      options: [
        { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
        { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
        { value: 'affaires', label: 'Voyage d\'affaires', trigger: 'contactForm' },
        { value: 'autres', label: 'Autres raisons', trigger: 'contactForm' },
      ],
    },
    {
      id: 'reasonMenuBelgique',
      message: 'Quelle est la raison de votre voyage en Belgique ?',
      trigger: 'reasonOptionsBelgique',
    },
    {
      id: 'reasonOptionsBelgique',
      options: [
        { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
        { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
        { value: 'affaires', label: 'Voyage d\'affaires', trigger: 'contactForm' },
        { value: 'autres', label: 'Autres raisons', trigger: 'contactForm' },
      ],
    },
    {
      id: 'coursMenu',
      message: 'Quel cours de langue souhaitez-vous suivre ?',
      trigger: 'coursOptions',
    },
    {
      id: 'coursOptions',
      options: [
        { value: 'anglais', label: 'Cours d\'anglais', trigger: 'contactForm' },
        { value: 'allemand', label: 'Cours d\'allemand', trigger: 'contactForm' },
        { value: 'espagnol', label: 'Cours d\'espagnol', trigger: 'contactForm' },
      ],
    },
    {
      id: 'serviceMenu',
      message: 'Quel type de service voulez-vous ?',
      trigger: 'serviceOptions',
    },
    {
      id: 'serviceOptions',
      options: [
        { value: 'Recherche logement', label: 'Recherche logement', trigger: 'contactForm' },
        { value: 'Assurance voyage', label: 'Assurance voyage', trigger: 'contactForm' },
        { value: 'Caution Bancaire', label: 'Caution Bancaire', trigger: 'contactForm' },
        { value: 'compte Bloqué', label: 'Compte Bloqué', trigger: 'contactForm' },
      ],
    },
    {
      id: 'contactForm',
      component: <ContactForm />,
      waitAction: true, // important pour ne pas avancer automatiquement
      trigger: 'confirmation',
    },
    {
      id: 'confirmation',
      message: 'Parfait, on vous recontactera dans les brefs délais.',
      end: true,
    },
    
  ], []);

 return (
  <div className="chatbot-box">
    <ChatBot
      steps={steps}
      botAvatar="/images/receptionniste.jpg"
      userAvatar="/images/receptionniste.jpg"
      headerTitle="Votre Assistant Mobiliis"
      hideSubmitButton
    />
    <CloseIcon className="chatbot-close-icon" onClick={closeChat} />
  </div>
);
};

export default Chat;
