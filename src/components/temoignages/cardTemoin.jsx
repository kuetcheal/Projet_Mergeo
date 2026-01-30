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
        "w-full max-w-[320px] rounded-2xl bg-white shadow-sm ring-1 ring-black/10",
        "px-5 pt-6 pb-4",
        "transition hover:-translate-y-1 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {/* Avatar */}
      <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-black/10">
        <img src={image} alt={nom} className="h-full w-full object-cover" />
      </div>

      {/* Message */}
      <p className="line-clamp-5 text-center text-sm italic leading-relaxed text-black/60">
        {message}
      </p>

      {/* Bas de card */}
      <div className="mt-4 flex flex-col items-center">
        <h5 className="text-center text-base font-extrabold text-black/80">
          {nom}
        </h5>

        <button
          type="button"
          onClick={onRead}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1976D2] px-4 py-3 text-sm font-extrabold text-white hover:bg-[#A93D87]"
        >
          {buttonLabel}
          <ChevronRightIcon sx={{ fontSize: 20 }} />
        </button>
      </div>
    </article>
  );
};

export default CardTemoin;
