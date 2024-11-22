import React, { useState } from 'react';

const Inquiry: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch('/.netlify/functions/sendInquiry', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Your inquiry was submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to submit your inquiry. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="inquiry-container">
            <h1>Get in Touch with MR Transport</h1>
            <p>We’d love to hear from you. Please fill out the form below to inquire about our services.</p>
            <form className="inquiry-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className="submit-button">Submit</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Inquiry;
