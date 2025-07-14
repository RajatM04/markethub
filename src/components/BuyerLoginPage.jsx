import React from 'react';
import { useNavigate } from 'react-router-dom';
import personImg from '../assets/personImg.png';
import '../../src/Styles/BuyerLoginPage.css'; // Adjust the path as necessary
const BuyerLoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="login-page-container">
            <div className="left-panel">
                <button className="back-button" onClick={() => navigate('/')}>← Back</button>
                <div className="market-hub-title">Market Hub</div>
                <div className="illustration-container">
                    <img src={personImg} alt="Person illustration" className="person-illustration" />
                </div>
            </div>
            <div className="right-panel">
                <div className="seller-login-link">
                    <a href="#seller-login">Seller Log-in</a>
                </div>
                <div className="login-form-container">
                    <h2 className="login-title">Buyer Login</h2>
                    <p className="login-subtitle">Enter your login details below</p>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="enter your email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="enter your password" />
                    </div>

                    <a href="#forgot-password" className="forgot-password">forgot password ?</a>

                    <button className="login-button">Login</button>

                    <div className="divider"><span>Login Via</span></div>

                    <div className="social-login-icons">
                        <a href="#google" className="social-icon google">G</a>
                        <a href="#facebook" className="social-icon facebook">f</a>
                        <a href="#twitter" className="social-icon twitter">X</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerLoginPage;
