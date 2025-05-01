import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './brochure.css';

export default function BrochureButton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/brochure');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <button className="floating-button" onClick={handleClick}>
          <FileDownloadIcon className="floating-icon" />
          <span className="floating-label">Brochure</span>
        </button>
      )}
    </>
  );
}
