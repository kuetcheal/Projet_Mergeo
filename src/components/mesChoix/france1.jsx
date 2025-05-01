import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';

const France1 = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const sections = [
    {
      title: "Système d’enseignement français",
      content: (
        <div>
          <Typography>
            La particularité du système d’enseignement supérieur est que celui-ci se compose de nombreux établissements de qualité offrant une grande diversité de formation :
          </Typography>
          <ul>
            <li>72 Universités couvrant l’ensemble des niveaux et disciplines.</li>
            <li>Plus de 220 Grandes écoles accessibles après le baccalauréat ou après 2 années de classes préparatoires (CPGE).</li>
            <li>Plus de 3000 écoles et instituts spécialisés offrant des formations courtes à vocation professionnelle.</li>
          </ul>
          <Typography>
            Les formations de l’enseignement supérieur universitaire sont découpées en 3 cycles :
          </Typography>
          <ul>
            <li><strong>Premier Cycle :</strong> Préparation en 3 ans pour une licence ou un Bachelor universitaire de technologie.</li>
            <li><strong>Deuxième Cycle :</strong> Dure 2 ans pour l’obtention d’un master.</li>
            <li><strong>Troisième Cycle :</strong> Dure 3 ans et correspond à la formation doctorale.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Diplômes en France",
      content: (
        <Typography>
          Les diplômes en France sont reconnus mondialement et offrent des opportunités variées dans différents domaines.
        </Typography>
      ),
    },
    {
      title: "Admission",
      content: (
        <Typography>
          Découvrez le processus d’admission en France pour les étudiants internationaux, y compris les exigences et les étapes clés.
        </Typography>
      ),
    },
    {
      title: "Exigences linguistiques",
      content: (
        <Typography>
          La maîtrise de la langue française ou anglaise est généralement requise pour étudier en France. Les tests comme le DELF/DALF ou le TOEFL sont souvent nécessaires.
        </Typography>
      ),
    },
    {
      title: "Coût des études en France",
      content: (
        <Typography>
          Le coût des études dans les établissements publics français reste toujours abordable malgré la hausse appliquée en 2019. Il faut donc prévoir :
          <ul>
            <li>2770 € pour la licence, licence professionnelle et DUT.</li>
            <li>3770 € pour le Master.</li>
            <li>380 € pour le Doctorat (Phd).</li>
            <li>Pour les écoles privées, une moyenne de 8000€ est à prévoir pour une année d’études.</li>
          </ul>
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ padding: "20px 20px", backgroundColor: "#FAFAFA" }}>
      <Typography variant="h5" fontWeight="bold" align="center" gutterBottom color='#A93D87'>
        Choisissez votre programme
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center" mb={4}>
        En France, les possibilités sont infinies ! Découvrez les possibilités qui s’offrent aux étudiants internationaux.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/etudiantFrance.webp"
            alt="Students in classroom"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>

        {/* Accordions Section */}
        <Grid item xs={12} md={6}>
          {sections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                boxShadow: 'none',
                border: 'none',
                mb: 1,
                '&::before': { display: 'none' }
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index
                    ? <DashCircle color="white" size={20} />
                    : <PlusCircle color="white" size={20} />
                }
                sx={{
                  bgcolor: '#0056b3',
                  color: 'white',
                  padding: '12px 16px',
                  fontWeight: 'bold',
                  '& .MuiAccordionSummary-content': {
                    margin: 0
                  }
                }}
              >
                <Typography fontWeight={600}>{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: '#f0eef4',
                  padding: 2,
                  color: '#2b2b2b',
                  fontSize: '0.95rem',
                }}
              >
                {section.content}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default France1;
