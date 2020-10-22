import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home () {
    return (
        <div>
            <Container>
                <Row>
                    <Col >
                        <Image src="/images/logo192.png" roundedCircle />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Hey guys! My name is Ricardo Manosalvas and I am a Full Stack Developer and let me tell you how I got here. I was born 
                        in South America and moved to the states when I was just two years old. For practically my whole life I have lived in 
                        Northern Virginia. I went to Lynchburg College, now known as University of Lynchburg, to play soccer and graduated with 
                        a B.S. in Exercise Physiology.</p>
                    </Col>
                    <Col>
                        <p>After college I moved to Arlington, VA, where I became a personal trainer. During this time I learned a lot about running
                        a business and self promotion. After a couple succesful years as a personal trainer I advanced to a Fitness Manager position in a
                        gym in Washington, DC. Here I used the tools learned during my time as a trainer to lead my team of six and help them promote their own personal brand.
                        </p>
                    </Col>
                    <Col>
                        <p>After college I moved to Arlington, VA, where I became a personal trainer. During this time I learned a lot about running
                        a business and self promotion. After a couple succesful years as a personal trainer I advanced to a Fitness Manager position in a
                        gym in Washington, DC. Here I used the tools learned during my time as a trainer to lead my team of six and help them promote their own personal brand.
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;