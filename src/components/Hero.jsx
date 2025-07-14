import React from 'react';
import { motion } from 'framer-motion';
import '../../src/Styles/Hero.css'; 
import heroImage from '../assets/heroImage.png';

import WhyChoose from '../components/Whychoose';
import LoginOptions from '../components/LoginOptions';
import HowItWorks from './Howitworks';
import StillQuestion from './StillQuestions';


const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Hero = () => (
  <>
    <section className="hero">
      <motion.div
        className="hero__card"
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div className="hero__content" variants={textVariant}>
          <h1 className="hero__heading">Welcome to MarketHub</h1>
          <h2 className="hero__subheading">
            Your one-stop market for buying &amp; selling
          </h2>
          <p className="hero__description">
            Buy. Sell. Thrive – All in one place.<br />
            List your products, reach more customers, and manage everything with ease.<br />
            Secure payments, real-time insights, and 24/7 support help turn your passion into profit.
          </p>
          <button className="hero__button">Explore Now</button>
        </motion.div>

        <motion.div className="hero__image" variants={imageVariant}>
          <img src={heroImage} alt="MarketHub Hero" />
        </motion.div>
      </motion.div>
    </section>

    {}
    <WhyChoose />
    <LoginOptions />
    <HowItWorks />
    <StillQuestion />


   
  </>
);

export default Hero;
