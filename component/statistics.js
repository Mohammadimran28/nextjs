import React from 'react'
import { faStar, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faMap } from '@fortawesome/free-regular-svg-icons'
import CountUp from 'react-countup';
export default function Statistics() {

    return (
        <section className="stats">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 stats-grid ">
                        <div class="numscroller">
                        <CountUp  end={158} delay={2} />
                        </div>

                        <FontAwesomeIcon icon={faMap} />
                        <h4>Tourist Destinations</h4>
                    </div>
                    <div class="col-md-3 col-sm-3 stats-grid ">
                        <div class="numscroller">
                        <CountUp end={98} delay={2} />
                        </div>
                        <FontAwesomeIcon icon={faTaxi} />

                        <h4>Quality Transportation</h4>
                    </div>
                    <div class="col-md-3 col-sm-3 stats-grid ">
                    <div class="numscroller">
                        <CountUp end={1421} delay={2} />
                        </div>
                        <FontAwesomeIcon icon={faFaceSmile} />
                        <h4>Happy Clients</h4>
                    </div>
                    <div class="col-md-3 col-sm-3 stats-grid ">
                    <div class="numscroller">
                        <CountUp end={5} delay={2} />
                        </div>
                        <FontAwesomeIcon icon={faStar} />
                        <h4>Ratings</h4>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

