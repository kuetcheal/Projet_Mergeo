import React from 'react';
import { useNavigate } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './fixeFooter.css';

const FixeFooter = () => {
  const navigate = useNavigate();
  const phoneNumber = '+237655196254';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleBrochure = () => {
    navigate('/brochure');
  };

  return (
    <div className="fixe-button">
      <button className="fixe-btn fixe-btn-call" onClick={handleCall}>
        <CallIcon className="fixe-btn-icon" />
        <span>+237 6 55 19 62 54</span>
      </button>

      <button className="fixe-btn fixe-btn-download" onClick={handleBrochure}>
        <FileDownloadIcon className="fixe-btn-icon" />
        <span>Télécharger la brochure</span>
      </button>
    </div>
  );
};

export default FixeFooter;
