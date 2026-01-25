import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./temoignage.css";

const Temoignages = () => {
  const temoignages = [
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

  return (
    <section className="temoignons py-4">
      <div className="container-fluid px-3 px-md-0">
        <h1 className="tit mb-2">Ils nous ont fait confiance</h1>
        <p className="subtitle mb-4">
          Découvrez les témoignages inspirants de nos étudiants et partenaires
        </p>

        <div className="temoignages-scroll">
          {temoignages.map((temoin, index) => (
            <div className="card temoignage-card-slide" key={index}>
              <div className="temoignage-avatar-wrap">
                <img
                  src={temoin.image}
                  alt={temoin.nom}
                  className="temoignage-avatar"
                />
              </div>

              <div className="card-body d-flex flex-column p-2">
                <p className="temoignage-message mb-2">{temoin.message}</p>

                <h5 className="temoignage-nom mb-3">{temoin.nom}</h5>

                {/* ✅ bouton aligné à gauche */}
                <button type="button" className="read-button d-inline-flex align-items-center gap-2">
                  LIRE SON TÉMOIGNAGE
                  <ChevronRightIcon style={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temoignages;
