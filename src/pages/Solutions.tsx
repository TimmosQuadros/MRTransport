import React from 'react';
import {useNavigate} from "react-router-dom";

const Solutions: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="solutions-container">
            {/* Hero Section */}
            <section className="solutions-hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Our Solutions</h1>
                    <p className="hero-subtitle">
                        Discover how we simplify logistics and transportation for businesses of all sizes.
                    </p>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="solutions-section">
                <h2 className="section-title">What We Offer</h2>
                <div className="solutions-grid">
                    {/* Solution 1 */}
                    <div className="solution-card">
                        <h3>Freight Transportation</h3>
                        <p>
                            Reliable and timely transport services across land, sea, and air. We ensure your goods arrive on schedule, every time.
                        </p>
                    </div>
                    {/* Solution 2 */}
                    <div className="solution-card">
                        <h3>Warehousing</h3>
                        <p>
                            State-of-the-art storage facilities to keep your inventory secure and accessible whenever you need it.
                        </p>
                    </div>
                    {/* Solution 3 */}
                    <div className="solution-card">
                        <h3>Supply Chain Management</h3>
                        <p>
                            Streamlined and efficient management of your supply chain to optimize your business operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>Need a Custom Solution?</h2>
                <p>
                    We offer tailored logistics and transportation solutions to meet your unique needs. Contact us to learn more.
                </p>
                <button className="cta-button" onClick={() => navigate('/inquiry')}>Contact Us</button>
            </section>
        </div>
    );
};

export default Solutions;
