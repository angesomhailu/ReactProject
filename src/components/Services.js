import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-car',
      title: 'Wide Car Selection',
      description: 'Choose from our extensive fleet of vehicles ranging from economy to luxury cars.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance options to ensure your peace of mind during rental.'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you whenever you need help.'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Flexible Pickup',
      description: 'Multiple pickup and drop-off locations for your convenience.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Maintenance Included',
      description: 'Regular maintenance and roadside assistance included in every rental.'
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Best Price Guarantee',
      description: 'Competitive pricing with no hidden fees or charges.'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: [
        'Economy Cars',
        'Basic Insurance',
        'Standard Support',
        '1 Driver Allowed',
        '100 Miles/Day',
        'Fuel Policy'
      ]
    },
    {
      name: 'Premium',
      price: '49',
      features: [
        'Mid-Size Cars',
        'Extended Insurance',
        'Priority Support',
        '2 Drivers Allowed',
        'Unlimited Miles',
        'Fuel Policy'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '89',
      features: [
        'Luxury Cars',
        'Full Insurance',
        '24/7 VIP Support',
        'Multiple Drivers',
        'Unlimited Miles',
        'Flexible Fuel Policy'
      ]
    }
  ];

  return (
    <div className="services-container">
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Discover the perfect car rental solution for your needs</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="pricing-section">
        <h2>Rental Plans</h2>
        <p>Choose the perfect plan for your journey</p>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/day</span>
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="select-plan-btn">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="fas fa-award"></i>
            <h3>Experience</h3>
            <p>Over 10 years of experience in car rental services</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-star"></i>
            <h3>Quality</h3>
            <p>Well-maintained vehicles and professional service</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-heart"></i>
            <h3>Customer Satisfaction</h3>
            <p>Rated 4.8/5 by our happy customers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 