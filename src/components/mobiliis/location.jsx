import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./location.css";

const slides = [
  {
    title: "Tokyo",
    description: "Un mélange de technologie moderne et de culture traditionnelle.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Paris",
    description: "La Ville Lumière, connue pour son romantisme et ses monuments emblématiques.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
  {
    title: "Berlin",
    description: "Une histoire riche et une modernité vibrante en un seul endroit.",
    img: "images/DELF-DALF.avif",
  },
  {
    title: "Sydney",
    description: "Des plages à couper le souffle et l'Opéra emblématique.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Tokyo",
    description: "Un mélange de technologie moderne et de culture traditionnelle.",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Tokyo",
    description: "Un mélange de technologie moderne et de culture traditionnelle.",
    img:"images/DELF-DALF.avif",
  },
];

export default function LocationCarousel() {
  return (
    <section className="location-section">
      <Container fluid="md" className="location-container px-0">
        {/* ✅ aligné début */}
        <h2 className="location-title">Nos Dernières activités</h2>

        {/* ✅ aligné début */}
        <p className="location-subtitle">
          Découvrir toutes les dernières actualités de Mobiliis ainsi que les communications
          internes de la structure.
        </p>

        <div className="location-scroll">
          {slides.map((slide, idx) => (
            <Card key={idx} className="location-card location-slide">
              <Card.Img className="location-image" variant="top" src={slide.img} alt={slide.title} />
              <Card.Body className="location-body">
                <Card.Title className="location-card-title">{slide.title}</Card.Title>

                <Card.Text className="location-card-text">
                  {slide.description}
                </Card.Text>

                <p href="#" className="discover-link">
                  Découvrir l'actualité →
                </p>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="locationne">
          <Button className="decouvert">toutes les actualités</Button>
        </div>
      </Container>
    </section>
  );
}
