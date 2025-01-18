import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    { name: "Facial Treatment", image: "/assets/facial.png" },
    { name: "Skin Care", image: "/assets/skin.png" },
    { name: "Waxing", image: "/assets/wax.png" },
    { name: "Manicure", image: "/assets/manicure.png" },
    { name: "Hair Styling", image: "/assets/hair.png" },
    { name: "Massage Therapy", image: "/assets/massage.png" },
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
