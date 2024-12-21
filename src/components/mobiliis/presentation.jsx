import React from 'react';
import './presentation.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';

const Presentation = () => {
  return (
    <div className="entre">

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
            Présentation Mobiliis
          </p>
          <div className="underline"></div>


        </div>
      </div>
      <div className="presentation-container">




        <h1 className="presentation-title">Une préoccupation</h1>
        <div className="presentation-content">
          <div className="quote-icon">
            <span>&#x275D;</span>
          </div>
          <div className="story-card">
            <div className="story-image">
              <img src='../images/photo_Alex.jpeg' alt="Mergelin TAKOUMBO" />
            </div>
            <div className="story-text">
              <h2>Mergelin TAKOUMBO</h2>
              <p>fondateur de Mobiliis</p>
              <p><strong>une anecdote :</strong> Abuser par des personnes mal-intentionées pour ma procedure de voyage.<br />
                <strong>Une envie :</strong>faciliter le processus pour le projet de voyage à toute personne désireuse.<br />
                <strong>Une destination :</strong> France, SKEMA Business School!
              </p>
              <p>
                Mais le chemin pour m’inscrire à l’école et m’installer à Paris fut difficile. J’ai dû surmonter des obstacles administratifs, bloquer des fonds demandés par le consulat, ouvrir un compte de paiement en France, trouver un garant et un logement. À 24 ans, ces démarches ont été stressantes avant mon départ de Yaoundé et à mon arrivée en France.
              </p>
              <p>
                Cependant, cette expérience m’a fait réaliser que de nombreux étudiants internationaux rencontrent les mêmes difficultés lors de leur mobilité étudiante.
              </p>

            </div>
          </div>
        </div> <br /><br />
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#3c3b6e" }}>
          Un ambition
        </h1>
        <div className="presentation-story">

          <div className="story-text">
            <p style={{ color: 'black', fontSize: '21px', fontWeight: "bold" }}>Créé en 2022, Mobiliis est un cabinet spécialisé dans le conseil en
              stratégie de formation et d’orientation de vos projets d’études et d'immigration en Europe et en Amerique.
              Plaçant l’avenir de vos ambitions au cœur de sa mission. Notre cabinet s’est, depuis le début,
              engagé à satisfaire au mieux leurs inquiétudes, boostant de faite leur carrière de sorte à lui donner
              une dimension internationale. C’est pourquoi nous avons noué des partenariats soudés avec les plus prestigieuses
              universités et grandes écoles du monde pour garantir un avenir sûr et des chances de succès réelles à nos étudiants.</p>
          </div>
          <div className="story-video">
            <iframe
              width="500"
              height="350"
              borderRadius="5"
              src="https://www.youtube.com/embed/LTAhX568Esk"
              title="Bridge To Study Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <br /><br />

        <section style={{ textAlign: "center", margin: "20px 0" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#3c3b6e" }}>
            NOTRE CULTURE ORGANISATIONNELLE
          </h1>
          <p style={{ margin: "20px auto", maxWidth: "900px", lineHeight: "1.5", fontSize: "18px", fontWeight: "bold" }}>
            La culture organisationnelle de Bridge To Study se résume en un ensemble de critères qui définissent notre fonctionnement, notre identité,
            notre esprit de travail et nous distinguent de nos concurrents. Elle repose sur plusieurs traits de caractère
            et des orientations partagées par l'ensemble de notre personnel. Il s’agit entre autres de valeurs communes,
            qui décrivent notre sens élevé du métier, nos rites et notre méthode de travail au quotidien. Ces vertus essentielles,
            sont adossées sur un professionnalisme et une culture du résultat qui nous permettent de jouir d'une croissance durable.
          </p>
        </section>


        {/* Section à trois colonnes */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {/* Engagement */}
          <div
            style={{
              backgroundColor: "#f7931e",
              color: "#fff",
              padding: "20px",
              margin: "10px",
              flex: "1 1 30%",
              minWidth: "250px",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Notre Engagement</h2>
            <p style={{ lineHeight: "1.5" }}>
              Parce que le sujet de votre avenir exige que l'on vous mette sur un chemin éclairé sans ambiguïté, nous nous engageons à fournir des services de qualité qui répondent parfaitement à vos besoins, attentes et aspirations.
              Nous nous adaptons ainsi aux évolutions du métier en innovant par des pratiques et de nouvelles façons de faire axées sur les exigences des universités.
            </p>
            <p>
              Placer les étudiants au cœur de nos préoccupations, nous donne conscience de notre engagement fort... en vue d'un bonheur partagé et des expériences multiples.
            </p>
          </div>

          {/* Mission */}
          <div
            style={{
              backgroundColor: "#f7931e",
              color: "#fff",
              padding: "20px",
              margin: "10px",
              flex: "1 1 30%",
              minWidth: "250px",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Notre Mission !</h2>
            <p style={{ lineHeight: "1.5" }}>
              Référence en matière d'orientation scolaire et professionnelle, Bridge To Study a pour mission d'offrir des solutions efficaces toujours adaptées, visant à réaliser le rêve de chaque élève et étudiant.
            </p>
            <p>
              Notre rôle majeur est de comprendre les défis actuels du monde des universités et d'aider chaque jeune à exprimer son plein potentiel.
            </p>
          </div>

          {/* Vision */}
          <div
            style={{
              backgroundColor: "#f7931e",
              color: "#fff",
              padding: "20px",
              margin: "10px",
              flex: "1 1 30%",
              minWidth: "300px",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Notre Vision !</h2>
            <p style={{ lineHeight: "1.5" }}>
              Notre vision est de devenir un partenaire stratégique des élèves et étudiants dans leurs projets d'études, en leur fournissant des services à grande valeur ajoutée ainsi que des solutions alliant innovation et efficacité.
            </p>
            <p>
              Cette vision peut donc se résumer à : contribuer efficacement à la formation et à la réussite des élèves et étudiants.
            </p>
          </div>
        </div><br /><br />
        <div className="statistics-section">
          <h2>Mobiliis et ses statistiques</h2>
          <div className="statistics-container">
            <div className="stat-item">
              <PeopleAltIcon className="stat-icon" />
              <h3>+100</h3>
              <h4>étudiants accompagnés</h4>
            </div>
            <div className="stat-item">
              <SchoolIcon className="stat-icon" />
              <h3>100%</h3>
              <h4>de projets d'études et d'immigrations concrétisés</h4>
            </div>
            <div className="stat-item">
              <PublicIcon className="stat-icon" />
              <h3>6</h3>
              <h4>pays où nous sommes présents</h4>
            </div>
            <div className="stat-item">
              <GroupsIcon className="stat-icon" />
              <h3>+15</h3>
              <h4>collaborateurs dans le monde</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
