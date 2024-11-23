import React from 'react';

const Career: React.FC = () => {
    return (
        <div className="career-container">
            {/* Hero Section */}
            <section className="career-hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Join Our Team</h1>
                    <p className="hero-subtitle">
                        Be part of a dynamic and innovative transportation company where your skills drive success.
                    </p>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="why-join">
                <h2 className="section-title">Why Work at MR Transport?</h2>
                <p>
                    At MR Transport, we value our employees as the cornerstone of our success. Whether you're an experienced professional or just starting your career, we offer opportunities to grow, lead, and make an impact.
                </p>
                <ul className="benefits-list">
                    <li>Competitive salaries and benefits</li>
                    <li>Opportunities for professional development</li>
                    <li>Inclusive and diverse work culture</li>
                    <li>Commitment to sustainability and innovation</li>
                </ul>
            </section>

            {/* Job Openings Section */}
            <section className="job-openings">
                <h2 className="section-title">Current Job Openings</h2>
                <div className="jobs-grid">
                    {/* Job 1 */}
                    <div className="job-card">
                        <h3>Logistics Coordinator</h3>
                        <p>
                            Manage and optimize transportation logistics for our clients while ensuring top-notch service and efficiency.
                        </p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    {/* Job 2 */}
                    <div className="job-card">
                        <h3>Truck Driver</h3>
                        <p>
                            Join our team of skilled drivers and be part of our commitment to safe and timely deliveries.
                        </p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                    {/* Job 3 */}
                    <div className="job-card">
                        <h3>Customer Service Specialist</h3>
                        <p>
                            Provide exceptional support to our customers and ensure their transportation needs are met seamlessly.
                        </p>
                        <button className="apply-button">Apply Now</button>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="call-to-action">
                <h2>Ready to Join Us?</h2>
                <p>
                    Explore how you can become part of the MR Transport family and make a difference. Apply today!
                </p>
                <button className="cta-button">View All Jobs</button>
            </section>
        </div>
    );
};

export default Career;
