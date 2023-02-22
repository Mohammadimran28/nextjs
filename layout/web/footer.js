import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone, faTree } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Col, Container, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap'
import SocialLinks from '../../component/socialLinks'
import Link from 'next/link'

export default function WebFooter() {
  const today = new Date()
  const year = today.getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={2} md={6} sm={12}>
            <h3>Quick Link</h3>

            <ListGroup>
              <ListGroup.Item>
                <Link href="/">Home</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Udaipur Activities</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Rajasthan Package</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Our Services</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">About Us</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Contact Us</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <h3>Day Tours</h3>
            <ListGroup>
              <ListGroup.Item>
                <Link href="/">Udaipur Day Tour</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Kumbhalgarh-Haldighati Tour</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Ranakpur-Kumbhalgarh Tour</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Ekling Ji-Haldighati-Nathdwara Tour</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Chittorgarh Day Tour</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Mount Abu Day Tour</Link>
              </ListGroup.Item>
            </ListGroup>

          </Col>
          <Col lg={2} md={6} sm={12}>
            <h3>Car Rental</h3>
            <ListGroup>
              <ListGroup.Item>
                <Link href="/">Swift Dzire</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Toyota Etios</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Toyota Innova</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Toyota Innova Crysta</Link>
              </ListGroup.Item>
          
              <ListGroup.Item>
                <Link href="/">Tempo Traveller</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link href="/">Mini Coach</Link>
              </ListGroup.Item>
              <ListGroup.Item>
              

              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={5} md={6} sm={12}>
            <h3>Need Travel Help ?</h3>
            <ListGroup>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTree} />
                <Link href="/">  Reeda Udaipur Taxi Service </Link>
              </ListGroup.Item>
              <ListGroupItem>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Link href="/">  Malla Talai, Near Radisson Blu Hotel, Udaipur (Raj.)  313001 India</Link>
              </ListGroupItem>

              <ListGroupItem>
                <FontAwesomeIcon icon={faWhatsapp} />
                <a href='tel:+91 8619589765'>     +91 8619589765</a>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+91 9929010696">     +91 9929010696  </a>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:reedaudaipurtaxi@gmail.com"> Reedaudaipurtaxi@gmail.com</a>

              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <hr />
      <Container>
        <Stack direction='horizontal'>
          <div>
            © {year} Reeda Udaipur. All rights reserved
          </div>

          <SocialLinks />

        </Stack>
      </Container>
    </footer>
  )
}
