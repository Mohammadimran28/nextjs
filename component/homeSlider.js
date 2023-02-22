import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

const bannerJson = [
    {
        title: 'UDAIPUR',
        url: '/images/banner/banner15.jpg',
        detail: ''
    },
    {
        title: 'JAIPUR',
        url: '/images/banner/banner16.jpg',
        detail: ''
    },
    {
        title: 'JODHPUR',
        url: '/images/banner/jodhpur.jpg',
        detail: ''
    },
    {
        title: 'Pushkar',
        url: '/images/banner/pushkar.jpg',
        detail: ''
    },
    {
        title: 'JAISALMER',
        url: '/images/banner/jaisalmer.jpg',
        detail: ''
    },
    {
        title: 'BIKANER',
        url: '/images/banner/bikaner.jpg',
        detail: ''
    },
   
]

export const HomeSlider = () => {
    return (
        <Carousel>
            {bannerJson && bannerJson.map((banner, index) => {
                return (
                    <Carousel.Item key={`banner-${index}`}>
                        <Image
                            className="img-fluid d-block w-100"
                            src={banner.url}
                            alt={banner.title}
                            height={8}
                            width={700}
                        />
                        <Carousel.Caption>
                            <h3>{banner.title}</h3>
                            <p>{banner.detail}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}
