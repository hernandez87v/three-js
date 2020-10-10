import React from 'react';
import Game from './components/Game/Game';
import FloatingBoxes from './components/FloatingBoxes/FloatingBoxes';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/game" exact component={Game} />
          <Route path="/floating-boxes" exact component={FloatingBoxes} />
        </Switch>
      </div>
    </Router>
  );
}
