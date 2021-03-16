import React from 'react';
import Main from './components/Main';
import About from './components/About'
import Schedules from "./components/Schedules"
import FAQ from "./components/FAQ"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"
import Prizetracks from "./components/Prizetracks"
import DocumentMeta from 'react-document-meta';
//import Team from "./components/Team"

function App() {
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
        {/* <Team /> */}
      </div>
    </DocumentMeta>
  );
}

export default App;
