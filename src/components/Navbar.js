import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/logo.jpg" alt="Beauty Center" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking" className="navbar-reserve">Réserver</Link></li> {/* Mettre à jour ce lien */}
        <li><Link to="/auth" className="navbar-signup">Sign Up</Link></li>
        <li><Link to="/auth" className="navbar-login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
