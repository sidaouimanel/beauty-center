// src/pages/NeedHelpPage.jsx
import React from 'react';
import './NeedHelpPage.css';

const NeedHelpPage = () => {
  return (
    <div className="need-help-page">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpPage;
