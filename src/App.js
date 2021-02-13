import React from 'react';
import Main from '../components/Main';
import About from '../components/About'
import Schedules from "../components/Schedules"
import FAQ from "../components/FAQ"
import Sponsors from "../components/Sponsors"
import Prizetracks from "../components/Prizetracks"
//import Team from "./components/Team"

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Prizetracks />
      <Schedules />
      <FAQ />
      <Sponsors />
      {/* <Team /> */}
    </div>
  );
}

export default App;
