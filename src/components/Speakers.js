import React from "react"

import '../styles/Prizetracks.css'

import Glass from '../images/speakers/glass.png';
import Han from '../images/speakers/han.png';
import Jawando from '../images/speakers/jawando.png';
import Latta from '../images/speakers/latta.png';
import Wang from '../images/speakers/wang.png';
import Wu from '../images/speakers/wu.png';

function Speakers() {
    return (
        <div className="body tracks">
            <div className="card">
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Latta} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Zack Latta</p></b>
                    <p className="text">
                        Founder and Executive Director of Hack Club. Thiel Fellow; Forbes 30 Under 30 List.
                    </p>
                </div>
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Wu} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Benjamin Wu</p></b>
                    <p className="text">
                        President and CEO of MCEDC; responsible for bringing top talent, tech, and business growth to MoCo. MoCoHacks is co-hosted by MCEDC for the 2021 season!
                    </p>
                </div>
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Han} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Tyler Han</p></b>
                    <p className="text">
                        Co-Founder and CTO of Voiceflow. UToronto CS grad.
                        Voiceflow is providing $144K+ worth of PRO licenses to all 350+ MoCoHacks participants!
                    </p>
                </div>
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Wang} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Nancy Wang</p></b>
                    <p className="text">
                        GM of Data Protection Services @ Amazon AWS. Angel investor. UPenn CS grad. CEO of Advancing Women in Tech (AWIT): global 501(c)3 with 16K+ members — a community partner of MoCoHacks!
                    </p>
                </div>
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Jawando} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Will Jawando</p></b>
                    <p className="text">
                        MoCo Councilmember (at-large) since 2018. Attorney, activist, and community leader with lifelong dedication to public service. Catholic Uni grad (JD). Worked with Pelosi and Obama.
                    </p>
                </div>
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Glass} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Evan Glass</p></b>
                    <p className="text">
                        MoCo Councilmember (at-large) since 2018; first LGBTQ+ member. Previously a CNN journalist for 12 years covering Congress, presidential campaigns and national politics.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Speakers