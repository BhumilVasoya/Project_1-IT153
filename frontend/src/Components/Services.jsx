import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { img: "images/image3.jpg", title: "Workout Programs", path: "/workout" },
    { img: "images/image6.jpg", title: "Diet Plan", path: "/diet" },
    { img: "images/image4.jpg", title: "Health Fitness", path: "/fitness" },
    { img: "images/749796.jpg", title: "Medical Condition Programs", path: "/training" },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Programs</h2>
      <div className="services-content">
        {services.map((item, index) => (
          <div className="row" key={index} onClick={() => navigate(item.path)}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
