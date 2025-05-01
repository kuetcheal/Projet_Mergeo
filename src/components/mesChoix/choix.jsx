import React from 'react';
import { Box, Button, Typography, Card, CardMedia, Grid, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const destinations = [
  {
    name: 'CANADA',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80',
    path: '/canada'
  },
  {
    name: 'FRANCE',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=60',
    path: '/france'
  },
  {
    name: 'ALLEMAGNE',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60',
    path: '/allemagne'
  },
];

const CardHover = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 410,
  height: 250,
  borderRadius: 10,
  overflow: 'hidden',
  transition: 'transform 0.5s ease',
  '&:hover .overlay-text': {
    opacity: 0,
    visibility: 'hidden',
  },
  '&:hover .card-image': {
    transform: 'rotateY(40deg)',
    opacity: 0,
  },
  '&:hover .hover-button': {
    opacity: 1,
    visibility: 'visible',
  }
}));

const OverlayText = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
  zIndex: 2,
  transition: 'opacity 0.3s ease-in-out',
}));

const HoverButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.4s ease, transform 0.4s ease',
  opacity: 0,
  visibility: 'hidden',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  zIndex: 3,
  padding: '10px 25px',
  borderRadius: 30,
  fontWeight: 'bold',
  fontSize: '0.9rem'
}));

const DestinationGrid = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, md: 4 },}}>
      <Typography variant="h4" textAlign="center" fontWeight={600} mb={4} color="#C90076">
      Nos principales destinations
      </Typography>
      <Typography variant="h5" textAlign="center" fontWeight={600} mb={4} color="black">
        Nous vous ouvrons un monde d'opportunités et d'expériences pour des destinations très attractives pour 
        vos études, tourisme, résidence permanente !
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {destinations.map((dest, index) => (
          <Grid item key={index}>
            <CardHover>
              <CardActionArea sx={{ width: '100%', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={dest.image}
                  alt={dest.name}
                  className="card-image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                  }}
                />
                <OverlayText className="overlay-text">{dest.name}</OverlayText>
              </CardActionArea>
              <HoverButton className="hover-button" onClick={() => navigate(dest.path)}>
                ÉTUDIER EN {dest.name}
              </HoverButton>
            </CardHover>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/destinations')}
          sx={{ bgcolor: '#007dc4', color: 'white', fontWeight: 'bold', mt: 4 }}
          endIcon={<SchoolIcon sx={{ color: 'orange' }} />}
        >
          DÉCOUVREZ TOUTES NOS DESTINATIONS D'ÉTUDES
        </Button>
      </Box>
    </Box>
  );
};

export default DestinationGrid;
