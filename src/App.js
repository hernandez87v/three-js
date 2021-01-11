import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SunAndMoon from './components/SunAndMoon/SunAndMoon';
import Game from './components/Game/Game';
import FloatingBoxes from './components/FloatingBoxes/FloatingBoxes';
import BunchOCubes from './components/BunchOCubes/BunchOCubes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JumboText from './components/JumboText/JumboText';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={SunAndMoon} />
          <Route path="/game" exact component={Game} />
          <Route path="/floating-boxes" exact component={FloatingBoxes} />
          <Route path="/bunch-o-cubes" exact component={BunchOCubes} />
          <Route path="/jumbo-text" exact component={JumboText} />
        </Switch>
      </div>
    </Router>
  );
}
