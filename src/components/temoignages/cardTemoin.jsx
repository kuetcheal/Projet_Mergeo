import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./cardTemoin.css";

const CardTemoin = ({
  nom,
  message,
  image,
  onRead,
  buttonLabel = "LIRE SON TÉMOIGNAGE",
  className = "",
}) => {
  return (
    <div className={`card card-temoin ${className}`}>
      <div className="card-temoin__avatarWrap">
        <img src={image} alt={nom} className="card-temoin__avatar" />
      </div>

      <div className="card-body card-temoin__body">
        <p className="card-temoin__message">{message}</p>
      <div className="bloc2">
        <h5 className="card-temoin__nom">{nom}</h5>

        <button
          type="button"
          className="card-temoin__readBtn d-inline-flex align-items-center gap-2"
          onClick={onRead}
        >
          {buttonLabel}
          <ChevronRightIcon style={{ fontSize: 20 }} />
        </button>
        </div>
      </div>
    </div>
  );
};

export default CardTemoin;
