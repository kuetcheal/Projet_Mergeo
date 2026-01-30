export const temoignages = [
  {
    slug: "alex-kuetche",
    nom: "Alex KUETCHE",
    categorie: "etudiants",
    describe : "j'ai parcouru plusieurs centres en vain pour m'aider dans ma procédure de voyage pour étudier en France, j'ai essuyé echec après échec jusqu'au jour où j'ai decouvert mobiliis et grâce à leur accompagnement j'ai réussi à obtenir mon visa étudiat pour la France",
    image: "/images/photo_Alex.jpeg",

    // ✅ video : soit youtube (recommandé), soit mp4
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/Mrc2cm5VXIc",

    // ✅ narration : court texte + points
    narration: {
      titre: "Un accompagnement clair du début à la fin",
      texte:
        "Bojer a été accompagné dans la constitution de son dossier et la préparation des démarches. Grâce à un suivi rigoureux, il a pu avancer sereinement et éviter les erreurs fréquentes.",
      points: [
        "Orientation sur le projet de voyage",
        "Constitution et vérification du dossier",
        "Conseils et préparation avant dépôt",
        "Suivi jusqu’au résultat",
      ],
    },
  },

  {
    slug: "hubert-castelnau",
    nom: "Hubert CASTELNAU",
    categorie: "etudiants",
    image: "/images/avion.jpg",
    videoType: "mp4",
    videoUrl: "https://www.youtube.com/embed/yGJLE1UXBjo",
    narration: {
      titre: "Un dossier solide et bien structuré",
      texte:
        "Hubert a apprécié la méthode de travail et la réactivité de l’équipe. Chaque étape était expliquée simplement avec un suivi régulier.",
      points: ["Dossier complet", "Réactivité", "Conseils personnalisés"],
    },
  },
];
