import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'



const data = [
    {
        title: 'LUXURY BUS',
        url: '/images/car-rent/delux/taxi-13.jpg'
    },
    {
        title: 'MINI BUS',
        url: '/images/car-rent/delux/taxi-06.jpg'
    },
    {
        title: 'TEMPO TRAVELLER',
        url: '/images/car-rent/delux/taxi-05.jpg'
    },

]

export default function DeluxCoach() {
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
                                    <Card.Text>Air Conditoned Passengers: 32 (including Driver)</Card.Text>
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
