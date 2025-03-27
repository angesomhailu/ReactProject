import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import car1 from '../components/Carphoto/car1.jpg';
import car2 from '../components/Carphoto/car2.jpg';
import car3 from '../components/Carphoto/car3.jpg';
import car4 from '../components/Carphoto/car4.jpg';
import car7 from '../components/Carphoto/car7.jpg';
import person1 from '../components/Personphoto/person1.jpg';
import person2 from '../components/Personphoto/person2.jpg';
import person3 from '../components/Personphoto/person3.jpg';
import person4 from '../components/Personphoto/person4.jpg';
import person5 from '../components/Personphoto/person5.jpg';

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredCars = [
    {
      id: 1,
      name: 'BMW X5 2024',
      category: 'Luxury SUV',
      price: '$100/day',
      image: car1,
      features: ['Automatic', '5 Seats', 'GPS', 'Leather Interior']
    },
    {
      id: 2,
      name: 'Mercedes S-Class',
      category: 'Premium Sedan',
      price: '$150/day',
      image: car2,
      features: ['Automatic', '4 Seats', 'Leather Interior', 'Premium Sound']
    },
    {
      id: 3,
      name: 'Tesla Model S',
      category: 'Electric Luxury',
      price: '$130/day',
      image: car3,
      features: ['Autopilot', '5 Seats', 'Electric', '400mi Range']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Business Executive",
      image: person1,
      text: "The service was exceptional! The car was in perfect condition and the staff was very professional.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Travel Blogger",
      image: person4,
      text: "Best car rental experience I've ever had. The process was smooth and the vehicles are top-notch.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Entrepreneur",
      image: person2,
      text: "Excellent selection of luxury vehicles. Will definitely use their services again!",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: "fas fa-car",
      title: "Latest Models",
      description: "Access to the newest and most luxurious vehicles"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Fully Insured",
      description: "Comprehensive insurance coverage included"
    },
    {
      icon: "fas fa-clock",
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Flexible Pickup",
      description: "Multiple convenient pickup locations"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experience Luxury Car Rental</h1>
          <p>Drive Your Dreams with Our Premium Fleet</p>
          <div className="hero-buttons">
            <Link to="/components/Register" className="primary-btn">Get Started</Link>
            <Link to="/components/Car" className="secondary-btn">View Fleet</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <i className={benefit.icon}></i>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-section">
        <h2>Featured Vehicles</h2>
        <p className="section-subtitle">Discover our most popular rental choices</p>
        <div className="cars-grid">
          {featuredCars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <img src={car.image} alt={car.name} />
                <div className="car-overlay">
                  <Link to="/components/Login" className="book-now">Book Now</Link>
                </div>
              </div>
              <div className="car-details">
                <h3>{car.name}</h3>
                <p className="car-category">{car.category}</p>
                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="car-price">
                  <span className="price">{car.price}</span>
                  <span className="period">per day</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>{testimonial.name}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="app-features">
        <div className="app-content">
          <h2>Download Our Mobile App</h2>
          <p>Get the best car rental experience with our mobile app</p>
          <div className="app-buttons">
            <a href="https://www.apple.com/app-store/" className="app-btn">
              <i className="fab fa-apple"></i>
              App Store
            </a>
            <a href="https://play.google.com/store/games?hl=en" className="app-btn">
              <i className="fab fa-google-play"></i>
              Google Play
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={car7} alt="Mobile App" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join us today and experience premium car rental services</p>
          <Link to="/components/Register" className="cta-button">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 