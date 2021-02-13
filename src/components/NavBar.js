import React from 'react';
import '../styles/NavBar.css'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className="NavBar">
      <div className="list">
        <ul>
          <li><Link className="link" to="about" smooth="true" duration={500}>About</Link></li>
          <li><Link className="link" to="tracks" smooth="true" duration={500}>Tracks</Link></li>
          <li><Link className="link" to="schedules" smooth="true" duration={500} offset={-100}>Schedule</Link></li>
          <li><Link className="link" to="faqs" smooth="true" duration={500}>FAQs</Link></li>
          <li><Link className="link" to="sponsors" smooth="true">Sponsors</Link></li>
        </ul>
      </div>
    </div >
  )
}

export default NavBar;