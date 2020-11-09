import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <Link to="/">REACT-THREE-FIBER</Link>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/floating-boxes">FLOATING - BOXES</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/bunch-o-cubes">BUNCH - O - CUBES</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/game">GAME</Link>
          </li>
          <span>|</span>
          <li>
            <Link to="/jumbo-text">JUMBO - TEXT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
