import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Request',
      message: 'John Doe has requested to book BMW X5',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of $500 received from Sarah Smith',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'return',
      title: 'Vehicle Return Alert',
      message: 'Tesla Model 3 is due for return today',
      time: '2 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'System Update',
      message: 'System maintenance scheduled for tonight',
      time: '1 day ago',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'booking':
        return 'fa-calendar-check';
      case 'payment':
        return 'fa-dollar-sign';
      case 'return':
        return 'fa-car';
      case 'system':
        return 'fa-cog';
      default:
        return 'fa-bell';
    }
  };

  const getNotificationClass = (type) => {
    switch(type) {
      case 'booking':
        return 'booking';
      case 'payment':
        return 'payment';
      case 'return':
        return 'return';
      case 'system':
        return 'system';
      default:
        return '';
    }
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h1>Notifications</h1>
        <div className="header-actions">
          <button className="mark-all-btn" onClick={markAllAsRead}>
            Mark All as Read
          </button>
        </div>
      </div>

      <div className="notifications-container">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
          >
            <div className={`notification-icon ${getNotificationClass(notification.type)}`}>
              <i className={`fas ${getNotificationIcon(notification.type)}`}></i>
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <h3>{notification.title}</h3>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-message">{notification.message}</p>
            </div>
            {!notification.read && (
              <button 
                className="mark-read-btn"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="notifications-footer">
        <button className="load-more-btn">
          Load More
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Notifications; 