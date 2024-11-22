import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About MR Transport</h1>
            <p>
                At MR Transport, we specialize in delivering efficient and reliable logistics solutions.
                With a commitment to innovation and sustainability, we ensure the seamless movement of
                goods across the globe.
            </p>
            <section className="about-details">
                <h2>Our Mission</h2>
                <p>
                    To provide top-notch transportation services tailored to meet the unique needs of
                    our clients. We aim to build long-term partnerships by exceeding expectations with
                    every delivery.
                </p>
                <h2>Our Vision</h2>
                <p>
                    To lead the logistics industry by adopting cutting-edge technologies, fostering
                    sustainability, and maintaining a customer-first approach in all we do.
                </p>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Extensive Fleet of Modern Vehicles</li>
                    <li>Global Logistics Expertise</li>
                    <li>Eco-Friendly Practices</li>
                    <li>Dedicated Team of Professionals</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
