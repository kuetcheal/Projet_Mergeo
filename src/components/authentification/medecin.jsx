import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
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

const Medecin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const handleTemoignageClick = () => {
    navigate('/toutTemoignages');
  };

  const images = ["/images/bureau.jpeg", "/images/passport.jpg", "/images/catable.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%" bgcolor="white">
      {/* Section image animée */}
      <Box position="relative" height={520} overflow="hidden">
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt="Slideshow"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out',
            opacity: fade ? 1 : 0,
            filter: fade ? 'blur(0px)' : 'blur(5px)',
            zIndex: 0,
          }}
        />
        <Box position="absolute" top={0} left={0} width="100%" height="100%" bgcolor="rgba(0,0,0,0.5)" zIndex={1} />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', zIndex: 2 }}
        >
          <Typography variant="h2" fontWeight="bold" color="#A93D87" mb={2}>
            {t('accueil.title')}
          </Typography>
          <Typography variant="h4" fontStyle="italic" color="whitesmoke" mb={3}>
            {t('accueil.description')}
          </Typography>
          <Button
            variant="contained"
            onClick={handleContactClick}
            endIcon={<ChevronRightIcon />}
            sx={{
              bgcolor: '#007bff',
              '&:hover': { bgcolor: '#A93D87' },
              fontSize: 18,
              fontWeight: 'bold',
              px: 3,
              py: 1,
            }}
          >
            NOUS CONTACTER
          </Button>
        </Box>
      </Box>

      <Container maxWidth="1100" sx={{ bgcolor: 'white' }}>
        <Box my={4}><Choix /></Box>
        <Box my={4}><Presentation1 /></Box>
        <Box my={4}><Service1 /></Box>
        <Box my={4}><Temoignages /></Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            onClick={handleTemoignageClick}
            sx={{
              backgroundColor: '#1976D2',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              width: 250,
              height: 50,
              '&:hover': {
                backgroundColor: '#A93D87'
              }
            }}
          >
            Lire tous les témoignages
          </Button>
        </Box>

        <Box my={6}><Langue /></Box>
        <Box my={4}><Sponsor /></Box>
        <Box my={4}><Brochure1 /></Box>
      </Container>
    </Box>
  );
};

export default Medecin;
