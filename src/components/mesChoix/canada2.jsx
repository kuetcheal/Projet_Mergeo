import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

const Canada2 = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const sections = [
    {
      title: "Conditions d'obtention du visa étudiant",
      content: (
        <div>
          <Typography>
            Pour faire une demande pour un permis d’études au Canada, vous devez :
          </Typography>
          <ul>
            <li>Avoir et justifier un projet d’étude cohérent ;</li>
            <li>Détenir une admission dans un établissement d’enseignement désigné ;</li>
            <li>Prouver qu’on est en mesure de financer vos études ;</li>
            <li>
              Obtenir un certificat d’acceptation du Québec (CAQ) si vous prévoyez
              fréquenter un établissement au Québec ;
            </li>
            <li>
              Assurer l’agent d’immigration de votre départ du Canada, une fois vos études
              terminées.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Travail des étudiants internationaux",
      content: (
        <Typography>
          Le permis d’études canadien vous permet de travailler en parallèle de vos
          études jusqu’à 20 heures par semaine pendant les trimestres scolaires et à temps
          plein pendant les vacances.
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="#A93D87">
        Permis d'études canadiennes
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Pour pouvoir partir et vous installer au Canada en tant qu’étudiant international,
        vous aurez besoin d’un permis d’études, connu également sous l’appellation « visa
        étudiant canadien ». Le permis d’études est obligatoire pour toute formation
        supérieure à 6 mois.
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={6}>
          {sections.map((section, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={() => toggleExpand(index)}
              sx={{
                boxShadow: 'none',
                border: 'none',
                '&::before': { display: 'none' },
                marginBottom: 1,
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === index ? (
                    <DashCircle color="white" size={20} />
                  ) : (
                    <PlusCircle color="white" size={20} />
                  )
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

        {/* Right Image Section */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/catable.jpg"
            alt="Canada Visa"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "8px",
              margin: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Canada2;
