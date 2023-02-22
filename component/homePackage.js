import { useRouter } from 'next/router';
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


const data = [
    {
        title: 'Udaipur Sightseeing Tour (Days)',
        url: '/images/home-package/udaipur.jpg'
    },
    {
        title: 'Eklingji-Nathdwara-Haldighati Tour (Days)',
        url: '/images/home-package/Ekling-Nathdwara.jpg'
    },
    {
        title: 'Kumbhalgarh-Haldighati Tour (Days)',
        url: '/images/home-package/Kumbhalgarh-Fort-Udaipur.png'
    },
    {
        title: 'Ranakpur-Kumbhalgarh tour (Days)',
        url: '/images/home-package/Ranakpur.jpg'
    },
    {
        title: 'Chittorgarh Tour(Days)',
        url: '/images/home-package/Chittorgarh-Fort-Chittorgarh.png'
    },
    {
        title: 'Mount Abu Tour (Days)',
        url: '/images/home-package/mount-abu.jpg'
    }
]

export default function HomePackage() {
    const router = useRouter()
    return (
        <section className='home-details'>
            <div className='header-container'>
                <h2>Udaipur Tour Packages</h2>
                <p>Why do 96% of our customer keep coming back to us?</p>
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
