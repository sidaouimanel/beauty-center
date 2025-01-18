// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="button-container">
          <a href="/shop" className="hero-button shop-button">
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <strong>SHOP</strong>
          </a>
          <a href="/needhelp" className="hero-button help-button"> {/* Mettez à jour href pour rediriger vers /needhelp */}
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <strong>Need Help?</strong>
          </a>
        </div>
      </header>
      <footer className="footer">
        <p>&copy; 2024 Beauty Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
