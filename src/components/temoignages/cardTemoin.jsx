import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CardTemoin = ({
  nom,
  message,
  image,
  onRead,
  buttonLabel = "LIRE SON TÉMOIGNAGE",
  className = "",
}) => {
  return (
    <article
      className={[
        // largeur + padding adaptés
        "w-full max-w-[280px] md:max-w-[320px]",
        "rounded-2xl bg-white shadow-sm ring-1 ring-black/10",
        "px-4 pt-5 pb-4 md:px-5 md:pt-6",
        "transition hover:-translate-y-1 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {/* Avatar */}
      <div className="mx-auto mb-3 h-20 w-20 md:mb-4 md:h-24 md:w-24 overflow-hidden rounded-full ring-2 ring-black/10">
        <img src={image} alt={nom} className="h-full w-full object-cover" />
      </div>

      {/* Message */}
      <p className="line-clamp-4 md:line-clamp-5 text-center text-xs md:text-sm italic leading-relaxed text-black/60">
        {message}
      </p>

      {/* Bas de card */}
      <div className="mt-3 md:mt-4 flex flex-col items-center">
        <h5 className="text-center text-sm md:text-base font-extrabold text-black/80">
          {nom}
        </h5>

        <button
          type="button"
          onClick={onRead}
          className="mt-3 md:mt-4 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#1976D2] px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm font-extrabold text-white hover:bg-[#A93D87]"
        >
          {buttonLabel}
          <ChevronRightIcon sx={{ fontSize: 18 }} />
        </button>
      </div>
    </article>
  );
};

export default CardTemoin;
