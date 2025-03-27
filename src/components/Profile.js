import React from 'react';
import './Profile.css';
import person3 from '../components/Personphoto/person3.jpg';
const Profile = () => {
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    joinDate: 'January 2023',
    totalRentals: 15
  };

  const rentalHistory = [
    {
      id: 1,
      car: 'Toyota Camry',
      startDate: '2024-02-15',
      endDate: '2024-02-18',
      status: 'Completed',
      amount: '$240'
    },
    {
      id: 2,
      car: 'Honda CR-V',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      status: 'Completed',
      amount: '$450'
    },
    {
      id: 3,
      car: 'Tesla Model 3',
      startDate: '2024-03-10',
      endDate: '2024-03-15',
      status: 'Upcoming',
      amount: '$600'
    }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={person3} alt="Profile" />
          <button className="edit-avatar">
            <i className="fas fa-camera"></i>
          </button>
        </div>
        <div className="profile-info">
          <h1>{userInfo.name}</h1>
          <p className="member-since">Member since {userInfo.joinDate}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section user-details">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Email</label>
              <p>{userInfo.email}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>{userInfo.phone}</p>
            </div>
            <div className="info-item">
              <label>Total Rentals</label>
              <p>{userInfo.totalRentals}</p>
            </div>
          </div>
        </div>

        <div className="profile-section rental-history">
          <h2>Rental History</h2>
          <div className="rental-list">
            {rentalHistory.map((rental) => (
              <div key={rental.id} className="rental-card">
                <div className="rental-header">
                  <h3>{rental.car}</h3>
                  <span className={`status ${rental.status.toLowerCase()}`}>
                    {rental.status}
                  </span>
                </div>
                <div className="rental-details">
                  <div className="rental-dates">
                    <div>
                      <label>Start Date</label>
                      <p>{rental.startDate}</p>
                    </div>
                    <div>
                      <label>End Date</label>
                      <p>{rental.endDate}</p>
                    </div>
                  </div>
                  <div className="rental-amount">
                    <label>Amount</label>
                    <p>{rental.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section preferences">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn">
              <i className="fas fa-car"></i>
              Book a Car
            </button>
            <button className="action-btn">
              <i className="fas fa-history"></i>
              View All Rentals
            </button>
            <button className="action-btn">
              <i className="fas fa-cog"></i>
              Settings
            </button>
            <button className="action-btn">
              <i className="fas fa-question-circle"></i>
              Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 