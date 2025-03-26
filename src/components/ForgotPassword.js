import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Reset Password</h2>
        {!isSubmitted ? (
          <>
            <p className="forgot-password-subtitle">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="reset-button">
              Send Reset Link
            </button>
          </>
        ) : (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>Password reset instructions have been sent to your email.</p>
          </div>
        )}

        <div className="form-links">
          <Link to="/components/Login" className="back-to-login">
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword; 