import React from 'react';
import Main from './components/Main';
import About from './components/About'
import Schedules from "./components/Schedules"
import FAQ from "./components/FAQ"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"
import Prizetracks from "./components/Prizetracks"
import DocumentMeta from 'react-document-meta';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, MoveIn, MoveOut, StickyIn, ZoomIn, FadeUp } from "react-scroll-motion";
//import Team from "./components/Team"

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const meta = {
    title: 'MoCoHacks',
    description: 'Virtual Hackathon for MCPS Students',
    canonical: 'http://mocohacks.org/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={MoveOut}>
              <Main />
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={FadeUp}>
              <About />
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Reach New Heights.</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Ever had that one idea?</span>
              <span style={{ fontSize: "1em", marginTop: "50px", opacity: "50%" }}>
                <Animator animation={MoveOut(320, 0)}>an app?</Animator>
                <Animator animation={MoveOut(-240, 0)}>or business?</Animator>
                <Animator animation={MoveOut(750, 240)}>or website?</Animator>
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Form A Team<br></br></span>
              <span style={{ fontSize: "1em", marginTop: "50px"}}>
                From peers to mentors to industry experts, there will be no shortage of people you can meet! Make a team with new friends (or friends you already have) that have similar interests. Combine brainpower to create a project together!
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Workshops<br></br></span>
              <span style={{ fontSize: "1em", marginTop: "50px"}}>
              Learn programming skills at the various workshops hosted at MoCoHacks. Use these skills to help you along with your project! There will also be talks and mini-tournaments you can participate in while taking a break from coding!
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={6}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Present<br></br></span>
              <span style={{ fontSize: "1em", marginTop: "50px"}}>
              At the end of the hackathon, present your project to win prizes! Look below to find the project tracks for this year! 
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={7}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "3em" }}>Conclusion<br></br></span>
              <span style={{ fontSize: "1em", marginTop: "50px"}}>
              We hope you take this opportunity to learn something new, meet new people, and have fun. We hope you take this opportunity to: <br></br>
              <b>Reach New Heights!</b>
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={8}>
            <Prizetracks />
          </ScrollPage>
          <ScrollPage page={9}>
            <center>
              <Speakers />
            </center>
          </ScrollPage>
          <ScrollPage page={10}>
            <Schedules />
          </ScrollPage>
          <ScrollPage page={11}>
            <FAQ />
          </ScrollPage>
          <ScrollPage page={12}>
            <Sponsors />
          </ScrollPage>
          {/* <Team /> */}
        </ScrollContainer>
      </div>
    </DocumentMeta>
  );
}

export default App;
/*
          <ScrollPage page={3}>
            <Prizetracks />
          </ScrollPage>
          <ScrollPage page={4}>
            <Speakers />
          </ScrollPage>
          <ScrollPage page={5}>
            <Schedules />
          </ScrollPage>
          <ScrollPage page={6}>
            <FAQ />
          </ScrollPage>
          <ScrollPage page={7}>
            <Sponsors />
          </ScrollPage>
*/