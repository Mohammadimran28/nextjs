import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import { Accordion, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export default function HomeDetails() {
    const router = useRouter()
    return (
        <section className='home-details'>
            <Container>
                <div className='header-container'>
                    <h2>Tours</h2>
                    <p>Oneway taxi available</p>
                </div>
                <Row>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/udaipur.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>UDAIPUR TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">City Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">Lake Pichola</ListGroup.Item>
                                                <ListGroup.Item as="li">Jagmandir</ListGroup.Item>
                                                <ListGroup.Item as="li">Jagdish Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Saheliyon Ki Bari</ListGroup.Item>
                                                <ListGroup.Item as="li">Sajjangarh Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">Fateh Sagar Lake</ListGroup.Item>
                                                <ListGroup.Item as="li">Udaisagar Lake</ListGroup.Item>
                                                <ListGroup.Item as="li">Doodh Talai</ListGroup.Item>
                                                <ListGroup.Item as="li">Maharana Pratap Memorial</ListGroup.Item>
                                                <ListGroup.Item as="li">Vintage Car Museum</ListGroup.Item>
                                                 <ListGroup.Item as="li">Gulab Bagh</ListGroup.Item>
                                                <ListGroup.Item as="li">Ropeway</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/jaipur.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>JAIPUR TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Amber Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">City Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">Hawa mahal</ListGroup.Item>
                                                <ListGroup.Item as="li">Jgh Jantar Mantar</ListGroup.Item>
                                                <ListGroup.Item as="li">Nahargarh Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Albert Hall Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Birla Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Jaigarh Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Galtaji Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Pink Pearl Resort And Fun CIty</ListGroup.Item>
                                                <ListGroup.Item as="li">Jal Mahal</ListGroup.Item>
                                                <ListGroup.Item as="li">Panna Meena ka Kund</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/jodhpur.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>JODHPUR TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Mehrangarh Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Khejarla Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Umaid Bhawan Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">Moti Mahal</ListGroup.Item>
                                                <ListGroup.Item as="li">Sheesh Mahal</ListGroup.Item>
                                                <ListGroup.Item as="li">Phool Mahal</ListGroup.Item>
                                                <ListGroup.Item as="li">Chamunda Mataji Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Sardar Government Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Jaswant Thada</ListGroup.Item>
                                                <ListGroup.Item as="li">Ghanta Ghar</ListGroup.Item>
                                                <ListGroup.Item as="li">Sardar Samand Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">Mandore</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/ajmer.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>AJMER TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Ajmer Sharif Dargah</ListGroup.Item>
                                                <ListGroup.Item as="li">Taragarh Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Adhai Din Ka Jhonpda</ListGroup.Item>
                                                <ListGroup.Item as="li">Akari Fort & Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Anasagar Lake</ListGroup.Item>
                                                <ListGroup.Item as="li">Soniji ki Nasiyan</ListGroup.Item>
                                                <ListGroup.Item as="li">Pushkar</ListGroup.Item>
                                                <ListGroup.Item as="li">Nasiyan Jain Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Durga Bag Gardens</ListGroup.Item>
                                                <ListGroup.Item as="li">Nareli Jain Temple</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/jaisalmer1.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>JAISALMER TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Jaisalmer Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Bada Bagh</ListGroup.Item>
                                                <ListGroup.Item as="li">Patwon-Ki-Haveli</ListGroup.Item>
                                                <ListGroup.Item as="li">Sam Sand Dunes</ListGroup.Item>
                                                <ListGroup.Item as="li">The Thar Heritage Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Gadisar Lake</ListGroup.Item>
                                                <ListGroup.Item as="li">Nathmal-ki-Haveli</ListGroup.Item>
                                                <ListGroup.Item as="li">Jain Temples</ListGroup.Item>
                                                <ListGroup.Item as="li">Salim Singh Ki Haveli</ListGroup.Item>
                                                <ListGroup.Item as="li">Kuldhara</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-2">
                        <Card>
                            <Card.Img variant="top" src="/images/home-detail/bikaner.jpg" />
                            <Card.Body>
                                <Accordion className='mb-3'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>BIKANER TOURIST PLACES</Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item as="li">Junagarh Fort</ListGroup.Item>
                                                <ListGroup.Item as="li">Lalgarh Palace</ListGroup.Item>
                                                <ListGroup.Item as="li">National Research Centre on Camel</ListGroup.Item>
                                                <ListGroup.Item as="li">Shri Laxminath Temple</ListGroup.Item>
                                                <ListGroup.Item as="li">Ganga Singh Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Sadul Singh Museum</ListGroup.Item>
                                                <ListGroup.Item as="li">Jain Temple</ListGroup.Item>
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className='book-only d-lg-block d-md-block d-sm-none'>
                                    <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
                                </div>
                                <a href="tel:+91 8619589765">
                                    <div className='book-call d-lg-none d-md-none d-sm-block'>
                                        <Button variant="primary">Book Now</Button>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* {data && data.map((value, index) => {
                        return (
                            <Col key={`card-${index}`} md={4} className="mb-2">
                                <Card>
                                    <Card.Img variant="top" src={value.url} />
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <p>{value.detail}</p>
                                        <div className='book-only d-lg-block d-md-block d-sm-none'>
                                            <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button>
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
                    })} */}
                </Row>
            </Container>
        </section>
    )
}
