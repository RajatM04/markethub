// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LoginOptions from './components/LoginOptions';
import BuyerLoginPage from './components/BuyerLoginPage';
import SellerLoginPage from './components/SellerLoginPage';

import './index.css';

// Separate wrapper to access location inside Router
function AppContent() {
  const location = useLocation();
  const hideFooter = ['/buyer-login', '/seller-login'].includes(location.pathname);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<LoginOptions />} />
          <Route path="/buyer-login" element={<BuyerLoginPage />} />
          <Route path="/seller-login" element={<SellerLoginPage />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
