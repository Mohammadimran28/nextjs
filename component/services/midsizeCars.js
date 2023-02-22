import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'



const data = [
    {
        title: 'TOYOTA INNOVA CRYSTA',
        url: '/images/car-rent/mid-size/taxi-04.jpg'
    },
    {
        title: 'TOYOTA INNOVA',
        url: '/images/car-rent/mid-size/taxi-03.jpg'
    },
    {
        title: 'CHEVROLET TAVERA',
        url: '/images/car-rent/mid-size/taxi-08.jpg'
    },

]

export default function MidsizeCar() {
    return (
        <section className='home-details'>
            <div className='header-container'>
                <h2>Mid-Size Cars</h2>
            </div>

            <Row>

                {data && data.map((value, index) => {
                    
                    return (
                        <Col key={`card-${index}`} md={4} className="mb-2">
                            <Card>
                                <Card.Img variant="top" src={value.url} />
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text>Air Conditoned Passengers: 7 (including Driver)</Card.Text>
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
