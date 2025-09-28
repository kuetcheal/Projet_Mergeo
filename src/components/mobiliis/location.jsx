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
    img: "https://images.unsplash.com/photo-1602931524607-bce851240504",
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
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
];

export default function LocationCarousel() {
  return (
    
    <section className="py-5 debut">
      <Container fluid="md" className="px-0">
        <h1 className="fw-bold fs-8 pt-2">Découvrir toutes les dernières actualités de Mobiliis ainsi que les communications
          internes de la structure.
        </h1>

        <div className="horizontal-scroll-wrapper">
          {slides.map((slide, idx) => (
            <Card key={idx} className="card-slide">
              <Card.Img variant="top" src={slide.img} alt={slide.title} />
              <Card.Body>
                <Card.Title>{slide.title}</Card.Title>
                <Card.Text>{slide.description}</Card.Text>
                <a href="#" className="discover-link">Découvrir l'actualité →</a>
              </Card.Body>
            </Card>
          ))}
        </div>
         <br />
        <div className="mon-button">
          <Button variant="success" className="btn-discover">
            toutes les actualités
          </Button>
        </div>
      </Container>
    </section>
 
  );
}
