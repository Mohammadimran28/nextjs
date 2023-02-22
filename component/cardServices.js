import { useRouter } from 'next/router';
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


const data = [

    {
        title: 'MARUTI SWIFT DZIRE',
        url: '/images/car-services/taxi-02.jpg'
    },

    {
        title: 'TOYOTA INNOVA CRYSTA',
        url: '/images/car-services/taxi-04.jpg'
    },
    {
        title: 'TOYOTA INNOVA',
        url: '/images/car-services/taxi-05.jpg'
    },
    {
        title: 'TEMPO TRAVELLER 17 STR.',
        url: '/images/car-services/tax-16.png'
    },
    {
        title: 'TEMPO TRAVELLER 14 STR.',
        url: '/images/car-services/taxi-12.jpg'
    },


]

export default function CardServices() {
    const router = useRouter()
    return (
        <section className='home-details'>
            <div className='header-container'>
                <h2>Car Services in Udaipur</h2>
                <p>Why do 99% of our client keep coming back to us?</p>
            </div>
            <Container>
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation
                        pagination
                        modules={[Autoplay, Navigation, Pagination]}
                        className="pb-5"
                        breakpoints={{
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            320: {
                                width: 320,
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {data && data.map((value, index) => {
                            return (
                                <SwiperSlide key={`card-${index}`}>
                                    <Card>
                                        <Card.Img variant="top" src={value.url} />
                                        <Card.Body>
                                            <Card.Title>{value.title}</Card.Title>
                                            <div className='book-only d-lg-block d-md-block d-sm-none'>
                                                <Button onClick={() => router.push('/contact')} variant="primary">Book Now</Button >
                                            </div>
                                            <a href="tel:+91 8619589765">
                                                <div className='book-call d-lg-none d-md-none d-sm-block'>
                                                    <Button variant="primary">Book Now</Button>
                                                </div>
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}
