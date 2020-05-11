import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ColorExperiment from './components/Color/Experiment/ColorExperiment';
import Color from './components/Color/Main/Color';
import Home from './components/Home/Home';
import MoodRing from './components/MoodRing/MoodRing';
import Memory from './components/Memory/Memory';
import MothersDay from './components/Holidays/2020/MothersDay/MothersDay';
import elewis from './components/Holidays/2020/Birthdays/ELewis/elewis';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/color" component={Color} />
      <Route path="/experiments/color" component={ColorExperiment} /> 
      <Route path="/mood-ring" component={MoodRing} />
      <Route path="/memory" component={Memory} />
      <Route path="/2020/mothers-day" component={MothersDay} />
      <Route path="/2020/elewis-bday" component={elewis} />
    </div>

  </Router>
);

export default App