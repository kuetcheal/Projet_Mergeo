import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { temoignages } from "../../data/temoignages";
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
                        className="mt-4 inline-flex items-center gap-2  px-4 py-2 text-sm font-bold hover:bg-black/5"
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
    {/* HERO BANNER (au-dessus du bouton retour) */}
    <div className="relative h-[220px] w-full overflow-hidden md:h-[320px]">
      <img
        src="/images/quebec.jpg"
        alt="Background"
        className="h-full w-full object-cover"
      />

      {/* overlay sombre */}
      <div className="absolute inset-0 bg-black/40" />

      {/* contenu centré */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <div>
          <p className="text-2xl font-extrabold text-white md:text-4xl">
            Ils témoignent
            <br />
            pour nous
          </p>

          <div className="mx-auto mt-3 h-1 w-20 bg-[#A93D87]" />
        </div>
      </div>
    </div>

    {/* CONTENU PAGE */}
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
      {/* Retour */}
      <button
        className="mb-4 inline-flex items-center gap-2 px-4 py-2 text-xl font-bold hover:bg-black/5"
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
              : "de personne accompagnée"}
          </p>
        </div>
      </div>

      {/* Citation */}
      <figure className="mt-6">
        <blockquote className="relative rounded-2xl bg-[#f7f7fb] p-5 md:p-6 ring-1 ring-black/10">
          <span className="pointer-events-none absolute -top-4 left-5 text-6xl font-black text-black/10 md:text-7xl">
            “
          </span>

          <p className="border-l-4 border-[#A93D87] pl-4 text-sm font-bold leading-snug text-black md:text-3xl md:leading-tight italic">
            « {temoin.describe} »
          </p>
        </blockquote>
      </figure>

      {/* Video */}
      <div className="mt-6">
        {temoin.videoType === "youtube" ? (
          <div className="aspect-video w-full overflow-hidden  bg-black shadow-sm ring-1 ring-black/10">
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
    </div>

    {/* Carousel en bas */}
    <div className="mt-10">
      <Temoignage />
    </div>
  </div>
);

};

export default TemoignageSlug;
