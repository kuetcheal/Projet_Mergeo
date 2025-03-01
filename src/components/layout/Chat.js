import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import './chatbot.css';


// 1. Thème personnalisé pour le chatbot
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


// 2. Composant Formulaire de contact
const ContactForm = ({ triggerNextStep }) => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Données du formulaire:', formData); // Affiche les données dans la console
    triggerNextStep(); // Déclenche l'étape suivante
  };

  return (
    <div style={{ width: '100%' }}>
      <h4>Vos informations de contact</h4>
      <form>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
    </div>
  );
};


// 3. Étapes du chatbot
const steps = [
  // Menu principal
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

  // Destination
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

  // Raisons par destination
  {
    id: 'reasonMenuFrance',
    message: 'Quelle est la raison de votre voyage en France ?',
    trigger: 'reasonOptionsFrance',
  },
  {
    id: 'reasonMenuCanada',
    message: 'Quelle est la raison de votre voyage au Canada ?',
    trigger: 'reasonOptionsCanada',
  },
  {
    id: 'reasonMenuAllemagne',
    message: 'Quelle est la raison de votre voyage en Allemagne ?',
    trigger: 'reasonOptionsAllemagne',
  },
  {
    id: 'reasonMenuBelgique',
    message: 'Quelle est la raison de votre voyage en Belgique ?',
    trigger: 'reasonOptionsBelgique',
  },

  // Options des raisons
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
    id: 'reasonOptionsCanada',
    options: [
      { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
      { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
      { value: 'affaires', label: 'Immigration Canada', trigger: 'contactForm' },
      { value: 'autres', label: 'Résidence permanente', trigger: 'contactForm' },
    ],
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
    id: 'reasonOptionsBelgique',
    options: [
      { value: 'etudes', label: 'Pour mes études', trigger: 'contactForm' },
      { value: 'tourisme', label: 'Tourisme', trigger: 'contactForm' },
      { value: 'affaires', label: 'Voyage d\'affaires', trigger: 'contactForm' },
      { value: 'autres', label: 'Autres raisons', trigger: 'contactForm' },
    ],
  },

  // Formulaire de contact
  {
    id: 'contactForm',
    component: <ContactForm />,
    trigger: 'confirmation',
  },

  // Confirmation
  {
    id: 'confirmation',
    message: 'Parfait, on vous recontactera dans les brefs délais.',
    end: true,
  },

  // Cours de langue
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

  // Services
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
      { value: 'compte Bloqué', label: 'Compte Bloqué', trigger: '5' },
    ],
  },
];


// 4. Composant principal du chatbot
const Chat = ({ closeChat }) => {
  return (
    <div className="chatbot-container">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="Assistance Mobiliis"
          hideSubmitButton
        />
      </ThemeProvider>
      <CloseIcon className="chatbot-close-icon" onClick={closeChat} />
    </div>
  );
};

export default Chat;
