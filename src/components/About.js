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
                Because MoCoHacks was cancelled in 2020 due to COVID-19, we have decided to run a virtual event this year. MoCoHacks is a MCPS student-run virtual hackathon organized for all MCPS high school students.
              </p>
              <br></br>
              <p className="para">
                Don’t worry though, we will still be providing all hackers the premiere hackathon experience: FREE SWAG, MERCH, PRIZES, STICKERS, and WORKSHOPS for everyone!
              </p>
            </Fade>
          </div>
          <iframe title="MoCoHacks Video" src="https://www.youtube.com/embed/qdIBGoO6pMk" className="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"
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
