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
              MoCoHacks is a hackathon: A 36-hour coding marathon where you create a ‘hack’ (programming solution) addressing a problem you see around you. The problem can be big or small, serious or comedic. All that matters is that your hack is your creation! Throughout the event, there will be talks, workshops, and mini-tournaments that you can participate in as well!
              </p>
              <br></br>
              <p className="para">
              This year, MoCoHacks will be held virtually due to COVID-19. Don’t worry though, we will still be providing all hackers the premiere hackathon experience: swag, merch, prizes, stickers, and workshops for everyone who participates in the event!
              </p>
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
