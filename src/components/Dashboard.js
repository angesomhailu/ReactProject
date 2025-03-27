import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data - replace with actual data from your backend
  const dashboardData = {
    totalBookings: 150,
    activeRentals: 45,
    totalRevenue: 25000,
    availableCars: 30
  };

  const recentBookings = [
    { id: 1, customer: "John Doe", car: "BMW X5", date: "2024-03-15", status: "Active" },
    { id: 2, customer: "Jane Smith", car: "Audi Q7", date: "2024-03-14", status: "Completed" },
    { id: 3, customer: "Mike Johnson", car: "Tesla Model 3", date: "2024-03-13", status: "Pending" }
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon bookings">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="stat-details">
            <h3>Total Bookings</h3>
            <p>{dashboardData.totalBookings}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active">
            <i className="fas fa-car"></i>
          </div>
          <div className="stat-details">
            <h3>Active Rentals</h3>
            <p>{dashboardData.activeRentals}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon revenue">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stat-details">
            <h3>Total Revenue</h3>
            <p>${dashboardData.totalRevenue}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon available">
            <i className="fas fa-car-side"></i>
          </div>
          <div className="stat-details">
            <h3>Available Cars</h3>
            <p>{dashboardData.availableCars}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="recent-bookings">
        <h2>Recent Bookings</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Car</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map(booking => (
                <tr key={booking.id}>
                  <td>#{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.car}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={`status ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button className="view-btn">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">
            <i className="fas fa-plus"></i>
            New Booking
          </button>
          <button className="action-btn">
            <i className="fas fa-car"></i>
            Add Car
          </button>
          <button className="action-btn">
            <i className="fas fa-file-alt"></i>
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 