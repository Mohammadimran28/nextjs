import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Aboutsection() {
    return (
        <>
            <Container className='about-head py-4'>
                <h3>About Us</h3>
            </Container>
            <section className="about-section py-4">
                <Container>
                    <Row>
                        <Col lg={6} sm={12}>
                            <Card className='card'>
                                <Card.Img src="/images/about-section/about-01.jpeg" />
                            </Card>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='about'>
                                <h3>Welcome to Reeda Udaipur Taxi Service</h3>
                                <Card.Text>One way taxi service also available</Card.Text>
                                <Card.Body>
                                    <Card.Text>You can choose a package or design one as per your requirements and desires.</Card.Text>
                                    <Card.Text>Reeda Tours has been established in Udaipur. We are giving our best Taxi Service. Book our Taxi for Long-Short Tour, Sightseeing, Wedding and etc. Reeda Cabs is here to provide you with the most premium quality Taxi services in Udaipur. We provide you with all kinds of Taxi services whether its Airport taxi, local taxi or outstation taxi, we will assure you that our rates are affordable and best among all cabs in Udaipur.
                                    </Card.Text>
                                    <Button>Book Now</Button>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

