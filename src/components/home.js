import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to CarRent</h1>
        <p>Your journey begins with us - Find the perfect car for your needs</p>
      </header>
      <section className="cta-section">
        <h2>Ready to hit the road?</h2>
        <div className="cta-buttons">
          <Link to="/cars" className="btn btn-primary">
            Browse Cars
          </Link>
          <Link to="/components/Register" className="btn btn-secondary">
            Sign Up Now
          </Link>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Car</h3>
            <p>Browse our selection and find your perfect match</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Book Your Dates</h3>
            <p>Select your pickup and return dates</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Enjoy Your Ride</h3>
            <p>Pick up your car and start your journey</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;