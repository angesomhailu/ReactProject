import React, { useState } from 'react';
import './Payments.css';

const Payments = () => {
  const [activeTab, setActiveTab] = useState('recent');

  // Sample payment data - replace with actual data from your backend
  const payments = {
    recent: [
      { 
        id: "PAY-001",
        customer: "John Doe",
        amount: 500,
        date: "2024-03-15",
        status: "Completed",
        method: "Credit Card",
        booking: "BMW X5 (3 days)"
      },
      {
        id: "PAY-002",
        customer: "Sarah Smith",
        amount: 300,
        date: "2024-03-14",
        status: "Pending",
        method: "PayPal",
        booking: "Tesla Model 3 (2 days)"
      }
    ],
    pending: [
      {
        id: "PAY-003",
        customer: "Mike Johnson",
        amount: 600,
        date: "2024-03-16",
        status: "Pending",
        method: "Bank Transfer",
        booking: "Audi Q7 (4 days)"
      }
    ]
  };

  const getStatusClass = (status) => {
    return status.toLowerCase() === 'completed' ? 'status-completed' : 'status-pending';
  };

  return (
    <div className="payments-page">
      <div className="payments-header">
        <div className="header-content">
          <h1>Payments</h1>
          <div className="payment-summary">
            <div className="summary-card">
              <div className="summary-icon total">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="summary-details">
                <h3>Total Revenue</h3>
                <p>$15,400</p>
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon pending">
                <i className="fas fa-clock"></i>
              </div>
              <div className="summary-details">
                <h3>Pending Payments</h3>
                <p>$900</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payments-content">
        <div className="payment-tabs">
          <button 
            className={`tab-btn ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            Recent Payments
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Payments
          </button>
        </div>

        <div className="payments-table-container">
          <table className="payments-table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Customer</th>
                <th>Booking</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments[activeTab].map(payment => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.customer}</td>
                  <td>{payment.booking}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.date}</td>
                  <td>{payment.method}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View Details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn download" title="Download Invoice">
                        <i className="fas fa-download"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="payments-footer">
          <div className="pagination">
            <button className="page-btn"><i className="fas fa-chevron-left"></i></button>
            <span className="page-number active">1</span>
            <span className="page-number">2</span>
            <span className="page-number">3</span>
            <button className="page-btn"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments; 