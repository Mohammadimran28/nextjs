import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Stack } from 'react-bootstrap'

export const TopContactDetail = () => {
    return (
        <section className='top-contact-detail'>
            <div className='num-detail d-lg-block d-md-block d-sm-none d-xs-none'>
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <a href="tel:+91 8619589765">
                            <FontAwesomeIcon icon={faPhone} />
                            <span >
                                +91 8619589765
                            </span>
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span className=''>
                            +91 9929010696
                        </span>
                    </div>
                    <div>
                        <a href="mailto:jk91551@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className=''>
                               Reedaudaipurtaxi@gmail.com
                            </span>
                        </a>
                    </div>
                </Stack>
            </div>
            <div className='icon-only d-lg-none d-md-none d-sm-block'>
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <a href="tel:+91 8619589765">
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <div>
                        <a href="mailto:jk91551@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </Stack>
            </div>
        </section>
    )
}