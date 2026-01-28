import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useTranslation } from "react-i18next";

/**
 * Hero Slider (full width) inspiré de ton composant Vue/Element+.
 * - Auto slide (intervalMs)
 * - Overlay + texte
 * - Pagination barres cliquables + animation progress
 * - Scroll indicator
 */
export default function Slider({
  height = 520,
  intervalMs = 4000,
  onPrimaryCta,
}) {
  const { t } = useTranslation();

  // ✅ Mets ici tes slides (tu peux changer images / textes)
  const slides = useMemo(
    () => [
      {
        id: 1,
        eyebrow: "Mobiliis • Expertise et accompagnement",
        title: t("accueil.title"),
        subtitle: t("accueil.description"),
        description:
          "Nous vous accompagnons dans vos projets avec des solutions modernes, fiables et adaptées.",
        ctaLabel: "NOUS CONTACTER",
        image: "/images/belge.jpg",
      },
      {
        id: 2,
        eyebrow: "Immigration • Études • Résidence",
        title: "Des démarches simplifiées",
        subtitle: "Un suivi complet et personnalisé",
        description:
          "De l’analyse du profil à la constitution du dossier, nous vous guidons étape par étape.",
        ctaLabel: "NOUS CONTACTER",
        image: "/images/passport.jpg",
      },
      {
        id: 3,
        eyebrow: "Qualité • Transparence • Résultats",
        title: "Un service orienté réussite",
        subtitle: "Objectif : votre projet aboutit",
        description:
          "Une approche claire, des conseils concrets et une équipe disponible pour vous.",
        ctaLabel: "NOUS CONTACTER",
        image: "/images/catable.jpg",
      },
    ],
    [t]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const goTo = (index) => {
    const safe = (index + slides.length) % slides.length;
    setFade(false);
    window.setTimeout(() => {
      setActiveIndex(safe);
      setFade(true);
    }, 250);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      goTo(activeIndex + 1);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, intervalMs]);

  const slide = slides[activeIndex];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: 700,
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "opacity 0.5s ease-in-out, filter 0.5s ease-in-out",
          opacity: fade ? 1 : 0,
          filter: fade ? "blur(0px)" : "blur(5px)",
          zIndex: 0,
          objectFit: "cover",
          height : 800,
        }}
      />

      {/* Overlay gradient (comme ton Vue) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content container (aligné à gauche, centré verticalement) */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          maxWidth: "1290px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: 560, color: "white" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "0.78rem",
              mb: 1.2,
              color: "#f97373",
            }}
          >
            {slide.eyebrow}
          </Typography>

          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
              lineHeight: 1.15,
              mb: 1.2,
              color: "#A93D87",
            }}
          >
            {slide.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" },
              fontWeight: 500,
              mb: 1,
              color: "whitesmoke",
            }}
          >
            {slide.subtitle}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.7,
              color: "#e5e7eb",
              maxWidth: 520,
              mb: 2.2,
            }}
          >
            {slide.description}
          </Typography>

          <Button
            variant="contained"
            onClick={onPrimaryCta}
            endIcon={<ChevronRightIcon />}
            sx={{
              bgcolor: "#007bff",
              "&:hover": { bgcolor: "#A93D87" },
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "999px",
              width: "fit-content",
            }}
          >
            {slide.ctaLabel}
          </Button>
        </Box>
      </Box>

      {/* Pagination bars (dans le container) */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: { xs: 16, md: 28 },
          width: "100%",
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: "1290px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            gap: "0.6rem",
            alignItems: "center",
          }}
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              style={{
                position: "relative",
                width: 70,
                height: 3,
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                overflow: "hidden",
                padding: 0,
                background: "rgba(255,255,255,0.25)",
              }}
              aria-label={`Aller au slide ${i + 1}`}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  width: i < activeIndex ? "100%" : "0%",
                  background: "#ff4b4b",
                }}
              />
              {i === activeIndex && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "0%",
                    background: "#ff4b4b",
                    animation: `sliderBar ${intervalMs}ms linear forwards`,
                    transformOrigin: "left center",
                  }}
                />
              )}
            </button>
          ))}
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: { xs: 14, md: 30 },
          transform: "translateX(-50%)",
          zIndex: 3,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: "0.35rem",
          color: "#f9fafb",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 60,
            borderRadius: "20px",
            border: "2px solid #f9fafb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ animation: "scrollArrow 1.2s infinite" }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </Typography>
      </Box>

      {/* Keyframes */}
      <style>
        {`
          @keyframes sliderBar {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes scrollArrow {
            0% { opacity: 0; transform: translateY(-4px); }
            40% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(6px); }
          }
        `}
      </style>
    </Box>
  );
}
