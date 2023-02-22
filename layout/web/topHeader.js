import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import SocialLinks from '../../component/socialLinks'
import { TopContactDetail } from '../../component/topContactDetail'

export default function WebTopHeader() {
    return (
        <section className='top-header'>
            <Container>
                <Row className='flex-md-row'>
                    <Col lg={8} md={9} sm={6} xs={6}>
                        <TopContactDetail />
                    </Col>
                    <Col lg={4} md={3} sm={6} xs={6}>
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
