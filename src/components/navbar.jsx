import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Sleep Tracker</h1></Link>
      <ul className="navbar-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Stats">Stats</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Add">Add Sleep</Link></li>
      </ul>
    </nav>
  );
}