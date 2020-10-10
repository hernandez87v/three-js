import React from 'react';
import Game from './components/Game/Game';
import Second from './components/Second/Second';
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
          <Route path="/second" exact component={Second} />
        </Switch>
      </div>
    </Router>
  );
}
