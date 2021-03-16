import React from 'react';
import '../styles/NavBar.css'
import { Link } from 'react-scroll'
import logo from "../images/icons/mch-virtual-clearbg.png"
import banner from "../images/mchacks-banner.svg";

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <a href="https://hackclub.com/" target="_blank">
          <img className="banner" src={banner}></img>
        </a>
        <div className="end">
          <div className="list">
            <ul>
              <li><Link className="link" to="about" smooth="true" duration={500}>About</Link></li>
              <li><Link className="link" to="tracks" smooth="true" duration={500} offset={75}> Tracks</Link></li>
              <li><Link className="link" to="schedules" smooth="true" duration={500}>Schedule</Link></li>
              <li><Link className="link" to="faqs" smooth="true" duration={500} offset={-75}>FAQs</Link></li>
              <li><Link className="link" to="sponsors" smooth="true" duration={500}>Sponsors</Link></li>
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default NavBar;