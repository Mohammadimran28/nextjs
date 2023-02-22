import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';


const data = [
  {
    title: 'GOLDEN LEAF',
    url: '/images/home-tour/udaiur.jpg'
  },
  {
    title: 'NORTH TOURS',
    url: '/images/home-tour/arrival-delhi.jpg'
  },
  {
    title: 'SOUTH TOURS',
    url: '/images/home-tour/south.jpg'
  },
  {
    title: 'ROYAL RAJASTHAN',
    url: '/images/home-tour/jaipur.jpg'
  }
]

const HomeTour = () => {
  return (
    <>
      <section className='home-details'>
        <div className='header-container'>
          <h2>Udaipur Sightseeing!</h2>
          <p>Reeda Udaipur offers exclusive Rajasthan and Udaipur Package Tours specially designed for individual traveler.</p>
        </div>
      </section>
      <Container className='home-tour'>
        <Row>
          {data && data.map((value, index) => {
            const image = value.url
            return (
              <Col key={`card-${index}`} lg={3} md={6} sm={12} className="mb-2" >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={value.url} />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Button variant="primary" id='btn'>view Package</Button>
                  </Card.Body>
                </Card>
              </Col>

            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default HomeTour