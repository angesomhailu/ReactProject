import './App.css';
import './index.css';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/ContactUs';
import Services from './components/Services';
import About from './components/About';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Car from './components/CarPage';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import Payments from './components/Payments';
import Notifications from './components/Notifications';
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
      return <Navigate to="/components/Home" />;
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
        {/* Simple navbar with just logo and auth buttons */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" style={{color: 'blue'}}>
              <h3>Angesom Car Rental</h3>
            </Link>
                <Link to="/components/Home" className="btn btn-outline-primary me-2">Home</Link>
                <Link to="/components/Dashboard" className="btn btn-primary">Dashboard</Link>
                <Link to="/components/Car" className="btn btn-primary">Car</Link>
                <Link to="/components/Services " className="btn btn-outline-primary me-2">Services</Link>
                <Link to="/components/About" className="btn btn-primary">About</Link>
                <Link to="/components/ContactUs" className="btn btn-outline-primary me-2">Contact Us</Link>
            <div className="ms-auto">
              {isAuthenticated ? (
                <div className="d-flex gap-2" style={{marginRight: '10px'}} >
                <Link to="/components/Home" className="btn btn-outline-primary me-2">Home</Link>
                <Link to="/components/Dashboard" className="btn btn-primary">Dashboard</Link>
                <Link to="/components/Car" className="btn btn-primary">Car</Link>
                <Link to="/components/Services " className="btn btn-outline-primary me-2">Services</Link>
                <Link to="/components/About" className="btn btn-primary">About</Link>
                <Link to="/components/ContactUs" className="btn btn-outline-primary me-2">Contact Us</Link>
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link to="/components/Profile" className="dropdown-item">Profile</Link></li>
                    <li><Link to="/components/Settings" className="dropdown-item">Settings</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><button onClick={handleSignOut} className="dropdown-item">Logout</button></li>
                  </ul>
                </div>


                </div>
              ) : (
                <>
                  <Link to="/components/Login" className="btn btn-outline-primary me-2">Login</Link>
                  <Link to="/components/Register" className="btn btn-primary">Register</Link>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Main content with padding for fixed navbar */}
        <div style={{ paddingTop: '76px' }}>
          <Routes>
            <Route path="/" element={
              isAuthenticated ? (
                <Navigate to="/components/Home" />
              ) : (
                <LandingPage />
              )
            }/>
            
            <Route path="/components/Home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }/>

            <Route path="/components/Logout" element={
              <ProtectedRoute>  
                <Logout />
              </ProtectedRoute>
            }/> 
            <Route path="/components/Profile  " element={
              <ProtectedRoute>  
                <Profile />
              </ProtectedRoute>
            }/>
            <Route path="/components/Settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }/> 
            <Route path="/components/Notifications" element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }/> 
            <Route path="/components/Payments" element={
              <ProtectedRoute>
                <Payments />
              </ProtectedRoute>
            }/>  
            <Route path="/components/Bookings" element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }/> 
            <Route path="/components/Dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }/> 
            <Route path="/components/Services" element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }/> 
            <Route path="/components/About" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }/> 
            <Route path="/components/ContactUs" element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }/>
            <Route path="/components/Car" element={
              <ProtectedRoute>
                <Car />
              </ProtectedRoute>
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
      </div>
    </Router>
  );
}

export default App;