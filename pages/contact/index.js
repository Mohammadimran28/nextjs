import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WebLayout from '../../layout/web'
import EnqueryForm from '../../component/module/enqueryForm'
import ContactInfo from '../../component/common/contactInfo'
import Head from 'next/head'

Contact.getLayout = function getLayout(page) {
    return (
        <WebLayout>
            {page}
        </WebLayout>
    )
}


export default function Contact() {
    return (
        <section>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/images/title-logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <ContactInfo />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <EnqueryForm title="Your Query" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
