import './App.css';
import './index.css';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/ContactUs';
import Services from './components/Services';
import About from './components/About';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Logout from './components/Logout';
import LandingPage from './components/LandingPage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    }
  }, []);

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/components/Login" />;
    }
    return children;
  };

  // Public Route component (accessible only when NOT authenticated)
  const PublicRoute = ({ children }) => {
    if (isAuthenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{color: 'blue'}}>
              <h3>Angesom Car Rental</h3>
            </Link>
            <div className="ms-auto">
              {isAuthenticated ? (
                <button 
                  onClick={handleSignOut} 
                  className="btn btn-outline-danger"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/components/Login" className="btn btn-outline-primary me-2">Login</Link>
                  <Link to="/components/Register" className="btn btn-primary">Register</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            isAuthenticated ? (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) : (
              <LandingPage />
            )
          }/>
          
          <Route path="/components/Register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }/>
          <Route path="/components/Login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }/>
          <Route path="/components/ForgotPassword" element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;