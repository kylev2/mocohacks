import React from "react"

import '../styles/Speakers.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Glass from '../images/speakers/glass.png';
import Han from '../images/speakers/han.png';
import Jawando from '../images/speakers/jawando.png';
import Latta from '../images/speakers/latta.png';
import Wang from '../images/speakers/wang.png';
import Wu from '../images/speakers/wu.png';

function Speakers() {
    return (
        <div>
            <h1 className="title">Keynote Speakers</h1>
            <div style={{width: "50vh"}}>
                <Carousel>
                    <div>
                        <img src={Latta} />
                        <p className="legend">Zack Latta <br></br> Founder and Executive Director of Hack Club. Thiel Fellow; Forbes 30 Under 30 List.</p>
                    </div>
                    <div>
                        <img src={Han} />
                        <p className="legend">Tyler Han <br></br> Co-Founder and CTO of Voiceflow</p>
                    </div>
                    <div>
                        <img src={Wu} />
                        <p className="legend">Benjamin Wu <br></br> President and CEO of MCEDC</p>
                    </div>
                    <div>
                        <img src={Jawando} />
                        <p className="legend">Will Jawando <br></br> MoCo Councilmember (at-large) since 2018. Attorney, activist, and community leader with lifelong dedication to public service.</p>
                    </div>
                    <div>
                        <img src={Wang} />
                        <p className="legend">Nancy Wang <br></br> GM of Data Protection Services @ Amazon AWS. Angel investor. UPenn CS grad. CEO of Advancing Women in Tech (AWIT)</p>
                    </div>
                    <div>
                        <img src={Glass} />
                        <p className="legend">Evan Glass <br></br> MoCo Councilmember (at-large) since 2018; first LGBTQ+ member.</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Speakers