import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useTranslation } from "react-i18next";

export default function Slider({ height = 520, intervalMs = 4000, onPrimaryCta }) {
  const { t } = useTranslation();

  const images = useMemo(
    () => ["/images/belge.jpg", "/images/passport.jpg", "/images/catable.jpg"],
    []
  );

  const slides = useMemo(
    () => [
      {
        id: 1,
        image: images[0],
        eyebrow: t("slider.slides.0.eyebrow"),
        title: t("slider.slides.0.title"),
        subtitle: t("slider.slides.0.subtitle"),
        description: t("slider.slides.0.description"),
        ctaLabel: t("slider.slides.0.cta")
      },
      {
        id: 2,
        image: images[1],
        eyebrow: t("slider.slides.1.eyebrow"),
        title: t("slider.slides.1.title"),
        subtitle: t("slider.slides.1.subtitle"),
        description: t("slider.slides.1.description"),
        ctaLabel: t("slider.slides.1.cta")
      },
      {
        id: 3,
        image: images[2],
        eyebrow: t("slider.slides.2.eyebrow"),
        title: t("slider.slides.2.title"),
        subtitle: t("slider.slides.2.subtitle"),
        description: t("slider.slides.2.description"),
        ctaLabel: t("slider.slides.2.cta")
      }
    ],
    [t, images]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  const goTo = (index) => {
    const safe = (index + slides.length) % slides.length;
    setFade(false);
    window.setTimeout(() => {
      setActiveIndex(safe);
      setFade(true);
    }, 250);
  };

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      goTo(activeIndex + 1);
    }, intervalMs);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, intervalMs]);

  const slide = slides[activeIndex];

  const handlePrimaryCta = () => {
    if (typeof onPrimaryCta === "function") return onPrimaryCta(slide, activeIndex);
    // fallback possible:
    // window.location.href = "/contact";
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden"
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
          zIndex: 0
        }}
      />

      {/* Overlay gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          maxWidth: "1290px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box sx={{ maxWidth: 560, color: "white" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "0.78rem",
              mb: 1.2,
              color: "#f97373"
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
              color: "#A93D87"
            }}
          >
            {slide.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" },
              fontWeight: 500,
              mb: 1,
              color: "whitesmoke"
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
              mb: 2.2
            }}
          >
            {slide.description}
          </Typography>

          <Button
            variant="contained"
            onClick={handlePrimaryCta}
            endIcon={<ChevronRightIcon />}
            sx={{
              bgcolor: "#007bff",
              "&:hover": { bgcolor: "#A93D87" },
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: "bold",
              px: 3,
              py: 1.2,
              borderRadius: "999px",
              width: "fit-content"
            }}
          >
            {slide.ctaLabel}
          </Button>
        </Box>
      </Box>

      {/* Pagination bars */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: { xs: 16, md: 28 },
          width: "100%",
          zIndex: 3
        }}
      >
        <Box
          sx={{
            maxWidth: "1290px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            gap: "0.6rem",
            alignItems: "center"
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
                background: "rgba(255,255,255,0.25)"
              }}
              aria-label={t("slider.ariaGoTo", { index: i + 1 })}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  width: i < activeIndex ? "100%" : "0%",
                  background: "#ff4b4b"
                }}
              />
              {i === activeIndex && (
                <span
                  key={`${activeIndex}-${intervalMs}`}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "0%",
                    background: "#ff4b4b",
                    animation: `sliderBar ${intervalMs}ms linear forwards`,
                    transformOrigin: "left center"
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
          pointerEvents: "none"
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
            alignItems: "center"
          }}
        >
          <KeyboardDoubleArrowDownIcon sx={{ animation: "scrollArrow 1.2s infinite" }} />
        </Box>

        <Typography
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase"
          }}
        >
          {t("slider.scroll")}
        </Typography>
      </Box>

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