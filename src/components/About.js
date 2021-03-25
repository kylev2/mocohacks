import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className="body about">
      <div className="bg-color">
        <div className="page">
          <div className="para-video">
            <Fade left>
              <h1 className="title">What is MoCoHacks?</h1>
              <p className="para">
                MoCoHacks is a free-to-attend 36-hour hackathon for MCPS high school students, organized by high school students from MCPS. This year, MoCoHacks will be held virtually in order to keep attendees safe.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Fade>
          </div>
          <iframe title="MoCoHacks Video" src="https://www.youtube.com/embed/mY7rK9ma0h4" className="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      </div>
    </div >
  )
}

export default About;
