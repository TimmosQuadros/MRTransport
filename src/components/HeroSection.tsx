import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {} from "i18next";

const HeroSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Get in Touch');
    const navigate = useNavigate();
    const { t } = useTranslation();

    const tabs = [
        { id: 'Get in Touch', label: 'Contact' },
        { id: 'Cars', label: 'Fleet' },
        { id: 'Staff', label: 'Team' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero relative">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="hero__video"
                >
                    <source src="/banner-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div className="hero__overlay">
                    <h1 className="hero__title">{t('welcome')}</h1>
                    <p className="hero__subtitle">Global Logistics, Tailored Solutions</p>
                    <button className="hero__button" onClick={() => navigate('/inquiry')}>Get Started</button>
                </div>

                {/* Tabs */}
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={activeTab === tab.id ? 'active' : ''}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Tab Content Section */}
            <div className="tab-content-container">
                {activeTab === 'Get in Touch' && (
                    <div>
                        <h2>Contact Us</h2>
                        <p>Email: info@mrtransport.com</p>
                        <p>Phone: +123 456 7890</p>
                        <button className="hero__button" onClick={() => navigate('/contact')}>Contact</button>
                    </div>
                )}
                {activeTab === 'Cars' && (
                    <div>
                        <h2>Our Fleet</h2>
                        <p>Explore our range of transportation vehicles.</p>
                        <button className="hero__button" onClick={() => navigate('/fleet')}>Fleet</button>
                    </div>
                )}
                {activeTab === 'Staff' && (
                    <div>
                        <h2>Our Team</h2>
                        <p>Meet the professionals behind MR Transport.</p>
                        <button className="hero__button" onClick={() => navigate('/team')}>Team</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default HeroSection;
