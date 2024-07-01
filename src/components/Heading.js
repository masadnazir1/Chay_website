// src/components/Heading.js
import React from 'react';
import './Heading.css'; // Import your CSS file for styling

const Heading = ({ text }) => {
  return (
    <div className="heading-container">
      <h1 className="gradient-text">
        <span>{text}</span>
      </h1>
    </div>
  );
};

export default Heading;
