import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

export default function TourLightBox() {
    var photos = [
        {
            src: '/images/tour/tour-1.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/tour/tour-2.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/tour/tour-3.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/tour/tour-4.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/tour/tour-5.jpg',
            width: 4,
            height: 3
        },
        {
            src: '/images/tour/tour-6.jpg',
            width: 4,
            height: 3
        },
    ]

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}
