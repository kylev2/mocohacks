import React from 'react';
import Main from './components/Main';
import About from './components/About'
import Schedules from "./components/Schedules"
import FAQ from "./components/FAQ"
import Sponsors from "./components/Sponsors"
import Prizetracks from "./components/Prizetracks"
import { HashRouter, Route, Switch } from "react-router-dom";
import Team from "./components/Team"

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Main exact path="/" />
          <About exact path="/About"/>
          <Prizetracks exact path="/Prizetracks"/>
          <Schedules exact path="/Schedules"/>
          <FAQ exact path="/FAQ"/>
          <Sponsors exact path="/Sponsors"/>
          {/* <Team /> */}
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
