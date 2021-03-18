import React from 'react';
import NavBar from './NavBar'
import Countdown from 'react-countdown';

function Main() {
  var eventStart = new Date(1616202000)
  return (
    <div className="body">
      <NavBar />
      <div className="landing">
        <div className="heading">
          <h1>MoCoHacks</h1>
          <h3 style={{ marginTop: "-30px", paddingBottom: "20px", fontSize: "30px" }}>Reach New Heights</h3>
          <div style={{ marginTop: "-30px", paddingBottom: "20px", fontSize: "30px" }}></div>
          <p>Virtual, MCPS Students</p>
          <p style={{ color: "#EDA803" }}>March 19-21, 2021</p>
          {/* <a href="http://bit.ly/mch-register2021" target="_blank">*/}<button className="register">Registrations have closed</button>{/*</a> */}
        </div>
      </div>
    </div >
  )
}

export default Main;
