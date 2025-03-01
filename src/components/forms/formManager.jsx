import React, { useState } from 'react';
import AviForms1 from './aviForms1';

import AviForms2 from './aviForms2';
import AviForms3 from './aviForms3';

const FormManager = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Fonction pour aller à l'étape suivante
  const handleNext = () => {
    console.log('handleNext appelé'); // Vérification dans la console
    setActiveStep((prevStep) => prevStep + 1);
  };

  // Fonction pour revenir à l'étape précédente
  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = () => {
    alert('Formulaire soumis avec succès !');
    // Ajoutez ici votre logique de soumission (ex. appel API)
  };

  // Définition des étapes
  const steps = [
    () => <AviForms1 handleNext={handleNext} />,
    () => <AviForms2 handleNext={handleNext} handleBack={handleBack} />,
    () => <AviForms3 handleBack={handleBack} handleSubmit={handleSubmit} />,
  ];
  

  console.log('activeStep:', activeStep);


  return <div>{steps[activeStep]()}</div>;

};

export default FormManager;
