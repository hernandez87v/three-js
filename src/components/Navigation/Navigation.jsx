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
            <Link to="/game">GAME</Link>
          </li>
          <li>
            <Link to="/floating-boxes">FLOATING-BOXES</Link>
          </li>
          <li>
            <Link to="/third">THIRD</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
