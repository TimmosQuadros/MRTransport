import React from 'react';

const Inquiry: React.FC = () => {
    return (
        <div className="inquiry-container">
            <h1>Get in Touch with MR Transport</h1>
            <p>We’d love to hear from you. Please fill out the form below to inquire about our services.</p>
            <form className="inquiry-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Full Name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email Address" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Inquiry;
