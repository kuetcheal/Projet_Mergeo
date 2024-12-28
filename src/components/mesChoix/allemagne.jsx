import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './allemagne.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Allemagne = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };
    return (
        <div className="entre">

            <div className="Allemand-section">
                {/* Image de fond */}
                <img
                    src="/images/quebec.jpg"
                    alt="Background"
                    className="Allemand-image"
                />

                {/* Overlay sombre */}
                <div className="overlayallemagne"></div>

                {/* Contenu texte centré */}
                <div className="breadcrumb-allemagne">
                    <p className="breadcrumb-title">
                        Resider et étudier en Allemagne
                    </p>
                    <div className="underline"></div>
                    <button className="green-button" onClick={handleContactClick}>
                        NOUS CONTACTER
                        <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Allemagne;