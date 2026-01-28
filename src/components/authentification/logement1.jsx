import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './logement1.css';

const Logement = () => {
 // const navigate = useNavigate();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission can be added here
  };

  return (
    <div className="d-flex justify-content-between">
      {/* Housing Listings */}
      <div className="w-75">
        <Row className="mb-3">
          {/* Display 5 Housing Listings */}
          {Array.from({ length: 5 }).map((_, index) => (
            <Col md={4} key={index}>
              <Card className="housing-card">
                <Card.Img variant="top" src={`https://picsum.photos/200/300?random=${index}`} />
                <Card.Body>
                  <Card.Title>Logement {index + 1}</Card.Title>
                  <Card.Text>
                    385.00€<br />
                    Plongez dans ce superbe logement. Vous pourrez profiter d'un espace spacieux, de pièces communes meublées…
                  </Card.Text>
                  <Button variant="primary">Voir plus</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Fixed Contact Form */}
      <div className="w-25">
        <Card className="p-3">
          <Card.Title>Contactez-nous si vous avez un soucis</Card.Title>
          <Form onSubmit={handleContactSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCaptcha">
              <Form.Label>3 + 6 =</Form.Label>
              <Form.Control type="text" placeholder="Answer" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoi
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Logement;
