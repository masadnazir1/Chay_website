// src/AnimatedCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AnimatedCarousel.css";

const slides = [
  {
    heading: "Slide 1 Heading",
    text: "This is the text for slide 1.",
    button1: "Learn More",
    button2: "Get Started",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/041/318/447/small_2x/mobile-app-development-language-development-software-programming-3d-render-png.png", // Placeholder image URL
  },
  {
    heading: "Slide 2 Heading",
    text: "This is the text for slide 2.",
    button1: "Discover",
    button2: "Join Now",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/009/300/321/small_2x/3d-illustration-of-web-development-png.png", // Placeholder image URL
  },
  {
    heading: "Slide 3 Heading",
    text: "This is the text for slide 3.",
    button1: "Find Out",
    button2: "Sign Up",
    imageUrl: "https://traininginchennai.in/images/graphic-web-design.png", // Placeholder image URL
  },
  {
    heading: "Slide 4 Heading",
    text: "This is the text for slide 4.",
    button1: "Explore",
    button2: "Register",
    imageUrl:
      "https://tkmkt.com/wp-content/uploads/2019/04/tk-services-01-1024x866.png", // Placeholder image URL
  },
];

const AnimatedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="slide-content">
              <div className="text-content">
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
                <div className="button-container">
                  <button className="gradient-button">{slide.button1}</button>
                  <button className="gradient-button">{slide.button2}</button>
                </div>
              </div>
              <div className="image-content">
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index}`}
                  className="image-png"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnimatedCarousel;
