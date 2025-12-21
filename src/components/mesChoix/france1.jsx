import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AccordionList from "../utils/AccordionList";

const France1 = () => {
  // --------- SECTION 1 : Choisissez votre programme ----------
  const sections1 = [
    {
      title: "Système d’enseignement français",
      content: (
        <div>
          <Typography sx={{ mb: 1 }}>
            La particularité du système d’enseignement supérieur est que celui-ci se compose de
            nombreux établissements de qualité offrant une grande diversité de formation :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>72 Universités couvrant l’ensemble des niveaux et disciplines.</li>
            <li>
              Plus de 220 Grandes écoles accessibles après le baccalauréat ou après 2 années de
              classes préparatoires (CPGE).
            </li>
            <li>
              Plus de 3000 écoles et instituts spécialisés offrant des formations courtes à vocation
              professionnelle.
            </li>
          </ul>

          <Typography sx={{ mt: 2, mb: 1 }}>
            Les formations de l’enseignement supérieur universitaire sont découpées en 3 cycles :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>
              <strong>Premier Cycle :</strong> Préparation en 3 ans pour une licence ou un Bachelor
              universitaire de technologie.
            </li>
            <li>
              <strong>Deuxième Cycle :</strong> Dure 2 ans pour l’obtention d’un master.
            </li>
            <li>
              <strong>Troisième Cycle :</strong> Dure 3 ans et correspond à la formation doctorale.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Diplômes en France",
      content: (
        <Typography>
          Les diplômes en France sont reconnus mondialement et offrent des opportunités variées dans
          différents domaines.
        </Typography>
      ),
    },
    {
      title: "Admission",
      content: (
        <Typography>
          Découvrez le processus d’admission en France pour les étudiants internationaux, y compris
          les exigences et les étapes clés.
        </Typography>
      ),
    },
    {
      title: "Exigences linguistiques",
      content: (
        <Typography>
          La maîtrise de la langue française ou anglaise est généralement requise pour étudier en
          France. Les tests comme le DELF/DALF ou le TOEFL sont souvent nécessaires.
        </Typography>
      ),
    },
    {
      title: "Coût des études en France",
      content: (
        <div>
          <Typography sx={{ mb: 1 }}>
            Le coût des études dans les établissements publics français reste toujours abordable
            malgré la hausse appliquée en 2019. Il faut donc prévoir :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>2770 € pour la licence, licence professionnelle et DUT.</li>
            <li>3770 € pour le Master.</li>
            <li>380 € pour le Doctorat (Phd).</li>
            <li>Pour les écoles privées, une moyenne de 8000€ est à prévoir pour une année d’études.</li>
          </ul>
        </div>
      ),
    },
  ];

  // --------- SECTION 2 : Visa étudiant ----------
  const sections2 = [
    {
      title: "Conditions d'obtention du visa étudiant",
      content: (
        <div>
          <Typography sx={{ mb: 1 }}>
            Pour prétendre à ce visa étudiant, vous devez :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>
              Être inscrit ou réinscrit dans un établissement d’enseignement supérieur ou dans un
              organisme de formation professionnelle supérieure.
            </li>
            <li>Justifier d’un projet d’étude cohérent.</li>
            <li>Prouver votre capacité à financer votre projet d’études.</li>
          </ul>

          <Typography sx={{ mt: 2 }} variant="body2" color="textSecondary">
            <strong>NB :</strong> Si votre objectif est de passer un concours ou un examen d’accès
            dans l’enseignement supérieur ou encore une grande école, c’est le visa court-séjour
            « étudiant-concours » qu’il vous faut !
          </Typography>
        </div>
      ),
    },
    {
      title: "Travailler pendant les études en France",
      content: (
        <Typography>
          Les étudiants internationaux peuvent travailler en France à temps partiel (jusqu&apos;à 964
          heures par an), tout en respectant les lois et réglementations locales. Cela permet de
          financer partiellement leurs études et de s&apos;intégrer dans le marché du travail français.
        </Typography>
      ),
    },
  ];

  // --------- SECTION 3 : Hébergement ----------
  const sections3 = [
    {
      title: "Types de logements étudiant en France",
      content: (
        <div>
          <Typography sx={{ mb: 1 }}>
            En France, deux possibilités de se loger s’offrent aux étudiants internationaux :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>Les résidences universitaires gérées par les CROUS, et</li>
            <li>
              Les logements privés possédés par des particuliers, associations ou des organismes
              privés.
            </li>
          </ul>

          <Typography sx={{ mt: 2, mb: 1 }}>
            Mais généralement, les résidences universitaires CROUS sont les plus recherchées par
            les étudiants vu leurs nombreux avantages :
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>Très proches des universités ;</li>
            <li>Loyer plus ou moins très bas ;</li>
            <li>Possibilité de bénéficier des aides au logement.</li>
          </ul>

          <Typography sx={{ mt: 2 }}>
            Leur seul inconvénient est que leurs capacités d’accueil sont très limitées en face à
            la forte demande.
          </Typography>

          <Typography sx={{ mt: 2 }} variant="body2" color="#003366" fontWeight="bold">
            <strong>NB :</strong> N’attendez surtout pas d’être en France pour chercher votre logement
            étudiant ! Entamez, le plus tôt possible, vos demandes à distance !
          </Typography>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* ================= SECTION 1 ================= */}
      <Box sx={{ padding: "20px 20px", backgroundColor: "#FAFAFA" }}>
        <Typography variant="h5" fontWeight="bold" align="center" gutterBottom color="#A93D87">
          Choisissez votre programme
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" mb={4}>
          En France, les possibilités sont infinies ! Découvrez les possibilités qui s’offrent aux étudiants internationaux.
        </Typography>

        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <img
              src="/images/etudiantFrance.webp"
              alt="Students in classroom"
              style={{ width: "100%", borderRadius: "8px", display: "block" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AccordionList
              items={sections1}
              headerBg="#0056b3"
              headerColor="#ffffff"
              detailsBg="#f0eef4"
              detailsColor="#2b2b2b"
              defaultExpanded={null}
            />
          </Grid>
        </Grid>
      </Box>

      {/* ================= SECTION 2 ================= */}
      <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" fontWeight="bold" gutterBottom color="#A93D87">
              Visa étudiant pour la France
            </Typography>

            <Typography variant="body1" color="textSecondary" paragraph>
              Vous êtes <strong>étudiant étranger</strong> et décidez de poursuivre vos études supérieures en France,
              vous devez demander un visa de long séjour valant le <strong>titre de séjour (VLS-TS)</strong> mention
              étudiant (valable 4 mois à 1 an) ! Ce <strong>visa étudiant</strong> est obligatoire pour toute formation
              supérieure à 3 mois.
            </Typography>

            <AccordionList
              items={sections2}
              headerBg="#0056b3"
              headerColor="#ffffff"
              detailsBg="#f0eef4"
              detailsColor="#2b2b2b"
              defaultExpanded={null}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <img
              src="/images/etudiantFrance.webp"
              alt="Visa étudiant pour la France"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* ================= SECTION 3 ================= */}
      <Box sx={{ padding: "40px 20px", backgroundColor: "#FAFAFA" }}>
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <img
              src="/images/etudiantFrance.webp"
              alt="Hébergement étudiant en France"
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" fontWeight="bold" gutterBottom color="#A93D87">
              Hébergement – Logement étudiant
            </Typography>

            <Typography variant="body1" color="textSecondary" paragraph>
              Trouver le bon type de logement étudiant est la clé de votre intégration académique et sociale !
            </Typography>

            <AccordionList
              items={sections3}
              headerBg="#0056b3"
              headerColor="#ffffff"
              detailsBg="#f0eef4"
              detailsColor="#2b2b2b"
              defaultExpanded={null}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default France1;
