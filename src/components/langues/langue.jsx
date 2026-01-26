import React from "react";
import "./langue.css";
import { useNavigate } from "react-router-dom";

const Langue = () => {
  const navigate = useNavigate();

  const handleCanada = () => navigate("/coursCanada");
  const handleAnglais = () => navigate("/coursAnglais");
  const handleAllemand = () => navigate("/coursAllemand");

  const formations = [
    {
      id: 1,
      logo: "images/toeic.jpg",
      title: "Anglais général et professionnel - Préparation aux TOEFL et IELTS",
      description: "Cours particuliers en visio: professeurs natifs",
      location: "À distance · En entreprise",
      button: "À savoir plus",
      onClick: handleAnglais,
    },
    {
      id: 2,
      logo: "images/tcf.webp",
      title: "Français  professionnel - Préparation aux TCF, TEF Canada ",
      description: "À partir de 10h en visioformation",
      location: "À distance · En entreprise",
      button: "À savoir plus",
      onClick: handleCanada,
    },
    {
      id: 3,
      logo: "images/DELF-DALF.avif",
      title: "Allemand Général - Préparation aux DSH et TestDAF",
      description: "Cours particuliers + e-learning + collectifs",
      location: "À distance · En entreprise",
      button: "À savoir plus",
      onClick: handleAllemand,
    },
    {
      id: 4,
      logo: "images/tcf.webp",
      title: "Formation personnalisée en Espagnol",
      description: "Formation flexible avec des experts natifs",
      location: "À distance ou en présentiel",
      button: "À savoir plus",
      onClick: null,
    },
  ];

  return (
    <section className="lg-section">
      <div className="lg-container">
        <h2 className="lg-title">Nos formations de Langues</h2>

        <p className="lg-description">
          Découvrez des formations adaptées à vos besoins : que vous soyez débutant ou avancé,
          apprenez avec des experts natifs. Étudiez à votre rythme grâce à nos cours flexibles,
          accessibles en ligne ou en présentiel. Préparez vos certifications avec un accompagnement
          personnalisé et professionnalisant.
        </p>

        <div className="lg-scroll">
          {formations.map((formation) => (
            <div className="lg-card" key={formation.id}>
              <img
                src={formation.logo}
                alt={formation.title}
                className="lg-image"
              />

              <div className="lg-body">
                <h3 className="lg-card-title">{formation.title}</h3>

                <ul className="lg-details">
                  <li className="lg-detail">{formation.description}</li>
                  <li className="lg-detail">{formation.location}</li>
                </ul>

                <button
                  className="lg-btn"
                  onClick={formation.onClick || undefined}
                  disabled={!formation.onClick}
                >
                  {formation.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg-bottom">
          <button className="lg-discover">toutes les formations</button>
        </div>
      </div>
    </section>
  );
};

export default Langue;
