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
            <div className="centerIt">
                <h1 className="title">Keynote Speakers</h1>
            </div>
            <div className="card">
                <div className="card-front">
                    <div className="align-circle">
                        <div className="circle">
                            <img src={Latta} className="scale"></img>
                        </div>
                    </div>
                    <b><p className="text" style={{ fontSize: "1.5em" }}>Zach Latta</p></b>
                    <p className="text">
                        Founder and Executive Director of Hack Club. Thiel Fellow; Forbes 30 Under 30
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
        President and CEO of MCEDC
                       
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
                         Co-Founder and CTO of Voiceflow
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
                        GM of Data Protection Services @ Amazon AWS. Angel investor. CEO of Advancing Women in Tech (AWIT)
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
                        MoCo Councilmember (at-large) since 2018. Attorney, activist, and community leader with lifelong dedication to public service.
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
                        MoCo Councilmember (at-large) since 2018; first LGBTQ+ member.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Speakers
