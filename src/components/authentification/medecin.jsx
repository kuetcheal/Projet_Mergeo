import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Temoignages from "../temoignages/temoignage";
import Choix from "../mesChoix/choix";
import Sponsor from "./sponsor";
import Brochure1 from "./brochure1";
import Langue from "../langues/langue";
import Service1 from "../services/service1";
import Presentation1 from "../mobiliis/presentation1";
import Location from "../mobiliis/location";

// ✅ Import du slider
import Slider from "../slider/Slider";

const Medecin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactClick = () => navigate("/contact");
  const handleTemoignageClick = () => navigate("/toutTemoignages");

  // (Tu peux laisser, même si Slider a ses propres images)
  const images = ["/images/bureau.jpeg", "/images/passport.jpg", "/images/catable.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ 1 seul container “standard” réutilisé partout
  const pageContainerSx = {
    maxWidth: "1290px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 4 },
  };

  return (
    <Box width="100%" bgcolor="white" sx={{ overflowX: "hidden" }}>
      {/* ✅ Remplacement du gros bloc hero par le Slider */}
      <Slider height={520} intervalMs={4000} onPrimaryCta={handleContactClick} />

      {/* Sections blanches en container */}
      <Box sx={pageContainerSx}>
        <Box my={{ xs: 3, md: 4 }}>
          <Choix />
        </Box>
      </Box>

      {/* Presentation full width bg + contenu centré (géré par Presentation1) */}
      <Presentation1 />

      {/* Sections blanches en container */}
      <Box sx={pageContainerSx}>
        <Box my={{ xs: 3, md: 4 }}>
          <Service1 />
        </Box>
      </Box>

      {/* ================= TEMOIGNAGES : BG FULL WIDTH + CONTENU EN CONTAINER ================= */}
      <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 4, md: 5 } }}>
        <Box sx={pageContainerSx}>
          <Temoignages />

          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              onClick={handleTemoignageClick}
              sx={{
                backgroundColor: "#1976D2",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
                width: { xs: "100%", sm: 280 },
                maxWidth: 320,
                height: 50,
                "&:hover": { backgroundColor: "#A93D87" },
              }}
            >
              Lire tous les témoignages
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= LOCATION : BG FULL WIDTH + CONTENU EN CONTAINER ================= */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, white 50%, #f9f9f9 50%)",
          py: { xs: 4, md: 5 },
        }}
      >
        <Box sx={pageContainerSx}>
          <Location />
        </Box>
      </Box>

      <Box sx={pageContainerSx}>
        <Box my={{ xs: 4, md: 6 }}>
          <Langue />
        </Box>
        <Box my={{ xs: 3, md: 4 }}>
          <Sponsor />
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 4, md: 5 } }}>
        <Box sx={pageContainerSx}>
          <Brochure1 />
        </Box>
      </Box>
    </Box>
  );
};

export default Medecin;
