import React from 'react';
import Fade from 'react-reveal/Fade';
import bank from "../images/Logos/bank.svg";

function Sponsors() {
  return (
    <Fade>
      <center>
        <h1 className="title">Partners and Sponsors</h1>
        <img src={bank} />
        <p className="para">
          Interested in sponsoring us? Email us at:
            </p>
        <a href="mailto:team@mocohacks.org">team@mocohacks.org</a>
        <br />
        <a href="./MoCoHacks Virtual 2021_ Prospectus.pdf" download="MoCoHacks Virtual 2021_ Prospectus.pdf">Download our prospectus here!</a>
      </center>
    </Fade>
  )
}

export default Sponsors;