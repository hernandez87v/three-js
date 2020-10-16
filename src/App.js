import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import FloatingBoxes from './components/FloatingBoxes/FloatingBoxes';
import BunchOCubes from './components/BunchOCubes/BunchOCubes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Bubbles from './components/Bubbles/Bubbles';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={Game} />
          <Route path="/floating-boxes" exact component={FloatingBoxes} />
          <Route path="/bunch-o-cubes" exact component={BunchOCubes} />
          <Route path="/bubbles" exact component={Bubbles} />
        </Switch>
      </div>
    </Router>
  );
}
