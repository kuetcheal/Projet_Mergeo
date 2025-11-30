import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FaceIcon from '@mui/icons-material/Face';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './coaching.css';

const Coaching = () => {
  const reasons = [
    'S’affirmer et trouver son équilibre personnel grâce à une meilleure connaissance de soi-même ',
    'Identifier et comprendre ses propres forces, ses faiblesses, ses intérêts, ses aptitudes, ses motivations et ses valeurs',
    'Avoir une vision plus claire de l’ensemble des options (Filières, formations, métiers… etc.) qui s’offrent à lui',
    'Choisir son métier à son image dans un secteur d’activité porteur avec des débouchés professionnels avérés',
    'Choisir une formation ou un environnement d’études favorisant son épanouissement et donc sa réussite',
    'Réduire le stress et l’anxiété associés à la prise de décision',
    'Se sentir plus confiant(e) dans ses choix d’orientation scolaire et professionnelle',
    'Mise en œuvre d’un plan d’action pour atteindre ses objectifs personnels, académiques ou professionnels',
  ];

  return (
    <div className="entretien">
      {/* HERO */}
      <div className="anglaise-sectione">
        <img
          src="/images/quebec.jpg"
          alt="Background"
          className="anglais-image"
        />
        <div className="overlay" />

        <div className="breadcrumb-content">
          <p className="breadcrumb-orientation">Orientation scolaire</p>
          <div className="underline" />
        </div>
      </div>

      {/* CONTENU */}
      <div className="contenu">
        {/* SECTION 1 : POURQUOI */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: '#C90076', fontWeight: 'bold' }}
          >
            Pourquoi Faire Un Bilan D’Orientation Scolaire ?
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: 16, md: 18 },
              textAlign: { xs: 'justify', md: 'justify' },
            }}
          >
            Complexité croissante de l’offre de formation, des passerelles
            multiples, des métiers émergents et des secteurs en crise…,
            le bilan d’orientation peut vous éviter une erreur coûteuse
            d’orientation ou encore la frustration d’une réorientation tardive.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: 16, md: 18 },
              textAlign: { xs: 'justify', md: 'justify' },
              mb: 2,
            }}
          >
            <strong>
              Le{' '}
              <span style={{ fontWeight: 'bold', color: '#000080' }}>
                bilan d’orientation scolaire
              </span>
            </strong>{' '}
            constitue un outil très précieux qui permet à votre jeune (
            <strong>collégien, lycéen</strong> ou <strong>étudiant</strong>) de :
          </Typography>

          <Box component="ul" sx={{ pl: 0, mt: 1 }}>
            {reasons.map((reason, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '10px',
                  listStyle: 'none',
                }}
              >
                <ThumbUpIcon
                  sx={{ color: '#C90076', mr: 1.5, mt: '2px', fontSize: 20 }}
                />
                <Typography
                  sx={{ fontSize: { xs: 15, md: 18 }, textAlign: 'justify' }}
                >
                  {reason}
                </Typography>
              </li>
            ))}
          </Box>
        </Box>

        {/* SECTION 2 : PUBLIC CONCERNÉ */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: '#C90076', fontWeight: 'bold' }}
          >
            Pour qui est destiné un bilan d&apos;orientation ?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: 16, md: 18 },
              px: { xs: 1, md: 6 },
            }}
          >
            Tout jeune indécis ou ayant besoin d’être accompagné dans ses
            démarches d’orientation (ou de réorientation) scolaire et
            professionnelle !
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 3 }}
            className="grid"
          >
            <Grid item xs={12} sm={4} align="center">
              <Avatar
                sx={{
                  bgcolor: '#ffcc80',
                  width: 70,
                  height: 70,
                  mb: 1,
                }}
              >
                <SchoolIcon fontSize="medium" />
              </Avatar>
              <Typography variant="h6" sx={{ fontSize: { xs: 16, md: 18 } }}>
                Collégiens
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Avatar
                sx={{
                  bgcolor: '#81d4fa',
                  width: 70,
                  height: 70,
                  mb: 1,
                }}
              >
                <PeopleIcon fontSize="medium" />
              </Avatar>
              <Typography variant="h6" sx={{ fontSize: { xs: 16, md: 18 } }}>
                Lycéens
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <Avatar
                sx={{
                  bgcolor: '#a5d6a7',
                  width: 70,
                  height: 70,
                  mb: 1,
                }}
              >
                <FaceIcon fontSize="medium" />
              </Avatar>
              <Typography variant="h6" sx={{ fontSize: { xs: 16, md: 18 } }}>
                Étudiants
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* SECTION 3 : DÉMARCHE (PHASES) */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: '#C90076', fontWeight: 'bold' }}
          >
            La Démarche Du Bilan D’Orientation &quot;Mobiliis&quot;
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {/* Phase 1 */}
            <Grid item xs={12}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  p: { xs: 2, md: 3 },
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                }}
              >
                <Box
                  component="img"
                  src="/images/bureau-table.png"
                  alt="Phase 1"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    borderRadius: 2,
                    mb: { xs: 2, md: 0 },
                    mr: { md: 4 },
                    maxHeight: 280,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: 18, md: 20 } }}
                  >
                    1. La Démarche Du Bilan D’Orientation &quot;Mobiliis&quot;
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Identification des besoins et des attentes de votre jeune
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Compréhension du profil et du contexte dans lequel il
                    évolue
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Présentation du déroulement de la prestation
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Détermination de la démarche d’accompagnement
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Phase 2 */}
            <Grid item xs={12}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  p: { xs: 2, md: 3 },
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                }}
              >
                <CardContent sx={{ p: 0, mr: { md: 4 } }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: 18, md: 20 } }}
                  >
                    2. Phase d’Analyse individuelle
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Analyse de la personnalité du jeune (aspirations,
                    compétences, motivations...)
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Analyse de son parcours scolaire
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Évaluation de ses intérêts professionnels via un test
                    d’orientation
                  </Typography>
                </CardContent>
                <Box
                  component="img"
                  src="/images/reflexion.png"
                  alt="Phase 2"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    borderRadius: 2,
                    mt: { xs: 2, md: 0 },
                    maxHeight: 280,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>

            {/* Phase 3 */}
            <Grid item xs={12}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  p: { xs: 2, md: 3 },
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                }}
              >
                <Box
                  component="img"
                  src="/images/explore.png"
                  alt="Phase 3"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    borderRadius: 2,
                    mb: { xs: 2, md: 0 },
                    mr: { md: 4 },
                    maxHeight: 280,
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: 18, md: 20 } }}
                  >
                    3. Phase de l’exploration
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Restitution des tests de la phase d’analyse individuelle
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Exploration des secteurs d’activités et des métiers
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Exploration des filières d’études
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Hiérarchisation des choix et élaboration du pré-projet
                    d’orientation
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Phase 4 */}
            <Grid item xs={12}>
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  p: { xs: 2, md: 3 },
                  backgroundColor: '#f7f7f7',
                  border: 'none',
                }}
              >
                <CardContent sx={{ p: 0, mr: { md: 4 } }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: { xs: 18, md: 20 } }}
                  >
                    4. Mise en œuvre du projet
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Validation du projet d’études
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Élaboration du plan d’action personnel
                  </Typography>
                  <Typography
                    variant="body2"
                    paragraph
                    sx={{ fontSize: { xs: 15, md: 18 } }}
                  >
                    ✔ Remise du rapport complet du bilan d’orientation scolaire
                  </Typography>
                </CardContent>
                <Box
                  component="img"
                  src="/images/face.png"
                  alt="Phase 4"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    borderRadius: 2,
                    mt: { xs: 2, md: 0 },
                    maxHeight: 280,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* SECTION 4 : CARDS COLORÉES 01–04 */}
        <Box sx={{ mt: { xs: 5, md: 7 }, mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              color: '#C90076',
              fontWeight: 'bold',
              fontSize: { xs: 22, md: 28 },
            }}
          >
            Pourquoi choisir le bilan de Mobiliis ?
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{ mt: { xs: 3, md: 5 } }}
            className="fine"
          >
            {/* 01 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                className="why-card"
                sx={{ height: '100%' }}
                elevation={3}
              >
                <CardContent>
                  <Typography
                    className="why-number"
                    gutterBottom
                  >
                    01.
                  </Typography>
                  <Typography className="why-title">
                    Meilleure connaissance de soi
                  </Typography>
                  <Typography className="why-text">
                    Nous croyons que la clé pour trouver une carrière
                    épanouissante est de <strong>se connaître</strong> soi-même.
                    Notre <strong>bilan d’orientation</strong> vous aide à mieux
                    <strong> découvrir vos intérêts</strong>, vos{' '}
                    <strong>compétences</strong> et vos{' '}
                    <strong>valeurs</strong> pour vous aider à trouver une
                    carrière à votre image.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* 02 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card className="why-card" sx={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <Typography className="why-number" gutterBottom>
                    02.
                  </Typography>
                  <Typography className="why-title">
                    Choix des études adaptées
                  </Typography>
                  <Typography className="why-text">
                    Le <strong>choix de la formation</strong> peut être
                    <strong> décisif</strong> pour votre avenir. Nous vous
                    aidons à <strong>bien choisir le programme d’études</strong>{' '}
                    qui vous convient et vos{' '}
                    <strong>objectifs de carrière</strong>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* 03 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card className="why-card" sx={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <Typography className="why-number" gutterBottom>
                    03.
                  </Typography>
                  <Typography className="why-title">
                    Choix de votre métier de rêves
                  </Typography>
                  <Typography className="why-text">
                    Trouver votre <strong>voie professionnelle</strong> peut
                    s’avérer difficile. Nous vous guidons à travers les{' '}
                    <strong>différentes options de carrière</strong> et vous
                    aidons à découvrir les <strong>métiers</strong> qui
                    correspondent le mieux à vos <strong>objectifs</strong>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* 04 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card className="why-card" sx={{ height: '100%' }} elevation={3}>
                <CardContent>
                  <Typography className="why-number" gutterBottom>
                    04.
                  </Typography>
                  <Typography className="why-title">
                    Bilan d’orientation sur mesure
                  </Typography>
                  <Typography className="why-text">
                    Nous croyons que chaque individu est unique et mérite un{' '}
                    <strong>traitement personnalisé</strong> pour trouver sa
                    voie. Le <strong>bilan d’orientation</strong> est conçu pour
                    répondre à vos <strong>besoins spécifiques</strong> et à vos{' '}
                    <strong>aspirations</strong>.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Coaching;
