import './App.css';
import './index.css';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword  from './components/ForgotPassword';
import Contact from './components/ContactUs';
import Services from './components/Services';
import About from './components/About';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Logout from './components/Logout';
const App =()=>{
 
    return (
      <div > 
        <Router>
          <div>
           
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <div className="dropdown">
                      <Link to="/" className="navbar-brand dropdown-toggle" 
                        style={{color: 'blue', transition: '0.3s'}}
                        onMouseEnter={(e) => e.target.style.color = '#3498db'} 
                        onMouseLeave={(e) => e.target.style.color = '#2c3e50'}
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                      >
                        <h3>Angesom Car Rental</h3>
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/cars">Our Cars</Link></li>
                        <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                        <li><Link className="dropdown-item" to="/locations">Locations</Link></li>
                      </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                          <Link to='/' className="nav-link active" style={{color: '#2c3e50', transition: '0.3s', padding: '0 60px 20px '}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'} aria-current="page"><h5>Home</h5></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/components/ContactUs' className="nav-link active" style={{color: '#2c3e50', transition: '0.3s', padding: '0 30px 20px '}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'}><h5>Contact</h5></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/components/Services' className="nav-link active" style={{color: '#2c3e50', transition: '0.3s', padding: '0 30px 20px '}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'} ><h5>Services</h5></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/components/About' className="nav-link active" style={{color: '#2c3e50', transition: '0.3s', padding: '0 30px 20px '}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'}><h5>About</h5></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/components/Register' className="nav-link" style={{color: '#2c3e50', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'}><h5>Register</h5></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/components/Login' className="nav-link" style={{color: '#2c3e50', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'}    ><h5>Login</h5></Link>
                        </li>
                      </ul>
                      <form className="navbar-nav">
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle active" style={{color: '#2c3e50', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = '#e74c3c'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>Account</h6>
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><Link to='/components/Settings' style={{color: 'aqua  ', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = 'aqua'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'}   className="dropdown-item"><h5>Settings</h5></Link></li>
                            <li><Link to='/components/Profile' style={{color: 'aqua', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = 'aqua'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'} className="dropdown-item"><h5>Profile</h5></Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link to='/components/Logout' style={{color: 'aqua', transition: '0.3s'}} onMouseEnter={(e) => e.target.style.color = 'aqua'} onMouseLeave={(e) => e.target.style.color = '#2c3e50'} className="dropdown-item"><h5>Logout</h5></Link></li>
                          </ul>
                        </li>
                      </form>
                    </div>
                  </div>
                </nav>
          </div>
          
          <Routes>
            <Route path="/" element={ <Home/>}/> 
            <Route path="/components/Services" element={<Services/>}/>
            <Route path='/components/ContactUs' element={<Contact/>}/>
            <Route path='/components/About' element={<About/>}/>  
            <Route path="/components/Register" element={<Register/>}/>
            <Route path="/components/Login" element={<Login/>}/>
            <Route path='/components/ForgotPassword' element={<ForgotPassword/>}/>
            <Route path='/components/Settings' element={<Settings/>}/>
            <Route path='/components/Profile' element={<Profile/>}/>
            <Route path='/components/Logout' element={<Logout/>}/>
          </Routes>
        </Router>
      </div>
    );
}
export default App;