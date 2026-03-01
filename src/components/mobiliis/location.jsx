import React, { useMemo } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./location.css";

export default function LocationCarousel() {
  const { t } = useTranslation();

  const slidesFromTaxo = useMemo(() => {
    const items = t("locationCarousel.slides", { returnObjects: true });
    return Array.isArray(items) ? items : [];
  }, [t]);

  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      "images/DELF-DALF.avif",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    ],
    []
  );

  const slides = useMemo(() => {
    return slidesFromTaxo.map((s, idx) => ({
      title: s?.title ?? "",
      description: s?.description ?? "",
      img: images[idx] || images[0],
    }));
  }, [slidesFromTaxo, images]);

  return (
    <section className="location-section">
      <Container fluid="md" className="location-container">
        <h2 className="location-title">{t("locationCarousel.title")}</h2>
        <p className="location-subtitle">{t("locationCarousel.subtitle")}</p>

        <div className="location-scroll">
          {slides.map((slide, idx) => (
            <Card key={idx} className="location-card location-slide">
              <Card.Img
                className="location-image"
                variant="top"
                src={slide.img}
                alt={slide.title}
              />

              <Card.Body className="location-body">
                <Card.Title className="location-card-title">{slide.title}</Card.Title>
                <Card.Text className="location-card-text">{slide.description}</Card.Text>

                <span className="discover-link">{t("locationCarousel.discover")}</span>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="locationne">
          <Button className="decouvert">{t("locationCarousel.allNews")}</Button>
        </div>
      </Container>
    </section>
  );
}