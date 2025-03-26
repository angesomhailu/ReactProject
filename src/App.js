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
      <div className='App'> 
        <Router>
          <div className='nav'>
           
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" ><h3>ANGESOM CAR RENTAL</h3></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/' class="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/components/ContactUs' class="nav-link" >Contact</Link>
              </li>
              <li class="nav-item">
                <Link  to='/components/Services' class="nav-link" >Services</Link>
              </li>
              <li class="nav-item">
                <Link to='/components/About' class="nav-link" >About</Link>
              </li>
              <li class="nav-item">
                <Link to='/components/Register' class="nav-link" >Register</Link>
              </li>
              <li class="nav-item">
                <Link to='/components/Login' class="nav-link" >Login</Link>
              </li>
            
              <li class="nav-item dropdown text-align float-end">
                <Link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  info
                </Link>
                <ul class="dropdown-menu">
                  <li><Link to='/components/Settings' class="dropdown-item" >Setting</Link></li>
                  <li><Link to='/components/Profile'class="dropdown-item" >Profile</Link></li>
                  <li><Link to='/components/Logout' class="dropdown-item" >Logout</Link></li>
                </ul>
              </li>
            </ul>
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