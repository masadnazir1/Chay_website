// src/components/ServiceBox.js
import React from "react";
import "./ServiceBox.css";

const ServiceBox = () => {
  // Define services data within the component
  const services = [
    {
      title: "Web Development",
      subtitle: "Frontend & Backend",
      description: "We create stunning websites and powerful web applications.",
      imageUrl:
        "https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png?f=webp",
    },
    {
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description:
        "We build native and cross-platform mobile apps for all platforms.",
      imageUrl:
        "https://www.prismetric.com/wp-content/uploads/2021/06/Mobile-App-Development.png",
    },
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-box">
         

          {/* <a href="#" className="Contact">
              Learn More
            </a> */}

          <div className="service-content">
            <h2 className="animated-text">{service.title}</h2>
            <h3>{service.subtitle}</h3>
            <p>{service.description}</p>

          

          </div>
          <div className="image-container">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="animated-image"
            />
          </div>

          <div>  <a href="#" className="Contact">
            Get Started
          </a>
 </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;
