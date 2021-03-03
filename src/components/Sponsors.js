import React from 'react';
import Fade from 'react-reveal/Fade';
import bank from "../images/Logos/bank.svg";
import mcedc from "../images/Logos/MCEDC-1.png";
import hyperx from "../images/Logos/HyperX-1.svg";
import voiceflow from "../images/Logos/voiceflow.png"
import logitech from "../images/Logos/logitech.svg"
import porkbun from "../images/Logos/porkbun_white.png";
import aops from "../images/Logos/AoPS.png";
import '../styles/Sponsors.css';

function Sponsors() {
  return (
    <Fade>
      <center>
        <h1 className="title sponsors">Partners and Sponsors</h1>
        <div className="sponsorsBox">
          <div className="row bigger">
            <a href="https://hackclub.com/bank/"><img src={bank} alt="sponsors" /></a>
            <a href="https://thinkmoco.com/"><img src={mcedc} alt="sponsors" className="logitech" /></a>
          </div>
          <div className="row">
            <a href="https://www.logitech.com/en-us"><img src={logitech} alt="sponsors" /></a>
            <a href="https://www.hyperxgaming.com/unitedstates/us"><img src={hyperx} alt="sponsors" /></a>
            <a href="https://porkbun.com/"><img src={porkbun} alt="sponsors" /></a>
          </div>
          <div className="row">
            <a href="https://www.voiceflow.com/"><img src={voiceflow} alt="sponsors" /></a>
            <a href="https://artofproblemsolving.com/"><img src={aops} alt="sponsors" /></a>
          </div>
        </div>
        <p className="para">
          Interested in sponsoring us? Email us at:
            </p>
        <a href="mailto:team@mocohacks.org">team@mocohacks.org</a>
        <br />
        <a href="./mch-2021-prospectus.pdf" download="mch-2021-prospectus.pdf">Download our prospectus here!</a>
      </center>
    </Fade>
  )
}

export default Sponsors;
