import React from 'react';
import './CarPage.css';
import car1 from '../components/Carphoto/car1.jpg';
import car2 from '../components/Carphoto/car2.jpg';
import car3 from '../components/Carphoto/car3.jpg';
import car4 from '../components/Carphoto/car4.jpg'; 

const Car = () => {
  const cars = [
    {
      id: 1,
      name: 'BMW X5',
      image: car1,
      price: '$100/day',
      specs: {
        seats: '5',
        transmission: 'Automatic',
        fuel: 'Petrol'
      }
    },
    {
      id: 2,
      name: 'Mercedes C-Class',
      image: car2,
      price: '$90/day',
      specs: {
        seats: '5',
        transmission: 'Automatic',
        fuel: 'Diesel'
      }
    },
    {
      id: 3,
      name: 'Audi Q7',
      image: car3,
      price: '$120/day',
      specs: {
        seats: '7',
        transmission: 'Automatic',
        fuel: 'Petrol'
      }
    },
    {
      id: 4,
      name: 'Tesla Model 3',
      image: car4,
      price: '$150/day',
      specs: {
        seats: '5',
        transmission: 'Automatic',
        fuel: 'Electric'
      }
    }
  ];

  return (
    <div className="car-page">
      <div className="car-page-header">
        <h1>Our Fleet</h1>
        <p>Choose from our premium selection of vehicles</p>
      </div>

      <div className="car-filters">
        <select className="filter-select">
          <option value="">All Types</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="luxury">Luxury</option>
        </select>
        <select className="filter-select">
          <option value="">Price Range</option>
          <option value="low">$50-$100/day</option>
          <option value="medium">$100-$150/day</option>
          <option value="high">$150+/day</option>
        </select>
      </div>

      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-item">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
              <div className="car-price">{car.price}</div>
            </div>
            <div className="car-info">
              <h3>{car.name}</h3>
              <div className="car-specs">
                <div className="spec">
                  <i className="fas fa-users"></i>
                  <span>{car.specs.seats} Seats</span>
                </div>
                <div className="spec">
                  <i className="fas fa-cog"></i>
                  <span>{car.specs.transmission}</span>
                </div>
                <div className="spec">
                  <i className="fas fa-gas-pump"></i>
                  <span>{car.specs.fuel}</span>
                </div>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car; 