import React from "react";
import { useNavigate } from "react-router-dom";
import CardTemoin from "./cardTemoin";
import "./temoignage.css";

const Temoignages = () => {
  const navigate = useNavigate();

  const temoignages = [
    {
      nom: "Alex KUETCHE",
      message:
        "La formation à l'ESCG Paris s’est donc avérée pertinente, puisque j’ai réalisé ma dernière année en alternance ainsi qu’un mémoire professionnel sur une problématique liée à mon entreprise d’accueil.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Jordan KAMJON",
      message:
        "Grâce à l'ESCG Paris j’ai pu faire mon alternance au sein de mon entreprise. Le programme est adapté aux difficultés que je rencontre au quotidien et les professeurs sont d’une grande qualité d’écoute.",
      image: "/images/catable.jpg",
    },
    {
      nom: "Rayane TCHAHAME",
      message:
        "J'ai signé mon CDI quelques mois avant la fin de mon contrat de professionnalisation avec un statut cadre. Tout cela n’aurait pas été possible sans le soutien de mon tuteur et le corps professoral de l'ESCG Paris.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Sandra kanme",
      message:
        "Mobiliis Paris est selon moi une école qui sait accompagner ses élèves dans leur parcours et les aide à avancer. Elle m’a donné les outils nécessaires pour réussir et avec beaucoup d'efforts et de motivation j’y suis arrivé.",
      image: "/images/avion.jpg",
    },
  ];


  const handleAll = () => {
    navigate("/temoignage"); 
  };

  const handleRead = (temoin) => {
    console.log("Lire :", temoin);
  
  };

  return (
    <section className="temoignions">
      <div className="temoignages-container">
        <h1 className="tit">Ils nous ont fait confiance</h1>
        <p className="subtitle">
          Découvrez les témoignages inspirants de nos étudiants et partenaires
        </p>

        <div className="temoignages-scroll">
          {temoignages.map((t, index) => (
            <CardTemoin
              key={index}
              nom={t.nom}
              message={t.message}
              image={t.image}
              onRead={() => handleRead(t)}
            />
          ))}
        </div>

        <div className="temoignages-bottom">
          <button className="temoignages-all-btn" onClick={handleAll}>
            Tous les témoignages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
