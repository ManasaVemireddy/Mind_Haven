// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Separate CSS file for HeroSection

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Mind Haven</h1>
        <p>Your safe space to share and heal</p>
      </div>
    </div>
  );
};

export default HeroSection;
