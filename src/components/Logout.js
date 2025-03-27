import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    // Add your logout logic here
    // For example: clear local storage, reset auth state, etc.
    setTimeout(() => {

      setIsLoading(false);

      // Navigate to login page

      navigate('/components/Login'); // Update this path to match your route configuration

    }, 1500);
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-icon">
          <i className="fas fa-sign-out-alt"></i>
        </div>
        <h2>Sign Out</h2>
        <p>Are you sure you want to sign out?</p>
        
        <div className="logout-buttons">
          <button 
            className={`logout-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Signing Out...
              </>
            ) : (
              'Sign Out'
            )}
          </button>
          <button 
            className="cancel-btn"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>

        <div className="logout-footer">
          <p>
            <i className="fas fa-info-circle"></i>
            You'll need to sign in again to access your account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout; 