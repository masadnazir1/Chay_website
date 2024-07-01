import React from "react";
import cup from "./cup.png";
import "./HomePage.css"; // You can define your styles in HomePage.css
import ServiceBox from "./ServiceBox";
import AnimatedCarousel from './AnimatedCarousel';
import Heading from './Heading'


const HomePage = () => {
  return (
    <div className="main">
     
   

     <AnimatedCarousel></AnimatedCarousel>

     {/* <Heading text="Welcome to React Heading Component" /> */}


    <ServiceBox></ServiceBox>

    </div>
  );
};

export default HomePage;
