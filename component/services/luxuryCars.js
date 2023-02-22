import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'



const data = [
    {
        title: 'MERCEDES BENZ',
        url: '/images/car-rent/luxury/taxi-09.jpg'
    },
    {
        title: 'TOYOTA CAMRY',
        url: '/images/car-rent/luxury/taxi-11.jpg'
    },
    {
        title: 'BMW',
        url: '/images/car-rent/luxury/taxi-10.jpg'
    },
    {
        title: 'OPEN MERCEDES-BENZ',
        url: '/images/car-rent/luxury/taxi-12.jpg'
    }

]

export default function LuxuryCars() {
    return (
        <section className='home-details'>
            <div className='header-container'>
                <h2>Economy Cars</h2>
            </div>

            <Row>

                {data && data.map((value, index) => {
                    
                    return (
                        <Col key={`card-${index}`} md={4} className="mb-2">
                            <Card>
                                <Card.Img variant="top" src={value.url} />
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>Air Conditoned Passengers: 4 (including Driver)</Card.Text>
                                    <Button variant="primary" id='btn'>Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </section>
    )
}
