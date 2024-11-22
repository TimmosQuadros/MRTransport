import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Freight Transportation',
            description: 'Efficient and reliable transportation solutions for goods of all sizes.',
            icon: '🚛',
        },
        {
            title: 'Warehousing Solutions',
            description: 'Secure storage facilities and inventory management tailored to your needs.',
            icon: '🏬',
        },
        {
            title: 'Logistics Consulting',
            description: 'Expert guidance to optimize your supply chain and reduce costs.',
            icon: '📈',
        },
        {
            title: 'Express Delivery',
            description: 'Fast and timely delivery services to meet urgent requirements.',
            icon: '⚡',
        },
        {
            title: 'Green Logistics',
            description: 'Environmentally friendly transport solutions to reduce your carbon footprint.',
            icon: '🌱',
        },
    ];

    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <p className="services-intro">
                At MR Transport, we offer a range of services to meet your logistics and transportation needs.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
