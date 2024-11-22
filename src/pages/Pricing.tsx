import React from 'react';

const Pricing: React.FC = () => {
    const pricingPlans = [
        {
            title: 'Basic Plan',
            price: '$99/month',
            features: ['Up to 5 shipments', 'Standard support', 'Access to basic features'],
            recommended: false,
        },
        {
            title: 'Pro Plan',
            price: '$199/month',
            features: ['Up to 50 shipments', 'Priority support', 'Access to advanced features'],
            recommended: true,
        },
        {
            title: 'Enterprise Plan',
            price: 'Custom pricing',
            features: ['Unlimited shipments', 'Dedicated account manager', 'Tailored solutions'],
            recommended: false,
        },
    ];

    return (
        <div className="pricing-container">
            <h1 className="pricing-title">Our Pricing Plans</h1>
            <p className="pricing-intro">
                Choose the right plan that fits your business needs. Flexible and transparent pricing.
            </p>
            <div className="pricing-grid">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                        <h2 className="pricing-plan-title">{plan.title}</h2>
                        <p className="pricing-price">{plan.price}</p>
                        <ul className="pricing-features">
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <button className="pricing-button">
                            {plan.recommended ? 'Get Started' : 'Select Plan'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
