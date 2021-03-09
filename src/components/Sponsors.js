import React from 'react';
import Fade from 'react-reveal/Fade';
import bank from "../images/Logos/bank.svg";
import mcedc from "../images/Logos/MCEDC-1.png";
import hyperx from "../images/Logos/HyperX-1.svg";
import voiceflow from "../images/Logos/voiceflow.png"
import logitech from "../images/Logos/logitech.svg"
import porkbun from "../images/Logos/porkbun_white.png";
import aops from "../images/Logos/aops.png";
import password from "../images/Logos/1password.png"
import sentry from "../images/Logos/sentry.png"
import balsamiq from "../images/Logos/balsamiq.svg"
import ewis from "../images/Logos/elevatewomeninstem.svg"
import escelate from "../images/Logos/point3-escalate.svg"
import umd from "../images/Logos/UMD-Iribe-Diversity.png"
import secwhite from "../images/Logos/Point3Sec_White.svg"
import email from "../images/icons/email.svg"
import facebook from "../images/icons/facebook.svg"
import instagram from "../images/icons/instagram.svg"
import linkedin from "../images/icons/linkedin.svg"
import twitter from "../images/icons/twitter.svg"
import website from "../images/icons/website.svg"
import yt from "../images/icons/youtube.svg"
import discord from "../images/icons/discord.svg"
import techone from "../images/Logos/TechOne.svg"
import stickergiant from "../images/Logos/StickerGiant-white.svg"
import capitol from "../images/Logos/capitol.png"

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
            <a href="https://sentry.io/"><img src={sentry} alt="sponsors" /></a>
            <a href="https://www.logitech.com/en-us"><img src={logitech} alt="sponsors" /></a>
            <a href="https://www.hyperxgaming.com/unitedstates/us"><img src={hyperx} alt="sponsors" /></a>
          </div>
          <div className="row">
            <a href="https://porkbun.com/"><img src={porkbun} alt="sponsors" /></a>
            <a href="https://www.voiceflow.com/"><img src={voiceflow} alt="sponsors" /></a>
            <a href="https://artofproblemsolving.com/"><img src={aops} alt="sponsors" /></a>
            <a href="https://1password.com/"><img src={password} alt="sponsors" /></a>
          </div>
          <div className="row">
            <a href="https://balsamiq.com/"><img src={balsamiq} alt="sponsors" /></a>
            <a href="https://www.elevatewomeninstem.com/"><img src={ewis} alt="sponsors" /></a>
            <a href="https://ittakesahuman.com/escalate.html"><img src={escelate} alt="sponsors" /></a>
            <a href="https://inclusion.cs.umd.edu/"><img src={umd} alt="sponsors" /></a>
            <a href="https://ittakesahuman.com/"><img src={secwhite} alt="sponsors" /></a>
          </div>
          <div className="row">
            <a href="https://www.captechu.edu/"><img src={capitol} alt="sponsors" /></a>
            <a href="https://www.stickergiant.com/"><img src={stickergiant} alt="sponsors" /></a>
            <a href="https://techone.dev/ "><img src={techone} alt="sponsors" /></a>
          </div>
        </div>
        <p className="para">
          Interested in sponsoring us? Email us at:
            </p>
        <a href="mailto:team@mocohacks.org">team@mocohacks.org</a>
        <br />
        <a href="./mch-2021-prospectus.pdf" download="mch-2021-prospectus.pdf">Download our prospectus here!</a>
        <br />
        <br />
        <div className="sponsorsBox">
        <div className="row socials">
          
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Event+Inquiry+&to=outreach@mocohacks.org"><img src={email} alt="sponsors" /></a>
            <a href="https://www.youtube.com/channel/UCyrDgtxvPBfwu0LqrAa-QUw"><img src={yt} alt="sponsors" /></a>
            <a href="https://www.instagram.com/mocohacks/"><img src={instagram} alt="sponsors" /></a>
            <a href="https://www.facebook.com/mocohacksorg"><img src={facebook} alt="sponsors" /></a>
            <a href="https://twitter.com/mocohacks"><img src={twitter} alt="sponsors" /></a>
            <a href="https://mocohacks.org/"><img src={website} alt="sponsors" /></a>
            <a href="https://www.linkedin.com/company/mocohacks/"><img src={linkedin} alt="sponsors" /></a>
          {/*  <a href=""><img src={discord} alt="sponsors" /></a> */} 
           
          </div></div>
      </center>
    </Fade>
  )
}

export default Sponsors;
