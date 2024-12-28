import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FaceIcon from '@mui/icons-material/Face';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './coaching.css'
const Coaching = () => {

    const reasons = [
        "S’affirmer et trouver son équilibre personnel grâce à une meilleure connaissance de soi-même ",
        "Identifier et comprendre ses propres forces, ses faiblesses, ses intérêts, ses aptitudes, ses motivations et ses valeurs",
        "Avoir une vision plus claire de l’ensemble des options (Filières, formations, métiers… etc.) qui s’offrent à lui",
        "Choisir son métier à son image dans un secteur d’activité porteur avec des débouchés professionnels avérés",
        "Choisir une formation ou un environnement d’études favorisant son épanouissement et donc sa réussite",
        " Réduire le stress et l’anxiété associés à la prise de décision",
        " Se sentir plus confiant(e) dans ses choix d’orientation scolaire et professionnelle",
        " Mise en œuvre d’un plan d’action pour atteindre ses objectifs personnels, académiques ou professionnels",
    ];


    return (
        <div className="entretien">
            <div className="anglaise-sectione">
                {/* Image de fond */}
                <img
                    src="/images/quebec.jpg"
                    alt="Background"
                    className="anglais-image"
                />

                {/* Overlay sombre */}
                <div className="overlay"></div>

                {/* Contenu texte centré */}
                <div className="breadcrumb-content">
                    <p className="breadcrumb-orientation">
                        Orientation scolaire
                    </p>
                    <div className="underline"></div>

                </div>
            </div>

            <div className="contenu">

                <Box sx={{ mt: 6, }}>
                    {/* Titre */}
                    <Typography variant="h5" align="center" gutterBottom fontWeight="bold" sx={{ color: '#C90076', fontWeight: 'bold' }}>
                        Pourquoi Faire Un Bilan D’Orientation Scolaire ?
                    </Typography>

                    {/* Texte introductif */}
                    <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                        Complexité croissante de l’offre de formation, des passerelles multiples, des métiers émergents et des secteurs en crise…,
                        le bilan d’orientation peut vous éviter une erreur coûteuse d’orientation ou encore la frustration d’une réorientation tardive.
                    </Typography>

                    {/* Liste des avantages */}
                    <Typography variant="body1" align="left" paragraph sx={{ ml: 2, fontSize: '18px' }}>
                        <strong>Le <span style={{ fontWeight: 'bold', color: '#000080' }}>bilan d’orientation scolaire</span></strong> constitue un outil très précieux qui permet à votre jeune
                        (<strong>collégien, lycéen</strong> ou <strong>étudiant</strong>) de :
                    </Typography>

                    <Box component="ul"  >
                        <ul>
                            {reasons.map((reason, index) => (
                                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                    <ThumbUpIcon sx={{ color: "red", marginRight: "10px" }} />
                                    <Typography sx={{ fontSize: '18px' }}>{reason}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box><br />




                {/* Section 2 : Public concerné */}
                <Box sx={{ mt: 4, bgColor: '#ffffff' }}>
                    <Typography variant="h5" align="center" gutterBottom sx={{ color: '#C90076', fontWeight: 'bold' }}>
                        Pour qui est destiné un bilan d'orientation ?
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Tout jeune indécis ou ayant besoin d’être accompagné dans ses démarches d’orientation (ou de réorientation) scolaire et professionnelle !
                    </Typography>
                    <Grid container spacing={3} justifyContent="center" sx={{ mt: 3, }} className='grid'>
                        <Grid item xs={12} sm={4} align="center">
                            <Avatar sx={{ bgcolor: '#ffcc80', width: 80, height: 80 }}>
                                <SchoolIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6">Collégiens</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} align="center">
                            <Avatar sx={{ bgcolor: '#81d4fa', width: 80, height: 80 }}>
                                <PeopleIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6">Lycéens</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} align="center">
                            <Avatar sx={{ bgcolor: '#a5d6a7', width: 80, height: 80 }}>
                                <FaceIcon fontSize="large" />
                            </Avatar>
                            <Typography variant="h6">Étudiants</Typography>
                        </Grid>
                    </Grid>
                </Box><br />



                {/* Section 3 : Démarche */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h5" align="center" gutterBottom sx={{ color: '#C90076', fontWeight: 'bold' }}>
                        La Démarche Du Bilan D’Orientation "Mobiliis"
                    </Typography>
                    <Grid container spacing={2}>

                        {/* Phase 1 */}
                        <Grid
                            item
                            xs={12}
                            sm={11}
                            sx={{ marginLeft: 'auto', marginRight: 0 }}
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
                                    sx={{ width: { xs: '100%', sm: '40%' }, borderRadius: 2, mr: 3, height: 300, width: 300, }}
                                />
                                {/* Contenu Texte */}
                                <CardContent>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        1. La Démarche Du Bilan D’Orientation "Mobiliis"
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
                        <Grid item xs={12} sm={11} sx={{ marginLeft: 'auto', marginRight: 0 }} >
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
                                        2. Phase d’Analyse individuelle
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
                        <Grid item xs={12} sm={11} sx={{ marginLeft: 'auto', marginRight: 0 }}>
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
                                        3. Phase de L’exploration
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
                        <Grid item xs={12} sm={11} sx={{ marginLeft: 'auto', marginRight: 0 }}>
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
                                        4. Mise en œuvre du projet
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
                </Box> <br />



                <Box sx={{ mt: 6, }} clasName='fin'>
                    {/* Titre Principal */}
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        sx={{ color: '#C90076', fontWeight: 'bold', fontSize: '28px' }}
                    >
                        Pourquoi choisir le bilan de Mobiliis ?
                    </Typography>

                    {/* Conteneur des 4 sections */}
                    <Grid container spacing={4} sx={{ mt: 2 }} className='fine'>
                        {/* Première ligne avec deux colonnes */}
                        <Grid item xs={12} sm={6} sx={{ textAlign: 'center', maxWidth: '500px', }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ color: '#C99048', fontWeight: 'bold', fontStyle: 'italic' }}
                            >
                                01.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', color: '#001F54' }}
                            >
                                Meilleure connaissance de soi
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
                                Nous croyons que la clé pour trouver une carrière épanouissante
                                est de <strong>se connaître</strong> soi-même. Notre
                                <strong> bilan d’orientation</strong> vous aide à mieux
                                <strong> découvrir vos intérêts</strong>, vos <strong>compétences</strong>
                                et vos <strong>valeurs</strong> pour vous aider à trouver
                                une carrière à votre image.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ color: '#C99048', fontWeight: 'bold', fontStyle: 'italic' }}
                            >
                                02.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', color: '#001F54' }}
                            >
                                Choix des études adaptées
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
                                Le <strong>choix de la formation</strong> peut être
                                <strong> décisif</strong> pour votre avenir. Nous vous
                                aidons à <strong>bien choisir le programme d’études</strong>
                                qui vous convient et vos <strong>objectifs de carrière</strong>.
                            </Typography>
                        </Grid>

                        {/* Deuxième ligne avec deux colonnes */}
                        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ color: '#C99048', fontWeight: 'bold', fontStyle: 'italic' }}
                            >
                                03.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', color: '#001F54' }}
                            >
                                Choix de votre métier de rêves
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
                                Trouver votre <strong>voie professionnelle</strong> peut
                                s’avérer difficile. Nous vous guidons à travers les
                                <strong> différentes options de carrière</strong> et vous
                                aidons à découvrir les <strong>métiers</strong> qui
                                correspondent le mieux à vos <strong>objectifs</strong>.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{ color: '#C99048', fontWeight: 'bold', fontStyle: 'italic' }}
                            >
                                04.
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 'bold', color: '#001F54' }}
                            >
                                Bilan d’orientation sur mesure
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, fontSize: 18 }}>
                                Nous croyons que chaque individu est unique et mérite un
                                <strong> traitement personnalisé</strong> pour trouver
                                sa voie. Le <strong>bilan d’orientation</strong> est conçu
                                pour répondre à vos <strong>besoins spécifiques</strong> et
                                à vos <strong>aspirations</strong>.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


            </div>
        </div>
    );
};

export default Coaching;