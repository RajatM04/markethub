import React from 'react';
import '../../src/Styles/StillQuestion.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StillQuestion = () => {
  return (
    <div className="still-question-container">
      <h2 className="still-title">Still have questions?</h2>
      <p className="still-subtext">Get a personalized walkthrough of MarketHub.</p>

      <div className="demo-input-wrapper">
        <input
          type="email"
          className="demo-input-full"
          placeholder="Request a demo"
        />
        <button className="demo-input-icon-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default StillQuestion;
