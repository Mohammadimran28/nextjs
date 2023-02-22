import React from 'react'
import WebLayout from "../../layout/web/index"
import Image from 'react-bootstrap/Image'
import { Card, Col, Container, Row } from 'react-bootstrap'
import EconomyCars from '../../component/services/economyCars'
import MidsizeCar from '../../component/services/midsizeCars'
import LuxuryCars from '../../component/services/luxuryCars'
import DeluxCoach from '../../component/services/deluxCoach'
import EnqueryForm from '../../component/module/enqueryForm'



const CarRent = () => {
    return (
        <>
            <Image src='/images/car-rent/fleet-banner.jpg' alt='carrent' />
            <Container>
                <section className='home-details'>
                    <div className='header-container'>
                        <h2>Car Services in Udaipur</h2>
                        <p>Our services are available for 24 hours a day. The pickups are done without any delay. You can easily hire a taxi at your desired place by just making a call to us. Taxi Travels is a leading reputed company providing best services at attractive cost. Our booking and client care staffs are committed to the great services. Our experts guarantee to give these services to the correct area defined by the customers within a stipulated time span. We render these car rental services in Udaipur, Rajasthan continuously with global quality standards and accomplish maximum satisfaction level of customers. These services are offered at the most ideal cost to the customers. We offer a wide variety of cars to pick from and its luxurious interiors guarantee esteemed feel. Get set to experience the luxury and comfort together while traveling.</p>
                    </div>
                </section>
                <EconomyCars />
                <MidsizeCar />
                <LuxuryCars />
                <DeluxCoach />
                <EnqueryForm />
            </Container>
        </>
    )
}

CarRent.getLayout = page => {
    return (
        <WebLayout>
            {page}
        </WebLayout>
    )
}

export default CarRent