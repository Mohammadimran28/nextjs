import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMapLocation, faMobile, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

export default function ContactInfo() {
    return (
        <section className='section-contact'>
            <Container className='mt-4'>
                <Card>
                    <Card.Body>
                        <Stack>
                            <Card.Title>Contact Info</Card.Title>
                        </Stack>
                        <Row>
                            <Col lg={2}>
                                <FontAwesomeIcon icon={faUser} />
                            </Col>
                            <Col lg={10}>
                                Reeda Udaipur
                            </Col>
                            <Col lg={2} className='mt-4'>
                                <FontAwesomeIcon icon={faMapLocation} />
                            </Col>
                            <Col lg={10} className='mt-2'>
                                VISIT US
                                <p>Malla Talai, Near Radisson Blu Hotel, Udaipur (RAJ.) 313001 India</p>
                            </Col>
                            <Col lg={2} className='mt-2'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Col>
                            <Col lg={10}>
                                MAIL US
                                <p>Reedaudaipurtaxi@gmail.com</p>
                            </Col>
                            <Col lg={2} className='mt-2'>
                                <FontAwesomeIcon icon={faMobile} />
                            </Col>
                            <Col lg={10}>
                                CALL US
                                <p>+91 8619589765  +91 9929010696</p>
                            </Col>
                            <Col lg={2} className='mt-2'>
                                <FontAwesomeIcon icon={faShare} />
                            </Col>
                            <Col lg={10}>
                                <Stack direction='horizontal' gap={3}>
                                    <SocialIcon url="https://www.facebook.com//" bgColor="#000" />
                                    <SocialIcon url="https://www.instagram.com/" bgColor="#000" />
                                    <SocialIcon url="https://www.tripadvisor.in" bgColor="#000" />
                                </Stack>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}
