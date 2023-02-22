import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Textbox from '../form/textbox';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const EnqueryFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string()
        .min(10, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
});


export default function EnqueryForm(props) {
    const { title } = props
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            country: '',
            message: '',
        },
        validationSchema: EnqueryFormSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    console.log('formik', formik)

    return (
        <section className='enquery-section'>
            <Container className='mt-4'>
                <h3>{title}</h3>
                <form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col sm={12} md={6}>
                            <Textbox label="Name" className="textbox" name="name" value={formik.values.name} placeholder="Full Name" onChange={formik.handleChange} error={formik.errors.name} />
                        </Col>
                        <Col sm={12} md={6}>
                            <Textbox label="Email" name="email" value={formik.values.email} placeholder="Your Email" onChange={formik.handleChange} error={formik.errors.email} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6}>
                            <Textbox label="Phone Number" name="phone" value={formik.values.phone} placeholder="Your Phone Number" onChange={formik.handleChange} error={formik.errors.phone} />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label htmlFor="inputPassword5">Taxi</Form.Label>
                            <Form.Select>
                                <option>Swift Dzire </option>.
                                <option>Toyota Etios </option>
                                <option>Toyota Innova</option>
                                <option>Toyota Innova Crysta</option>
                                <option>Tempo Traveller 14 Str.</option>
                                <option>Tempo Traveller 17 Str.</option>
                                <option>Mini Coach</option>
                            </Form.Select>

                            {/* <Textbox label="Country" name="country" value={formik.values.country} placeholder="Select Country" onChange={formik.handleChange} error={formik.errors.country} /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Textbox label="Message" name="message" value={formik.values.message} placeholder="Your Message" onChange={formik.handleChange} as="textarea" rows={3} error={formik.errors.message} />
                    </Row>
                    <Button type="submit" variant="primary">Send Message</Button>
                </form>
            </Container>
        </section>
    )
}
