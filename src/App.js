// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AuthForm from './pages/AuthForm';
import ShopPage from './pages/ShopPage';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage'; // Importez AdminPage
import NeedHelpPage from './pages/NeedHelpPage'; // Importez NeedHelpPage
import UserPage from './pages/UserPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin" element={<AdminPage />} /> {/* Ajoutez la route pour AdminPage */}
        <Route path="/needhelp" element={<NeedHelpPage />} /> {/* Ajoutez la route pour NeedHelpPage */}
        <Route path="/user" element={<UserPage />} /> {/* Correction ici */}
      </Routes>
    </Router>
  );
}

export default App;
