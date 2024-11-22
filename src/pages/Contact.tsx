import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                Have questions or need assistance? We're here to help. Feel free to reach out to us using the details below.
            </p>
            <section className="contact-details">
                <h2>Our Office</h2>
                <p>MR Transport Headquarters</p>
                <p>123 Logistics Street</p>
                <p>Transport City, TC 45678</p>

                <h2>Email</h2>
                <p>
                    <a href="mailto:info@mrtransport.com">info@mrtransport.com</a>
                </p>

                <h2>Phone</h2>
                <p>
                    <a href="tel:+1234567890">+1 234 567 890</a>
                </p>
            </section>

            <div className="send-message">
                <Link to="/inquiry" className="send-message-button">
                    Send Message
                </Link>
            </div>
        </div>
    );
};

export default Contact;