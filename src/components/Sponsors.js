import React from 'react';
import Fade from 'react-reveal/Fade';
import bank from "../images/Logos/bank.svg";
import '../styles/Sponsors.css';

function Sponsors() {
  return (
    <Fade>
      <center>
        <h1 className="title sponsors">Partners and Sponsors</h1>
        <a href="https://hackclub.com/bank/"><img src={bank} alt="sponsors" /></a>
    <a href="https://thinkmoco.com/"><img src="https://cdn.discordapp.com/attachments/684952656405594160/814885837715537970/MCEDC-white1.png" alt="sponsors" /></a>
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
