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
            <Link to='/'>Home</Link>
            <Link to='/components/ContactUs'>Contact </Link>
            <Link to='/components/Services'>Services</Link>
            <Link to='/components/About'>About</Link>
            <Link to='/components/Settings'>Settings</Link>
            <Link to='/components/Profile'>Profile</Link>
            <Link to='/components/Register'>Register</Link>
            <Link to='/components/Login'>Login</Link> 
            <Link to='/components/Logout'>Logout</Link>
           {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Angesom Car Rental </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Setting</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
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