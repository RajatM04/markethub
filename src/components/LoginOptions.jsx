import React from 'react';
import '../../src/Styles/LoginOptions.css'; 
import sellerImg from '../assets/seller.png';
import buyerImg from '../assets/buyer.png';
import { useNavigate } from 'react-router-dom'; 

const LoginOptions = () => {
  const navigate = useNavigate(); 

  return (
    <div className="login-container">
      <div className="login-card login-left">
        <h2>Continue as <span style={{ background: '#e0eaff' }}>Seller.</span></h2>
        <img src={sellerImg} alt="Seller" className="login-image" />
        <button
          className="login-button"
          onClick={() => navigate('/seller-login')} r login
        >
          Continue
        </button>
      </div>

      <div className="vertical-divider"></div>

      <div className="login-card login-right">
        <h2>
          Continue as{' '}
          <span
            style={{
              background: '#1a227d',
              color: 'white',
              padding: '0px 4px 0px 6px',
            }}
          >
            Buyer.
          </span>
        </h2>
        <img src={buyerImg} alt="Buyer" className="login-image" />
        <button
          className="login-button"
          onClick={() => navigate('/buyer-login')} 
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
