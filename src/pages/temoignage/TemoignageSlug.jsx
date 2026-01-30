import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { temoignages } from "../../data/temoignages";

// ✅ ton carousel existant
import Temoignage from "../../components/temoignages/temoignage";

const TemoignageSlug = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const temoin = temoignages.find((t) => t.slug === slug);

  if (!temoin) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-10">
          <h2 className="text-2xl font-extrabold">Témoignage introuvable</h2>
          <button
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/5"
            onClick={() => navigate(-1)}
          >
            ← Retour
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
        {/* Retour */}
        <button
          className="mb-5 inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-black/5"
          onClick={() => navigate(-1)}
        >
          ← Retour aux témoignages
        </button>

        {/* Hero */}
        <div className="flex items-center gap-4">
          <img
            src={temoin.image}
            alt={temoin.nom}
            className="h-[78px] w-[78px] rounded-full object-cover ring-2 ring-black/10 md:h-[90px] md:w-[90px]"
          />

          <div>
            <h1 className="text-2xl font-extrabold leading-tight md:text-3xl">
              {temoin.nom}
            </h1>
            <p className="mt-1 text-sm text-black/60">
              Témoignage{" "}
              {temoin.categorie === "etudiants"
                ? "d’étudiant accompagné"
                : "de personne accompagnée"}{" "}
              — Mobiliis
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="mt-6">
          {temoin.videoType === "youtube" ? (
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-sm ring-1 ring-black/10">
              <iframe
                src={temoin.videoUrl}
                title={`Video ${temoin.nom}`}
                className="h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              className="w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/10"
              controls
            >
              <source src={temoin.videoUrl} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          )}
        </div>

        {/* Narration */}
        <div className="mt-6 rounded-2xl bg-[#f7f7fb] p-5 ring-1 ring-black/10">
          <h2 className="text-lg font-extrabold text-[#A93D87] md:text-xl">
            {temoin.narration?.titre || "Un accompagnement sur mesure"}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-black/75 md:text-base">
            {temoin.narration?.texte}
          </p>

          {!!temoin.narration?.points?.length && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/75 md:text-base">
              {temoin.narration.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl border border-black/10 p-5">
          <h3 className="text-base font-extrabold md:text-lg">
            Vous avez un projet de voyage ?
          </h3>
          <p className="mt-1 text-sm text-black/70 md:text-base">
            Dites-nous votre destination, on vous guide étape par étape.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center rounded-xl bg-[#A93D87] px-5 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
            >
              Nous contacter
            </button>

            <button
              onClick={() => navigate("/temoignage")}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-2.5 text-sm font-extrabold hover:bg-black/5"
            >
              Voir tous les témoignages
            </button>
          </div>
        </div>

        {/* Carousel en bas */}
        <div className="mt-10">
          <h3 className="mb-3 text-lg font-extrabold md:text-xl">
            Autres témoignages
          </h3>
          <Temoignage />
        </div>
      </div>
    </div>
  );
};

export default TemoignageSlug;
