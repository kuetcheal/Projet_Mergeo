import React from 'react';
import './logement.css';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Logement = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  const features = [
    { icon: <PersonAddIcon fontSize="large" />, title: "TCF" },
    { icon: <AssignmentIcon fontSize="large" />, title: "Des résidences étudiantes partenaires" },
    { icon: <MapIcon fontSize="large" />, title: "Une garantie locative gratuite" },
    { icon: <ApartmentIcon fontSize="large" />, title: " DELF-DALF" },
  ];
  return (
    <div className="temoignages-page">
      <div className="anglais-section">
        <img src="/images/Residence.jpg" alt="Background"
          style={{ height: '450px' }}
          className="anglais-image" />
        <div className="breadcrumb">
          Accueil »
          <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
            Trouver votre futur logement
          </p>

          <button className="green-button" onClick={handleContactClick}>
            RESERVEZ VOTRE RENDEZ-VOUS
            <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '35px' }} />
          </button>
        </div>
      </div>
      <div className="content-section">
        <div className="overlay">
          <h1>Trouver un logement étudiant avant mon arrivée, une vraie aubaine !</h1> <br />
          {/* Ajout d'espacement au-dessus de la grille */}
          <Box sx={{ marginTop: "30px", backgroundColor: "#f7f7f7", padding: "20px 10px", borderRadius: "8px" }}>
            <Grid container spacing={2} justifyContent="center">
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{
                    textAlign: "center",
                    borderRight: index !== features.length - 1 ? "1px solid #E7C56F" : "none",
                    padding: "10px 20px",
                  }}
                >
                  <Box sx={{ color: "#4A306D", marginBottom: "10px" }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#4A306D" }}
                  >
                    {feature.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

        </div>
        <h3 style={{ color: '#004080', fontSize: '20px' }}>Le Canada se classe régulièrement parmi les meilleures destinations d’études tant pour le niveau de vie pour lequel se classe au premier rang mondial qu’au niveau de
          la qualité des études reconnues à l’échelle internationale. Il accueille chaque année des milliers d’étudiants internationaux.</h3> <br />


        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '2rem' }}>
          {/* Header */}
          <header>
            <div className="allemand-header">
              <div className="allemand-DSH">
                <h1 style={{ fontSize: '2rem', color: '#A93D87' }}>
                  <strong>Qu’est-ce que le TEF Canada ?</strong>
                </h1>
                <h4>Que vous soyez étudiant ou professionnel, si vous envisagez de partir étudier ou travailler au Canada,
                  il est fort probable que vous ayez déjà entendu parler du TEF Canada. Ce Test d'Évaluation de Français permet d'évaluer votre maîtrise de la langue française,
                  que ce soit dans un contexte académique, pour les étudiants souhaitant intégrer une université,
                  ou dans un cadre professionnel, pour ceux cherchant à intégrer une entreprise.</h4>
                <p>Le test évalue votre niveau de français en se basant sur l'échelle NCLC, qui correspond aux Niveaux de Compétence Linguistique Canadiens</p>
                <p>
                  Lorsque vous envisagez de passer le test TEF, les modalités des épreuves varient en fonction de votre objectif. Si vous souhaitez immigrer au Canada,
                  vous serez soumis à une épreuve de compréhension orale et écrite, ainsi qu'à une épreuve d'expression orale et écrite.
                  Pour une demande de citoyenneté, seule une épreuve de compréhension orale et d'expression orale est requise.
                  Le test peut être réalisé soit sur ordinateur, soit sur papier, selon le centre d'examen
                </p>
              
                <ul>
                  <li>La compréhension écrite dure 60 minutes :</li>
                  <li>La compréhension orale dure 40 minutes :</li>
                  <li>L’expression écrite dure 60 minutes :</li>
                  <li>L’expression orale dure 15 minutes :</li>
                </ul>
                <p> Vous recevrez vos résultats par courrier électronique dans un délai de 4 à 6 semaines après avoir passé le test. Vous obtiendrez une note pour chaque épreuve ainsi
                  qu'une note globale allant de 0+ à 7, correspondant à l'échelle du Cadre européen commun de référence pour les langues (CECR).
                  Votre certificat sera également envoyé par courrier électronique, bien qu'il puisse prendre un peu plus de temps à arriver.
                </p>
              </div>
              <div className='image-cours'>
                <img
                  src="/images/resi.jpg"
                  alt="Cours d'Allemand"
                  className='image1-cours'

                />
              </div>
            </div>
            <div className="allemand-header">
              <div className="allemand-DSH">
                <h1 style={{ fontSize: '2rem', color: '#A93D87' }}>
                Des résidences étudiantes partenaires
                </h1>
                <strong> Le TCF (test de connaissance en français) </strong> est un test de vérification du niveau de compétence en langue française d’un candidat à un instant « T ». 
                Il donne lieu à la délivrance d’une attestation de niveau valable 2 ans.

                <p> 1.<strong>La compréhension écrite, évaluée sur une heure,</strong> avec l'étude de trois ensembles documentaires : des plaquettes concernant l'enseignement supérieur et la vie étudiante ; un article de journal de 500 mots environ ; et un extrait de type scientifique, supérieur à 500 mots.</p>
                <p> 2.<strong>La compréhension orale, pendant 40 minutes,</strong> se déroule en trois volets : écoute d'une discussion banale ; compréhension d'un colloque de chercheurs ; et audition d'un cours universitaire.</p>
                <p>3.<strong>L'expression à l'écrit, d'une heure,</strong> avec l'écriture d'un texte bien construit sur un sujet donné, puis la nécessité de prendre position sur une question, avec force arguments.</p>
                <p>4.<strong>L'oral, via un ordinateur, d'une grosse demi-heure (35 minutes le plus souvent)</strong> </p>
                <p>
                  Les écoles supérieures décident elles-mêmes du niveau qui doit être atteint pour être admis dans un programme.
                  Certaines universités/écoles supérieures demandent  <strong>le niveau TDN5</strong> , pour d'autres,  <strong>le niveau TDN4</strong> suffit.
                </p>
              </div>
              <div className='image-cours'>
                <img
                  src="/images/Residence-France.jpg"
                  alt="Cours d'Allemand"
                  className='image2-cours'
                />
              </div>
            </div>
          </header>


          {/* Section: Description */}
          <section>
          <h1 style={{ fontSize: '2rem', color: '#A93D87' }}>
          Les partenaires immobiliers de Mobiliis
                </h1>
           
            <div className="logement">
              <img src="/images/location.png" alt="" className='loca'/>
              <img src="/images/location1.jpg" alt="" className='loca'/>
              <img src="/images/location2.png" alt="" className='loca2'/>
              <img src="/images/Amber.png" alt="" className='loca3'/>
            </div>
            <div className="logement2">
              <img src="/images/Amber.png" alt="" className='loca3'/>
              <img src="/images/studappart.png" alt="" className='loca1'/>
              <img src="/images/Amber.png" alt="" className='loca3'/>
              <img src="/images/studappart.png" alt="" className='loca1'/>
            </div>
            <p>
              Nous vous offrons plusieurs options pour passer le TCF, comme le TCF TP (tous publics), TCF ANF
              (nationalité française), ou encore le TCF Canada. Nos formateurs qualifiés vous accompagnent tout au long du processus.
            </p>
          </section>

          {/* Section: Préparation */}
          <section>
            <h2>Pourquoi choisir notre centre ?</h2>
            <ul>
              <li>Des sessions de préparation adaptées à vos besoins.</li>
              <li>Une plateforme d'e-learning pour vous entraîner efficacement.</li>
              <li>Un accompagnement individualisé pour assurer votre réussite.</li>
            </ul>
          </section>

          {/* Section: Inscription */}
          <section>
            <h2>Vos inscriptions au TCF</h2>
            <p>
              L'inscription se fait facilement en ligne. Vous recevrez un e-mail de confirmation ainsi que les détails
              nécessaires pour votre session. Pour commencer, cliquez ici :{' '}
              <a href="https://www.exemple.com/inscription" target="_blank" rel="noreferrer">
                Inscrivez-vous maintenant
              </a>
            </p>
          </section>

          {/* Section: Recommandations */}
          <section>
            <h2>Recommandé pour :</h2>
            <ul>
              <li>Les demandes d'admission universitaire en France.</li>
              <li>Les démarches d'immigration au Canada.</li>
              <li>La naturalisation française.</li>
            </ul>
          </section>

          {/* Footer */}
          <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
            <p>
              <strong>Contactez-nous</strong> pour toute question sur les prochaines sessions ou pour un accompagnement personnalisé.
            </p>
          </footer>
        </div>


        <button className="green-button" style={{ marginLeft: '60px' }}>
          Je postule
        </button>
      </div>
    </div>
  );
};

export default Logement;
