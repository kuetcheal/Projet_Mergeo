import React from 'react';
import './offreEmploi.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';

const OffreEmploi = () => {
  return (
    <div className="entre">

      <div className="anglais-section">
        {/* Image de fond */}
        <img
          src="/images/quebec.jpg"
          alt="Background"
          className="anglais-image"
        />

        {/* Overlay sombre */}
        <div className="overlay"></div>

        {/* Contenu texte centré */}
        <div className="breadcrumb-content">
          <p className="breadcrumb-title">
          Offres d'emplois
          </p>
          <div className="underline"></div>

        </div>
      </div>
 
    </div>
  );
};

export default OffreEmploi;
