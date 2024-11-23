import React from 'react';
import {useNavigate} from "react-router-dom";

const Why: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="hvorfor-dsv-container">
            {/* Hero Section */}
            <section className="hvorfor-dsv-hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Why Choose MR Transport?</h1>
                    <p className="hero-subtitle">
                        Discover how we deliver unmatched logistics and transport solutions tailored to your needs.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="content-section">
                <h2 className="content-title">What Sets Us Apart?</h2>
                <p className="content-text">
                    At MR Transport, we pride ourselves on offering:
                </p>
                <ul className="content-list">
                    <li>Reliable and timely deliveries</li>
                    <li>Advanced logistics solutions</li>
                    <li>A customer-first approach</li>
                    <li>Sustainability and green initiatives</li>
                </ul>

                <p className="content-text">
                    Our team is dedicated to ensuring that your cargo reaches its destination safely and efficiently.
                </p>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2 className="cta-title">Ready to Work with Us?</h2>
                <p className="cta-text">
                    Experience the MR Transport difference today. Reach out to learn more about how we can support your business.
                </p>
                <button className="cta-button" onClick={() => navigate('/inquiry')}>Contact Us</button>
            </section>
        </div>
    );
};

export default Why;
