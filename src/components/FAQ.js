import React from 'react';
import "../styles/faqs.css"
import "../styles/Main.css"

import Accordion from "../components/Accordion.js";


function FAQ() {
  return (
    <div>
      <div className="faqcontainer" style={{paddingTop:"350px"}}>
        <section className="faqs">
          <div className="container">

            <Accordion title="What is a hackathon?" content="A 36-hour coding marathon filled with fun events and a chance to win a prize!" />

            <Accordion
              title="What if I’m a beginner?"
              content="Don’t worry, all students are welcome to attend MoCoHacks, regardless of experience! There will be workshops and mentors available to help guide you along the event."
            />
            <Accordion
              title="Where will MoCoHacks be?"
              content="MoCoHacks will be hosted VIRTUALLY ON DISCORD AND ZOOM 🥵😎💻"
            />
            <Accordion
              title="Why do you ask for student ID's in the registration form?"
              content="We ask for student MCPS ID numbers to verify that they are currently high school students in the Montgomery County Public School system. MoCoHacks is a free hackathon for students and by students only; this process ensures us that no outsiders in the county nor people outside of ages of 14-18 can enter our event/event platform (for security interests), aside from our trusted mentors and guest speakers (who are either college students studying CS, and/or professionals in the tech field). All the personal information submitted by students will only be seen by student organizers (who are also all high schoolers in MCPS). All the information students enter will be kept confidential. Additionally, if students want free swag from MoCoHacks and its sponsors, they are given the option to input their address."
            />
            <Accordion
              title="Who can attend?"
              content="All high school students attending a public school in Montgomery County, Maryland are invited to MoCoHacks. Unfortunately, we cannot accept middle school or college students."
            />
            <Accordion
              title="How much does it cost?"
              content="It is absolutely free to attend MoCoHacks thanks to our sponsors!"
            />
            <Accordion
              title="What should I bring?"
              content="Just yourself and a computer—and maybe some coffee :)"
            />
            <Accordion
              title="Do I need a team?"
              content="Nope! There will be a team formation event at the beginning of the event. You may compete in teams of up to four people."
            />
            <Accordion
              title="Any other questions?"
              content="Email us at outreach@mocoahacks.org"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQ;
