
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../src/Styles/Hero.css';
import Hero from './Hero';


const loadLordIcon = () => {
  const script = document.createElement("script");
  script.src = "https://cdn.lordicon.com/lordicon.js";
  script.async = true;
  document.body.appendChild(script);
};

// Card data
const cardData = [
  {
    icon: "https://cdn.lordicon.com/fmdwwfgs.json", 
    title: "Instant Messaging System",
   short: "Secure, real-time messaging with live chat analytics and user engagement tracking.",
   long: "Our Instant Messaging System offers encrypted, real-time communication backed by intelligent user analytics."

  },
  {
    icon: "https://cdn.lordicon.com/xowcggal.json",
    title: "Real-Time Insights",
    short: "Track your sales, inventory, and customer trends with powerful analytics tools.",
    long: "Get detailed analytics on your products, customers, and sales. Make smarter decisions with real-time data and easy-to-read dashboards."
  },
  {
    icon: "https://cdn.lordicon.com/abhwievu.json", 
    title: "24/7 Support",
    short: "Get help whenever you need it from our dedicated support team, day or night.",
    long: "Our support team is available around the clock to assist you with any issues. Chat, email, or call us anytime for fast solutions."
  }
];

// Card Component
const WhyCard = ({ icon, title, short, long }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    loadLordIcon();
  }, []);

  return (
    <div className={`why-card${flipped ? ' flipped' : ''}`}>
      <motion.div
        className="why-card-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <div className="why-card-front">
          <div className="why-icon">
            <lord-icon
              src={icon}
              trigger="loop"
              delay="100"
             
              style={{ width: '100px', height: '100px' }}
            ></lord-icon>
          </div>
          <h3>{title}</h3>
          <p>{short}</p>
          <button className="why-card-btn" onClick={() => setFlipped(true)}>Know More</button>
        </div>
        <div className="why-card-back">
          <h3>{title}</h3>
          <p>{long}</p>
          <button className="why-card-btn" onClick={() => setFlipped(false)}>Back</button>
        </div>
      </motion.div>
    </div>
  );
};

// Section Component
const WhyChoose = () => (
  <section className="why-market-hub">
    <h2 className="why-title">
      Why Choose <span style={{ background: '#e1eaff' }}>MarketHub ?</span>
    </h2>
    <div className="why-cards">
      {cardData.map(card => (
        <WhyCard key={card.title} {...card} />
      ))}
    </div>
  </section>
);

export default WhyChoose;
