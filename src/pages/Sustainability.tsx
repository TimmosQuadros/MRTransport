import React from 'react';

const Sustainability: React.FC = () => {
    return (
        <div className="sustainability-container">
            {/* Hero Section */}
            <section className="sustainability-hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Bæredygtighed</h1>
                    <p className="hero-subtitle">
                        Our commitment to creating a sustainable future in transportation.
                    </p>
                </div>
            </section>

            {/* Sustainability Initiatives */}
            <section className="initiatives-section">
                <h2 className="section-title">Our Sustainability Initiatives</h2>
                <div className="initiatives-grid">
                    {/* Initiative 1 */}
                    <div className="initiative-card">
                        <h3>Optimized Route Planning</h3>
                        <p>
                            By leveraging advanced technology, we reduce fuel consumption and emissions by optimizing our delivery routes. This ensures shorter travel times and minimal environmental impact.
                        </p>
                    </div>
                    {/* Initiative 2 */}
                    <div className="initiative-card">
                        <h3>Use of Diesel Additives</h3>
                        <p>
                            We implement diesel additives in our fleet to enhance engine performance and reduce harmful emissions, making our operations more eco-friendly.
                        </p>
                    </div>
                    {/* Initiative 3 */}
                    <div className="initiative-card">
                        <h3>Green Logistics</h3>
                        <p>
                            Our green logistics solutions help partners achieve their sustainability goals by adopting renewable energy and eco-conscious practices in the supply chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <section className="information-section">
                <h2>Why Sustainability Matters</h2>
                <p>
                    At MR Transport, we believe that a sustainable future is built through innovation and responsibility. By continuously improving our methods and investing in green technology, we are helping shape a cleaner, greener tomorrow.
                </p>
            </section>
        </div>
    );
};

export default Sustainability;
