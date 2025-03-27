import React, { useState } from 'react';
import './Bookings.css';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('current');
  
  // Sample booking data - replace with actual data from your backend
  const bookings = {
    current: [
      { id: 1, car: "BMW X5", startDate: "2024-03-15", endDate: "2024-03-20", status: "Active", price: "$500", customer: "John Doe" },
      { id: 2, car: "Tesla Model 3", startDate: "2024-03-16", endDate: "2024-03-18", status: "Active", price: "$300", customer: "Sarah Smith" }
    ],
    upcoming: [
      { id: 3, car: "Audi Q7", startDate: "2024-03-25", endDate: "2024-03-30", status: "Confirmed", price: "$600", customer: "Mike Johnson" }
    ],
    past: [
      { id: 4, car: "Mercedes C-Class", startDate: "2024-02-15", endDate: "2024-02-20", status: "Completed", price: "$450", customer: "Emily Brown" },
      { id: 5, car: "BMW 3 Series", startDate: "2024-02-10", endDate: "2024-02-12", status: "Completed", price: "$250", customer: "David Wilson" }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'confirmed': return 'status-confirmed';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };

  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1>Bookings Management</h1>
        <button className="new-booking-btn">
          <i className="fas fa-plus"></i> New Booking
        </button>
      </div>

      <div className="booking-tabs">
        <button 
          className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => handleTabChange('current')}
        >
          Current Bookings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleTabChange('upcoming')}
        >
          Upcoming Bookings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => handleTabChange('past')}
        >
          Past Bookings
        </button>
      </div>

      <div className="bookings-table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Customer</th>
              <th>Car</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings[activeTab].map(booking => (
              <tr key={booking.id}>
                <td>#{booking.id}</td>
                <td>{booking.customer}</td>
                <td>{booking.car}</td>
                <td>{booking.startDate}</td>
                <td>{booking.endDate}</td>
                <td>{booking.price}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <button className="action-btn view">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="action-btn edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  {activeTab !== 'past' && (
                    <button className="action-btn cancel">
                      <i className="fas fa-times"></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bookings-footer">
        <div className="pagination">
          <button className="page-btn"><i className="fas fa-chevron-left"></i></button>
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <button className="page-btn"><i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Bookings; 