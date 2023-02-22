import { useRouter } from 'next/router';
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'


const data = [
    {
        title: 'Toyota Etios',
        url: '/images/home-serives/etios.jpg'
    },
    {
        title: 'Swift Dzire',
        url: '/images/home-serives/swift.jpg'
    },
    {
        title: 'Toyota Innova',
        url: '/images/home-serives/innova.jpg'
    },
    {
        title: 'Toyota Innova Crysta',
        url: '/images/home-serives/crysta.jpg'
    },
    {
        title: 'Tempo Traveller',
        url: '/images/home-serives/tempo.jpg'
    },
    {
        title: 'Mini Coach',
        url: '/images/home-serives/bus.jpg'
    }
]

export default function HomeSerives() {
    const router = useRouter()
    return (
        <section className='home-details'>
            <Container>
                <div className='header-container'>
                    <h2>Our services!</h2>
                    <h3>Oneway taxi available</h3>
                </div>
                <Row>
                    {data && data.map((value, index) => {

                        return (
                            <Col key={`card-${index}`} md={4} className="mb-2">
                            <Card>
                                        <Card.Img variant="top" src={value.url} />
                                        <Card.Body>
                                            <Card.Title>{value.title}</Card.Title>
                                            <div className='book-only d-lg-block d-md-block d-sm-none'>
                                                <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button >
                                            </div>
                                            <a href="tel:+91 8619589765">
                                                <div className='book-call d-lg-none d-md-none d-sm-block'>
                                                    <Button variant="primary">Book Now</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
