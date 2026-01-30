import React from "react";
import "./temoignage.css";
import PersonneTemoignage from "../../components/temoignages/personneTemoignage";

const Temoignages = () => {
  return (
    <div className="temoignages-page">
      {/* ✅ Header image */}
      <div className="anglaise-sectione">
        <img src="/images/quebec.jpg" alt="Background" className="anglais-image" />
        <div className="overlay" />

        <div className="breadcrumb-content">
          <p className="breadcrumb-orientation">Ils témoignent pour nous</p>
          <div className="underline" />
        </div>
      </div>

      {/* ✅ Résumé simple (sans chevauchement) */}
      <div className="temoignages-resume">
        <h2 className="temoignages-resume-title font-extrabold text-[#A93D87] ">Ils nous ont fait confiance</h2>

       

        <p className="temoignages-resume-text">
          Mobiliis est une agence d’accompagnement qui vous aide dans vos{" "}
          <strong>procédures de voyage</strong> : orientation, constitution de dossier,cautioon bancaire + assurance voyage, les
          démarches administratives ainsi que les conseils pour maximiser vos chances.
        </p>
        <p className="temoignages-resume-text">
          Découvrez ci-dessous les témoignages d’étudiants et de personnes que nous avons
          accompagnés dans leur projet de voyage.
        </p>
      </div>

      {/* ✅ Témoignages */}
      <div className="temoignage">
        <PersonneTemoignage />
      </div>
    </div>
  );
};

export default Temoignages;
