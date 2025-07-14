import React from 'react';
import '../../src/Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
    
      <div className="scroll-to-top-btn" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>

      <div className="footer-watermark">MarketHub</div>

      <div className="footer-column">
        <h3>The Good</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Why MarketHub?</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>The Boring</h3>
        <ul>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>The Cool</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </div>

      <div className="footer-cta">
        <h3>Boost your Sales by Joining Us Today!</h3>
        <div className="footer-point">
          <lord-icon
            src="https://cdn.lordicon.com/hrtsficn.json"
            trigger="loop"
            delay="2000"
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
          <p>Get discount</p>
        </div>

        <div className="footer-point">
          <lord-icon
            src="https://cdn.lordicon.com/hrtsficn.json"
            trigger="loop"
            delay="2000"
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
          <p>EMI available</p>
        </div>
        <div className="footer-buttons">
          <button className="footer-btn dark">
            <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }} />
            Get in touch
          </button>
          <button className="footer-btn">Book a call</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
