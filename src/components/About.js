import React from 'react';
import './About.css';
import person1 from '../components/Personphoto/person1.jpg';
import person2 from '../components/Personphoto/person2.jpg';
import person3 from '../components/Personphoto/person3.jpg';
import person4 from '../components/Personphoto/person4.jpg';
import person5 from '../components/Personphoto/person5.jpg';
// import car1 from '../components/Carphoto/car1.jpg';
// import car2 from '../components/Carphoto/car2.jpg';
// import car3 from '../components/Carphoto/car3.jpg';
// import car4 from '../components/Carphoto/car4.jpg'; 

const About = () => {
  const stats = [
    { number: '10+', text: 'Years Experience' },
    { number: '500+', text: 'Cars Available' },
    { number: '50K+', text: 'Happy Customers' },
    { number: '100+', text: 'Pickup Locations' }
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: person1,
      description: 'With over 15 years in the automotive industry, John leads our company with passion and innovation.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      image: person4,
      description: 'Sarah ensures smooth operations and exceptional service delivery across all our locations.'
    },
    {
      name: 'Michael Chen',
      position: 'Fleet Manager',
      image: person2,
      description: 'Michael oversees our diverse fleet of vehicles, ensuring top-notch maintenance and quality.'
    },
    {
      name: 'Emily Davis',
      position: 'Customer Relations',
      image: person3,
      description: 'Emily ensures our customers receive the best possible service experience.'
    },
    {
      name: 'David Wilson',
      position: 'Technical Manager',
      image: person5,
      description: 'David leads our technical team ensuring all vehicles meet our high standards.'
    }
  ];

  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>About CarRent</h1>
        <p>Your Trusted Partner in Car Rental Services Since 2013</p>
      </section>

      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2013, CarRent has grown from a small local car rental service
            to one of the leading providers in the industry. Our journey began with
            a simple mission: to provide reliable, affordable, and convenient car
            rental services to our customers.
          </p>
          <p>
            Today, we operate in over 100 locations nationwide, offering a wide
            range of vehicles to meet every need and budget. Our commitment to
            customer satisfaction and service excellence remains at the heart of
            everything we do.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide exceptional car rental experiences through reliable service,
            transparent pricing, and a commitment to customer satisfaction.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted and preferred car rental service provider,
            known for innovation, reliability, and customer-centric approach.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <i className="fas fa-handshake"></i>
            <h3>Integrity</h3>
            <p>We conduct our business with honesty and transparency</p>
          </div>
          <div className="value-item">
            <i className="fas fa-star"></i>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do</p>
          </div>
          <div className="value-item">
            <i className="fas fa-users"></i>
            <h3>Customer Focus</h3>
            <p>Our customers are at the heart of our business</p>
          </div>
          <div className="value-item">
            <i className="fas fa-leaf"></i>
            <h3>Sustainability</h3>
            <p>We are committed to environmental responsibility</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 