import CallIcon from '@mui/icons-material/Call';
import React, { useState, useEffect } from 'react';

const CallButton = () => {
  const phoneNumber = "+237233412614"; 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);

 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    button: {
      width: '50px',
      height: '50px',
      backgroundColor: '#004080',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      textDecoration: 'none',
      cursor: 'pointer',  
      position: 'fixed', 
      top: '220px',
      right: '20px',  
      zIndex: 1000, 
    },
    icon: {
      fontSize: '24px',
      zIndex: 1000,
    },
  };

  // Si `isMobile` est vrai, ne pas afficher le bouton
  if (isMobile) {
    return null;
  }

  return (
    <a href={`tel:${phoneNumber}`} style={styles.button}>
      <CallIcon style={styles.icon} />
    </a>
  );
};

export default CallButton;
