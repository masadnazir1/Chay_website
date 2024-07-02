// src/Packages.js
import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages-container">
      <div className="cloud"></div>
      <div className="cloud"></div>
      <div className="cloud"></div>

      <div className="package-box">
        <h3>Basic Package</h3>
        <p>$99 / month</p>
        <ul>
          <li>5 Pages Website</li>
          <li>Basic SEO</li>
          <li>Email Support</li>
          <li>1 GB Hosting</li>
        </ul>
        <button>Select</button>
      </div>
      
      <div className="package-box">
        <h3>Standard Package</h3>
        <p>$199 / month</p>
        <ul>
          <li>10 Pages Website</li>
          <li>Advanced SEO</li>
          <li>Phone & Email Support</li>
          <li>5 GB Hosting</li>
          <li>Monthly Analytics Report</li>
        </ul>
        <button>Select</button>
      </div>
      
      <div className="package-box">
        <h3>Premium Package</h3>
        <p>$299 / month</p>
        <ul>
          <li>Unlimited Pages</li>
          <li>Professional SEO</li>
          <li>24/7 Support</li>
          <li>Unlimited Hosting</li>
          <li>Weekly Analytics Report</li>
          <li>Custom Design</li>
        </ul>
        <button>Select</button>
      </div>
    </div>
  );
};

export default Packages;
