import React from "react";

import "./HomePage.css"; // You can define your styles in HomePage.css
import ServiceBox from "./ServiceBox";
import AnimatedCarousel from "./AnimatedCarousel";

import Packages from "./Packages";

const HomePage = () => {
  return (
    <div className="main">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <AnimatedCarousel></AnimatedCarousel>

      <ServiceBox></ServiceBox>

      <Packages></Packages>
    </div>
  );
};

export default HomePage;
