import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import './chatbot.css';

// Définir un thème personnalisé
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#A93D87',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#007dc4',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Les étapes de la conversation
const steps = [
  {
    id: '1',
    message: 'Bonjour ! Que désirez-vous aujourd’hui ?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'voyage', label: 'Je souhaite voyager', trigger: 'destination' },
      { value: 'cours', label: 'Je souhaite faire des cours de langue', trigger: 'coursMenu' },
      { value: 'job', label: 'Je recherche un emploi', trigger: '4' },
      { value: 'service', label: 'J\'ai besoin d\'un service', trigger: 'serviceMenu' },
      { value: 'renseignement', label: 'Je veux des renseignements', trigger: '4' },
    ],
  },

  // Menu Destination
  {
    id: 'destination',
    message: 'Quelle est votre destination ?',
    trigger: 'destinationOptions',
  },
  {
    id: 'destinationOptions',
    options: [
      { value: 'France', label: 'France', trigger: '5' },
      { value: 'Canada', label: 'Canada', trigger: '5' },
      { value: 'Allemagne', label: 'Allemagne', trigger: '5' },
      { value: 'Belgique', label: 'Belgique', trigger: '5' },
    ],
  },

  // Menu Cours de Langue
  {
    id: 'coursMenu',
    message: 'Quel cours de langue souhaitez-vous suivre ?',
    trigger: 'coursOptions',
  },
  {
    id: 'coursOptions',
    options: [
      { value: 'anglais', label: 'Cours d\'anglais', trigger: '5' },
      { value: 'allemand', label: 'Cours d\'allemand', trigger: '5' },
      { value: 'espagnol', label: 'Cours d\'espagnol', trigger: '5' },
    ],
  },

  // Menu Service
  {
    id: 'serviceMenu',
    message: 'Quel type de service voulez-vous ?',
    trigger: 'serviceOptions',
  },
  {
    id: 'serviceOptions',
    options: [
      { value: 'Recherche logement', label: 'Recherche logement', trigger: '5' },
      { value: 'Assurance voyage', label: 'Assurance voyage', trigger: '5' },
      { value: 'Caution Bancaire', label: 'Caution Bancaire', trigger: '5' },
      { value: 'compte Bloqué', label: 'compte Bloqué', trigger: '5' },
    ],
  },

  // Étapes suivantes
  {
    id: '3',
    message: 'Quel est votre question concernant le voyage ?',
    trigger: '5',
  },
  {
    id: '4',
    message: 'Je suis là pour vous aider ! Quelle est votre question ?',
    trigger: '5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'Pouvez-vous me donner plus de détails sur "{previousValue}" ?',
    trigger: '7',
  },
  {
    id: '7',
    user: true,
    trigger: '8',
  },
  {
    id: '8',
    message: 'Merci pour ces informations concernant "{previousValue}", je vais revenir vers vous bientôt.',
    end: true,
  },
];

 console.log('ChatBot Steps chargés', steps);


const Chat = ({ closeChat }) => {
  return (
    <div className="chatbot-container">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="Assitance Mobiliis"
          hideSubmitButton
        />
      </ThemeProvider>
      <CloseIcon className="chatbot-close-icon" onClick={closeChat} />
    </div>
  );
};

export default Chat;