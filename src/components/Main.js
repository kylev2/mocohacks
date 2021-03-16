import React from 'react';
import NavBar from './NavBar'

function Main() {
  return (
    <div className="body">
      <NavBar />
      <div className="landing">
        <div className="heading">
          <h1>MoCoHacks</h1>
          <h3 style={{ marginTop: "-30px", paddingBottom: "20px" }}><i>Reach New Heights</i></h3>
          <p>Virtual, MCPS Students</p>
          <p style={{ color: "#EDA803" }}>March 19-21, 2021</p>
          {/* <a href="http://bit.ly/mch-register2021" target="_blank">*/}<button className="register">Registrations have closed</button>{/*</a> */}
        </div>
      </div>
    </div >
  )
}

export default Main;
