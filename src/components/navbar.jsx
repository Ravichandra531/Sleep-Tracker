import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand"><h1>Sleep Tracker</h1></Link>
      <ul className="navbar-links">
        <Link to="/Home">Home</Link>
        <Link to="/Stats">Stats</Link>
        <Link to="/add">Add Sleep</Link>
        <Link to="/Login">Profile</Link>
      </ul>
    </nav>
  );
}