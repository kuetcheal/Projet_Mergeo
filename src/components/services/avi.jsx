import React from 'react';
import './avi.css';
// import Canada1 from './canada1';
// import Canada2 from './canada2';
// import France3 from './france3';
// import France4 from './france4';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, CardContent, Card, Button, CardActions } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Canada = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };
    const handleFormsClick = () => {
        navigate('/aviForms1');
    };
    const features = [
        { icon: <PersonAddIcon fontSize="large" />, title: "AVI SIMPLE" },
        { icon: <AssignmentIcon fontSize="large" />, title: "ASSURANCE VOYAGE" },
        { icon: <MapIcon fontSize="large" />, title: "FULL PACKAGES" },
        // { icon: <ApartmentIcon fontSize="large" />, title: "HÉBERGEMENT" },
    ];

    const cards = [
        {
          title: "Mobiliis AVI SLIM",
          description:
            "Obtenez uniquement votre AVI en France, en Allemagne et au Canada grâce à nos partenaires Banquiers de ces pays.",
          buttonText: "intéressé(e)",
          image: "/images/canada-ville.avif", // Remplacez par le chemin réel de votre image
        },
        {
          title: "Mobiliis AVI + ASSURANCE",
          description:
            "YIMMILINE AVI  + Assurance Voyage et Responsabilité Civile. Poursuivez vos études en toute tranquillité avec notre AVI 100% Crédit Agricole. Obtenez votre AVI en 10 heures.",
          buttonText: "intéressé(e)",
          image: "/images/canada-ville.avif", // Remplacez par le chemin réel de votre image
        },
        {
          title: "FULL PACKAGE",
          description:
            "Optez pour le service complet d’accompagnement Envol et Intégration avec toute l’expertise de Mobiliis, tout ce dont vous avez besoin pour décrocher votre visa !",
          buttonText: "intéressé(e)",
          image: "/images/canada-ville.avif", // Remplacez par le chemin réel de votre image
        },
      ];

    return (
        <div className="temoignages-page">
            <div className="fran-section">
                <img src="/images/canada-ville.avif" alt="Background" className="fran-image" />
                <div className="overlayfran"></div>
                <div className="breadfrance">

                    <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
                        Obtenir votre AVI + Assurance voyage
                    </p>

                    <button className="green-button" onClick={handleContactClick}>
                        NOUS CONTACTER
                        <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '5px' }} />
                    </button>
                </div>
            </div>
            <div className="content-section">
                <div className="overlayfrance">
                    <h1>Choisisser votre package</h1> <br />
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
               
                {/* Section AVI - ÉTUDE */}
                <div className="avi-etude-section">
                    <div className="avi-content">
                        <div className="avi-text">
                            <h2>AVI - ÉTUDE</h2>
                            <h3>VISA LONG SÉJOUR POUR ÉTUDES</h3>
                            <p>
                                Dans le contexte étudiant, l’Attestation de Virement Irrévocable (AVI)
                                permet à un étudiant qui prépare son envol vers les pays Européen
                                (France, Allemagne, Italie l’appliquent et bien d’autres) de justifier
                                ses moyens d’existence auprès de l’Ambassade ou du consulat du pays où
                                il/elle sollicite la délivrance du visa long séjour pour vos études.
                            </p>
                            <p>
                                Dans certaines conditions que nous préciserons dans la suite, l’AVI est
                                donc une pièce obligatoire de votre dossier de demande de Visa. Son
                                absence lors du dépôt de votre dossier de demande de visa constitue un
                                motif de rejet de votre dossier car incomplet ou alors un motif de
                                refus de visa pour l’ambassade ou le consulat, d’où la nécessité de
                                vous faire établir votre AVI, et chez YIMMILINE, nous vous proposons de
                                vous établir l’AVI 3 en 1 Sur Mesure, Rapide, et Fiable pour vos
                                étudiants !
                            </p>
                            <button className="blue-button" onClick={handleFormsClick}>Obtenir mon AVI</button>
                        </div>
                        <div className="avi-image">
                            <img src="/images/canada-ville.avif" alt="AVI Étude" />
                        </div>
                    </div>
                </div>



                 {/* Section Packages */}
                 <Typography variant="h5" sx={{ textAlign: 'center', my: 4, fontWeight: 'bold', color: '#C90076' }}>
                    Quels sont nos différents packages ?
                </Typography>
                 <Box sx={{ padding: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0047AB" }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", marginTop: 2 }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#0047AB",
                    borderColor: "#0047AB",
                    "&:hover": {
                      backgroundColor: "#0047AB",
                      color: "#fff",
                    },
                  }}
                >
                  {card.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>




                <Typography variant="h5" sx={{ textAlign: 'center', my: 4, fontWeight: 'bold', color: '#C90076' }}>
                    Comment Procéder ?
                </Typography>

                <Grid container spacing={4} sx={{ position: 'center' }}>

                    {/* Phase 1 */}
                    <Grid
                        item
                        xs={12}
                        sm={11}
                        sx={{ position: 'center' }}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 1,
                                backgroundColor: '#f7f7f7',
                                border: 'none'
                            }}
                        >

                            <Box
                                component="img"
                                src="/images/bureau-table.png"
                                alt="Analyse individuelle"
                                sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 2, mr: 5, height: 300, width: 300, }}
                            />
                            {/* Contenu Texte */}
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    1. Formulaire de demande d'AVI
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Identification des besoins et des attentes de votre jeune
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span>Compréhension du profil et le contexte dans lequel il évolue
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Présentation du déroulement de la prestation.
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span>
                                    Détermination de la démarche d’accompagnement
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Phase 2 (Personnalisée avec Image) */}
                    <Grid item xs={12} sm={11} sx={{ position: 'center' }} >
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 1,
                                backgroundColor: '#f7f7f7',
                                border: 'none'
                            }}
                        >
                            {/* Contenu Texte */}
                            <CardContent >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    2. Validation du formulaire de demande d’AVI
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Analyse de la personnalité du jeune ( aspirations, compétences, motivations...)
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Analyse de son parcours scolaire
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Évaluation de ses intérêts professionnels via un test d’orientation.
                                </Typography>
                            </CardContent>
                            <Box
                                component="img"
                                src="/images/reflexion.png" // Chemin de ton image
                                alt="Analyse individuelle"
                                sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 2, mr: 3, height: 300, width: 300 }}
                            />
                        </Card>
                    </Grid>

                    {/* Phase 3 */}
                    <Grid item xs={12} sm={11} sx={{ position: 'center' }}>
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 2,
                                backgroundColor: '#f7f7f7',
                                border: 'none'
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/explore.png" // Chemin de ton image
                                alt="Analyse individuelle"
                                sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 2, mr: 3, height: 300, width: 300, }}
                            />
                            {/* Contenu Texte */}
                            <CardContent>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    3. Signature du mandat et dépôt des fonds
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Restitution des tests de la Phase d’Analyse Individuelle
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span>Exploration des secteurs d’activités et des métiers
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span> Exploration des filières d’études
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green' }}>✔</span>
                                    Hiérarchisation des choix et élaboration du pré projet d’orientation
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Phase 4 */}
                    <Grid item xs={12} sm={11} sx={{ position: 'center' }}>
                        <Card
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 2,
                                backgroundColor: '#f7f7f7',
                                border: 'none'
                            }}
                        >
                            <CardContent >
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    4. Disponibilité de votre AVI
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green', mr: 5 }}>✔</span> Validation du projet d’études
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green', mr: 8 }}>✔</span>Élaboration du plan d’action personnel
                                </Typography>
                                <Typography variant="body2" paragraph sx={{ fontSize: '18px' }}>
                                    <span style={{ color: 'green', mr: 5 }}>✔</span> Remise du rapport complet du bilan d’orientation scolaire
                                </Typography>
                            </CardContent>
                            <Box
                                component="img"
                                src="/images/face.png" // Chemin de ton image
                                alt="Analyse individuelle"
                                sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 2, mr: 3, height: 300, width: 300 }}
                            />
                        </Card>
                    </Grid>
                </Grid>

                <Typography variant="h5" sx={{ textAlign: 'center', my: 4, fontWeight: 'bold', color: '#C90076' }}>
                    Pourquoi Choisir Mobiliis pour votre AVI ?
                </Typography>
                <Grid container spacing={4} justifyContent="center" marginBottom={3}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: '#FFD700', borderRadius: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#0047AB', fontWeight: 'bold' }}>
                                    SUR MESURE
                                </Typography>
                                <Typography variant="body2">
                                    Envols et intégration 100% économique.
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: '#0047AB', color: '#fff', borderRadius: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Rapide
                                </Typography>
                                <Typography variant="body2">
                                    Service 100% digitalisé et fiable !
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: '#FFD700', borderRadius: 2 }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ color: '#0047AB', fontWeight: 'bold' }}>
                                    Fiable
                                </Typography>
                                <Typography variant="body2">
                                    Société française membre d’ENDYA sous contrôle de l’ACPR.
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Canada;
