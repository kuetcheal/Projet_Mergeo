import React from "react";
import CardTemoin from "./cardTemoin"; // ✅ adapte le chemin si besoin
import "./personneTemoignage.css";

const PersonneTemoignage = () => {
  // ✅ Étudiants
  const temoignagesEtudiants = [
    {
      nom: "Bojer KINZONZI",
      message:
        "La formation à l'ESCG Paris s’est donc avérée pertinente, puisque j’ai réalisé ma dernière année en alternance ainsi qu’un mémoire professionnel sur une problématique liée à mon entreprise d’accueil.",
      image: "/images/photo_Alex.jpeg",
    },
    {
      nom: "Hubert CASTELNAU",
      message:
        "Grâce à l'ESCG Paris j’ai pu faire mon alternance au sein de mon entreprise. Le programme est adapté aux difficultés que je rencontre au quotidien et les professeurs sont d’une grande qualité d’écoute.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Marie DUPONT",
      message:
        "J'ai signé mon CDI quelques mois avant la fin de mon contrat de professionnalisation avec un statut cadre. Tout cela n’aurait pas été possible sans le soutien de mon tuteur et le corps professoral de l'ESCG Paris.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Jean MARTIN",
      message:
        "L'ESCG Paris est selon moi une école qui sait accompagner ses élèves dans leur parcours et les aide à avancer. Elle m’a donné les outils nécessaires pour réussir et avec beaucoup d'efforts et de motivation j’y suis arrivé.",
      image: "/images/avion.jpg",
    },
  ];

  // ✅ Autres personnes accompagnées
  const temoignagesAutres = [
    {
      nom: "Yannick NGUEKE",
      message:
        "Mobiliis m’a accompagné dans mes démarches de voyage, avec des conseils clairs et un dossier bien préparé. J’ai été suivi du début à la fin.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Alex KUETCHE",
      message:
        "Une équipe disponible, un suivi sérieux et une vraie aide sur les documents. J’ai gagné du temps et évité beaucoup d’erreurs.",
      image: "/images/avion.jpg",
    },
    {
      nom: "Frank ELOCK",
      message:
        "Je recommande Mobiliis pour son accompagnement et sa réactivité. Le dossier était complet et bien expliqué.",
      image: "/images/avion.jpg",
    },
  ];

  const handleRead = (temoin) => {
    console.log("Lire témoignage :", temoin);
  };

  return (
    <section className="temoins-section">
      <div className="temoins-container">
        <h3 className="temoins-title">Témoignages d’étudiants accompagnés</h3>
        <div className="temoins-grid">
          {temoignagesEtudiants.map((t, index) => (
            <CardTemoin
              key={`etu-${index}`}
              nom={t.nom}
              message={t.message}
              image={t.image}
              onRead={() => handleRead(t)}
            />
          ))}
        </div>

        <h3 className="temoins-title mt">Témoignages d’autres personnes accompagnées</h3>
        <div className="temoins-grid">
          {temoignagesAutres.map((t, index) => (
            <CardTemoin
              key={`autre-${index}`}
              nom={t.nom}
              message={t.message}
              image={t.image}
              onRead={() => handleRead(t)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonneTemoignage;
