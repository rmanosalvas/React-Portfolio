import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

function Contact () {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Contact Me:</h1>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={8}>
                    <Form>
                        <Form.Group >
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="name" placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Subject:</Form.Label>
                            <Form.Control type="subject" placeholder="Create me a website..." />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit" variant="secondary" size='lg'>Talk to you soon!</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;