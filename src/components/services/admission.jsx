import React from 'react';
import './admission.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="temoignagese-pagee">
            <div className="anglais-section">
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
                    <p className="breadcrumb-title">
                        Demande d'admission
                    </p>
                    <div className="underline"></div>

                    {/* Bouton */}
                    <button className="green-button" onClick={handleContactClick}>
                        RESERVEZ VOTRE RENDEZ-VOUS
                        <ChevronRightIcon style={{ fontSize: '20px', marginLeft: '10px' }} />
                    </button>
                </div>
            </div>



            <div className="content-sectione">
                <div className="over">
                    <h1>Recherches d'une admission</h1> <br />


                    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                        <h2>
                            Vous êtes élèves en 1ère année Bac, en terminale ou même étudiants et
                            envisagez de partir étudier à l’étranger pour entamer vos études
                            supérieures ?
                        </h2>
                        <p>
                            Et vous voulez mettre toute la chance à vos côtés pour en obtenir votre
                            admission, mais vous ne savez pas par quoi ni par où commencer ?
                        </p>
                        <p>
                            Chez <strong>Mobiliis</strong>, nous mesurons vos besoins, nous
                            vous proposons des solutions et nous simplifions vos démarches.
                        </p>
                        <h3>
                            <strong>
                                Nos demandes d’admission répondent aux critères d’éligibilité des
                                grandes universités !
                            </strong>
                        </h3>

                        <h4>Notre pack comprend :</h4>

                        <li>
                            <strong>Évaluation de votre dossier</strong>
                            <ul>
                                <li>
                                    Analyser votre dossier scolaire ou universitaire afin d’identifier
                                    vos options ;
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Construction de votre projet d’études à l’étranger</strong>
                            <ul>
                                <li>Établir votre projet professionnel ;</li>
                                <li>
                                    Développer un cheminement pédagogique et un objectif de carrière
                                    axé sur vos intérêts, vos forces et vos buts ;
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sélection de cursus et d’universités adaptés</strong>
                            <ul>
                                <li>
                                    Sélectionner un programme d’études basé sur votre plan
                                    universitaire ou de carrière ;
                                </li>
                                <li>Rechercher des universités ;</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Formalisation de votre dossier d’admission</strong>
                            <ul>
                                <li>Corriger vos C.V. et lettres de motivation et vous apprendre à les rédiger ;</li>
                                <li>
                                    Décider des activités parascolaires pouvant apporter une
                                    plus-value au dossier ;
                                </li>
                                <li>
                                    Créer un portfolio compétitif pour votre demande d’admission aux
                                    programmes de votre choix ;
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Suivi de l’évolution de vos demandes dossier post-dépôt</strong>
                        </li>
                        <li>
                            <strong>Et plus encore !</strong>
                            <ul>
                                <li>
                                    Nous vous offrons l’accès à nos services de soutien afin de
                                    faciliter la transition lors de votre première année ;
                                </li>
                                <li>
                                    Nous bâtissons un plan de réussite universitaire personnalisé qui
                                    vous permettra d’accéder à l’excellence pédagogique, nécessaire à
                                    l’obtention de bourses et distinctions et pour accéder à des
                                    programmes prestigieux d’études supérieures.
                                </li>
                            </ul>
                        </li>

                    </div>

                    <button className="green-button" style={{ marginLeft: '60px' }}>
                        Je postule
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admission;
