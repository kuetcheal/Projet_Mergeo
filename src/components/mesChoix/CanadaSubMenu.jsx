import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const CanadaSubMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { path: "/immigrer-canada", label: "Immigrer au Canada" },
    { path: "/canada", label: "Étudier au Canada" },
    { path: "/residence-permanente", label: "Résidence permanente" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "900px",
        margin: "0 auto 30px",
        gap: "40x",
      }}
    >
      {links.map((link) => (
        <Typography
          key={link.path}
          onClick={() => navigate(link.path)}
          sx={{
            cursor: "pointer",
            fontSize: "26px",
            fontWeight: "bold",
            color: location.pathname === link.path ? "#D6007F" : "#000",
            textAlign: "center",
            "&:hover": {
              textDecoration: location.pathname === link.path ? "none" : "underline",
            },
          }}
        >
          {link.label}
        </Typography>
      ))}
    </Box>
  );
};

export default CanadaSubMenu;
