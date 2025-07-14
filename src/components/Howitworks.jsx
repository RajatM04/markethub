import React from 'react';
import '../../src/Styles/Howitworks.css'; 

const HowItWorks = () => {
  return (
    <div className="how-container">
      <h2 className="how-title">How <span>MarketHub</span> Works</h2>

      <div className="how-card">
        {/* Left Side: Steps */}
        <div className="how-steps">
          <div className="step-card">
            <div className="animated-icon">
              <lord-icon
                src="https://cdn.lordicon.com/hroklero.json"
                trigger="loop"
                state="loop-spin"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </div>
            <div>
              <h4>Register</h4>
              <p>Create an account in minutes to start selling or buying.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="animated-icon">
              <lord-icon
                src="https://cdn.lordicon.com/yudxjmzy.json"
                trigger="loop"
              style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </div>
            <div>
              <h4>List & Discover</h4>
              <p>List your products or explore curated listings effortlessly.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="animated-icon">
              <lord-icon
                src="https://cdn.lordicon.com/abhwievu.json"
                trigger="loop"
                 colors="primary:#e83a30,secondary:#848484,tertiary:#4bb3fd,quaternary:#fae6d1"
                style={{ width: "70px", height: "70px" }}
              ></lord-icon>
            </div>
            <div>
              <h4>Get Support</h4>
              <p>24/7 customer assistance to help you at every step.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="how-video-card">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="MarketHub Overview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
