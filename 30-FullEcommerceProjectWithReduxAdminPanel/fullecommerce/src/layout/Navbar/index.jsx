import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/style.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        Redux
      </Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/basket" className="navbar-link">
            Basket
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">
            Favorites
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </li>
        <li className="navbar-item">
          <button className="navbar-button" onClick={() => localStorage.clear()}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
