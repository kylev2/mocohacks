import React from 'react';
import "../styles/faqs.css"
import "../styles/Main.css"

import Accordion from "../components/Accordion.js";


function FAQ() {
  return (
    <div>
      <div className="faqcontainer" style={{ paddingTop: "0" }}>
        <section className="faqs">
          <h1 className="title">FAQs</h1>
          <div className="container">

            <Accordion title="What is a hackathon?" content="A hackathon is a coding marathon where you create a ‘hack’ (programming solution) addressing a problem you see around you. The problem can be big or small, serious or comedic. All that matters is that your hack is your creation!" />

            <Accordion
              title="What if I’m a beginner?"
              content="Don’t worry, students of all experiences are encouraged to attend MoCoHacks! There will be workshops and mentors available to help guide you throughout the event."
            />
            <Accordion
              title="Where will MoCoHacks be?"
              content="MoCoHacks will be hosted virtually on Discord and Zoom."
            />
            <Accordion
              title="Who can attend?"
              content="All high school students attending a public school in Montgomery County, Maryland are invited to MoCoHacks. Unfortunately, we cannot accept middle school students, college students, private school students, nor high schoolers outside of MCPS at this time."
            />
            <Accordion
              title="Why do you ask for student ID's in the registration form?"
              content="We ask for student ID numbers to verify that they are current MCPS high school students. All the information students enter will be kept confidential."
            />
            <Accordion
              title="How much does it cost?"
              content="It is absolutely free to attend MoCoHacks, thanks to our sponsors and partners!"
            />
            <Accordion
              title="What should I bring?"
              content="Just yourself and a computer—and maybe some coffee!"
            />
            <Accordion
              title="Do I need a team?"
              content="Nope! There will be a team formation event at MoCoHacks where you can pair up with people that have similar interests! You may compete in teams of up to four people."
            />
            <Accordion
              title="Who gets swag?"
              content="Everyone who submits a project is eligible for swag (t-shirts, stickers, coupons, and more!). Certain events and workshops will also give out swag for attending!"
            />
            <Accordion
              title="Any other questions?"
              content="Feel free to email us anytime at outreach@mocohacks.org."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQ;
