import React from 'react';
import '../styles/NavBar.css'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="list">
        <ul>
          <li><Link className="link" to="about" smooth="true" duration={500}>About</Link></li>
          <li><Link className="link" to="tracks" smooth="true" duration={500} offset={75}> Tracks</Link></li>
          <li><Link className="link" to="schedules" smooth="true" duration={500}>Schedule</Link></li>
          <li><Link className="link" to="faqs" smooth="true" duration={500} offset={-75}>FAQs</Link></li>
          <li><Link className="link" to="sponsors" smooth="true" duration={500}>Sponsors</Link></li>
        </ul>
      </div>
    </div >
  )
}

export default NavBar;