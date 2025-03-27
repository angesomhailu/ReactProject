import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../components/Carphoto/car1.jpg';
import car2 from '../components/Carphoto/car2.jpg';
import car3 from '../components/Carphoto/car3.jpg';
import car4 from '../components/Carphoto/car4.jpg';
import car5 from '../components/Carphoto/car5.jpg';
const LandingPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center my-4">
          <h1>Welcome to Angesom Car Rental</h1>
          <p className="lead">Discover our premium fleet of vehicles</p>
        </div>
      </div>
      {/* Add your car images and descriptions here */}
      <div className="row">
        {/* Example car card - repeat as needed */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={car5} className="card-img-top" alt="Car" />
            <div className="card-body">
              <h5 className="card-title">Luxury Sedan</h5>
              <p className="card-text">Experience comfort and style with our premium vehicles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={car2} className="card-img-top" alt="Car" />
            <div className="card-body">
              <h5 className="card-title">Luxury Sedan</h5>
              <p className="card-text">Experience comfort and style with our premium vehicles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={car3} className="card-img-top" alt="Car" />
            <div className="card-body">
              <h5 className="card-title">Luxury Sedan</h5>
              <p className="card-text">Experience comfort and style with our premium vehicles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src={car4} className="card-img-top" alt="Car" />
            <div className="card-body">
              <h5 className="card-title">Luxury Sedan</h5>
              <p className="card-text">Experience comfort and style with our premium vehicles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 