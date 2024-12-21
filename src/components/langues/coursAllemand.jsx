import React from 'react';
import './coursAllemand.css';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Canada = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };
    const features = [
        { icon: <MapIcon fontSize="large" />, title: " DSH" },
        { icon: <ApartmentIcon fontSize="large" />, title: "TestDaf" },
        { icon: <PersonAddIcon fontSize="large" />, title: "AVANTAGES" },
        { icon: <AssignmentIcon fontSize="large" />, title: "ADMISSION" },
    ];
    return (
        <div className="temoignages-page">
            <div className="anglais-section">
                <img src="/images/canada-ville.avif" alt="Background"
                    style={{ height: '450px' }}
                    className="anglais-image" />
                <div className="breadcrumb">
                    Accueil »
                    <p style={{ fontWeight: 'bold', fontSize: '40px', marginLeft: '10px', color: 'white' }}>
                        Améliorer vos connaissances en Anglais dès à présent
                    </p>

                    <button className="green-button" onClick={handleContactClick}>
                        RESERVEZ VOTRE RENDEZ-VOUS
                        <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '35px' }} />
                    </button>
                </div>
            </div>
            <div className="content-section">
                <div className="overlay">
                    <h1>Apprenez l'Allemand et valider vos tests de Langue</h1> <br />
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
                <h3 style={{ color: '#004080', fontSize: '20px' }}>L'apprentissage de l'allemand ouvre les portes des meilleures universités et opportunités professionnelles en Allemagne.
                    Préparez-vous efficacement aux examens DSH et TestDAF, reconnus pour évaluer vos compétences linguistiques.
                    Nous vous accompagnons avec des cours adaptés pour garantir votre réussite.</h3> <br />


                <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '2rem' }}>
                    {/* Header */}
                    <header>
                        <div className="allemand-header">
                            <div className="allemand-DSH">
                                <h1 style={{ fontSize: '2rem', color: '#A93D87' }}>
                                    Centre agréé pour le <strong>Examen DSH (TCF)</strong>
                                </h1>
                                <h3>Si tu souhaites étudier dans une université allemande, tu dois <strong>obtenir soit le certificat d'allemand DSH, soit le TestDaF</strong>.</h3>
                                <p>
                                    L'examen DSH se compose d'un examen écrit et d'un examen oral. La partie écrite de
                                    l'examen couvre les domaines de la compréhension orale, de la compréhension écrite, d'expresion écrite,
                                    ainsi que de la compréhension et du traitement des structures linguistiques scientifiques. Bien que les épreuves d'examen soient conçues
                                    par les universités elles-mêmes, elles sont basées sur un modèle similaire dans toute l'Allemagne.
                                </p>
                                <p> <strong>L'examen DSH</strong> ne peut être passé que dans une université allemande. Elle a généralement lieu quelques semaines avant le début du semestre. Le DSH est considéré comme réussi si au moins
                                    deux tiers des exigences ont été remplies dans les deux parties de l'examen (écrit et oral).</p></div>
                            <div className='image-cours'>
                                <img
                                    src="/images/cours-allemand.jpe"
                                    alt="Cours d'Allemand"
                                    className='image1-cours'

                                />
                            </div>
                        </div>
                        <div className="allemand-header">
                            <div className="allemand-DSH">
                                <h1 style={{ fontSize: '2rem', color: '#A93D87' }}>
                                    Centre agréé pour <strong>Examen TestDaF</strong>
                                </h1>
                                Une alternative au   <strong>DSH</strong> est le  <strong>TestDaF</strong>. Il comprend quatre parties dans lesquelles les capacités de compréhension et d'expression orale et écrite sont testées.
                                Contrairement au test DSH, le TestDaF peut être passé plusieurs fois et à l'étranger.

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
                                    src="/images/cours2-allemand.jpg"
                                    alt="Cours d'Allemand"
                                    className='image2-cours'
                                />
                            </div>
                        </div>
                    </header>

                    {/* Section: Description */}
                    <section>
                        <h2 style={{ fontSize: '2rem', color: '#A93D87' }}>À propos de notre centre</h2>
                        <p>
                            Nous vous offrons plusieurs options pour vos formations des cours d'Allemand afin de vous aider à passer le TestDaf ainsi que la certification DSH
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
                            <li>Des cours Audio-visuels vous permettant de mieux assimuler la théorie.</li>
                        </ul>
                        <img
                                    src="/images/image-allemand.jpg"
                                    alt="Cours d'Allemand"
                                    className='image2-cours'
                                />
                    </section>

                    {/* Section: Inscription */}
                    <section>
                        <h2 style={{ fontSize: '2rem', color: '#A93D87' }}>Vos inscriptions au DSH et TestDAF</h2>
                        <p>
                            L'inscription se fait facilement en ligne. Vous recevrez un e-mail de confirmation ainsi que les détails
                            nécessaires pour votre session. Pour commencer.
                            <a href="https://www.exemple.com/inscription" target="_blank" rel="noreferrer">
                                Inscrivez-vous maintenant
                            </a>
                        </p>
                    </section>

                    {/* Section: Recommandations */}
                    <section>
                        <h2>Recommandé pour :</h2>
                        <ul>
                            <li>Les demandes d'admission universitaire en Allemagne.</li>
                            <li>Les démarches pour un projet professionnel en Allemagne.</li>
                            <li>La naturalisation Allemande.</li>
                        </ul>
                    </section>

                    {/* Footer */}
                    <footer style={{ marginTop: '2rem', fontSize: '17px', color: '#555' }}>
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

export default Canada;
