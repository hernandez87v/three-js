import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


export default function Navigation() {
    return (
        <header id="navbar-header">
            <h2 className="logo" alt="logo">
                <Link to="/">React-Three-Fiber</Link>
            </h2>
            <nav>
                <ul className="nav__links">
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                    <li>
                        <Link to="/second">Second</Link>
                    </li>
                    <li>
                        <Link to="/third">Third</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
