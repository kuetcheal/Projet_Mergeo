import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import Temoignages from '../temoignages/temoignage';
import Choix from '../mesChoix/choix';
import Sponsor from './sponsor';
import Brochure1 from './brochure1';
import Langue from '../langues/langue';
import Service1 from '../services/service1';
import Presentation1 from '../mobiliis/presentation1';
import './medecin.css';

const Medecin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const handleTemoignageClick = () => {
    navigate('/toutTemoignages');
  };

  // Gestion des images pour l'animation
  const images = ["/images/bureau.jpeg", "/images/passport.jpg", "/images/catable.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change l'image toutes les 2 secondes
    return () => clearInterval(interval); // Nettoyage à la fin
  }, [images.length]);

  return (
    <Box className="mede-container">


      <div className="flou">
        {/* Image de fond */}
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="slideshow-image"
        />

        {/* Overlay sombre */}
        <div className="overlay"></div>

        {/* Contenu texte centré */}
        <div className="backdrop-content">
          <h2 className="titre">{t('accueil.title')}</h2>
          <p className="descrire">{t('accueil.description')}</p>
          <button className="green-button" onClick={handleContactClick}>
            NOUS CONTACTER
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>

      <div className="grand-bloc">
        <div className="choisir">
          <Choix />
        </div>

        <div className="service1">
          <Presentation1 />
        </div>

        <div className="service1">
          <Service1 />
        </div>
        <div className="temoignage">
          <Temoignages />
        </div>
        <div className="toute-temoignage">
          <button className="greene-button" onClick={handleTemoignageClick}>
            Lire tous les témoignages
          </button>
        </div>
        <div className="langue">
          <Langue />
        </div><br /><br />

        <div className="sponsor">
          <Sponsor />
        </div> <br />
        <div className="sponsor">
          <Brochure1 />
        </div>
      </div>
    </Box>
  );
};

export default Medecin;
