import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../src/Styles/Navbar.css';

const Navbar = () => {
  const [language, setLanguage] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar__brand">MarketHub</div>

      {/* Hamburger Icon (Right aligned) */}
      <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </div>

      {/* Desktop Nav Links */}
      <div className="navbar__links">
        <a href="#home" className="navbar__link">Home</a>
        <a href="#about" className="navbar__link">About</a>
        <a href="#contact" className="navbar__link">Contact</a>
        <a href="#pricing" className="navbar__link">Pricing</a>
      </div>

      {/* Right Actions */}
      <div className="navbar__actions">
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="navbar__select"
        >
          <option value="EN">EN</option>
          <option value="HI">ह</option>
          <option value="MI">म</option>
        </select>

        <span className="navbar__icon-bg">
          <FontAwesomeIcon icon={faPhone} />
        </span>

        <button className="navbar__button">
          <span>Get in Touch</span></button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <a href="#home" className="navbar__link">Home</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#contact" className="navbar__link">Contact</a>
          <a href="#pricing" className="navbar__link">Pricing</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
