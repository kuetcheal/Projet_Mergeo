import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./index.css";

const slides = [
    {
        title: "New York City",
        description: "The Big Apple, featuring stunning architecture and vibrant culture.",
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    },
    {
        title: "Tokyo",
        description: "A blend of modern technology and traditional culture.",
        img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    },
    {
        title: "Paris",
        description: "The City of Light, known for its romance and iconic landmarks.",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    },
    {
        title: "Berlin",
        description: "Rich history and vibrant modernity in one place.",
        img: "https://images.unsplash.com/photo-1602931524607-bce851240504",
    },
    {
        title: "Sydney",
        description: "Stunning beaches and iconic Opera House.",
        img: "https://images.unsplash.com/photo-1506976785307-8732e854ad6c",
    },
];

export default function LocationCarousel() {
    return (
        <section className="bg-light py-5">
            <Container>
                <h2 className="text-start mb-4">Découvrir nos dernières actualités</h2>
                

                <div className="horizontal-scroll-wrapper">
                    {slides.map((slide, idx) => (
                        <Card key={idx} className="card-slide">
                            <Card.Img variant="top" src={slide.img} />
                            <Card.Body>
                                <Card.Title>{slide.title}</Card.Title>
                                <Card.Text>{slide.description}</Card.Text>
                                <a href="http://" className="discover-link">
                                    Découvrir l'actualité →
                                </a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="mt-5 text-start">
                    <Button variant="success" className="btn-discover">
                        toutes les actualités
                    </Button>
                </div>

            </Container>
        </section>
    );
}
