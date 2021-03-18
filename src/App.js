import React from 'react';
import Main from './components/Main';
import About from './components/About'
import Schedules from "./components/Schedules"
import FAQ from "./components/FAQ"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"
import Prizetracks from "./components/Prizetracks"
import DocumentMeta from 'react-document-meta';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, MoveOut, StickyIn, ZoomIn, FadeUp } from "react-scroll-motion";
import { Navbar } from 'react-bootstrap';
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
        <Main />
        <About />
        <Prizetracks />
        <Speakers />
        <Schedules />
        <FAQ />
        <Sponsors />
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