import React from 'react';
import { Link } from 'react-router-dom';
import './Facilities.css';

function Facilities() {
  // Facility items with placeholder colors instead of images
  const facilityItems = [
    { 
      id: 1, 
      title: 'Main Salon Area', 
      description: 'Our spacious main salon area features comfortable barber chairs and modern equipment.',
      color: '#3a3a3a'
    },
    { 
      id: 2, 
      title: 'VIP Lounge', 
      description: 'Exclusive area for our premium clients with private service and complimentary beverages.',
      color: '#4a4a4a'
    },
    { 
      id: 3, 
      title: 'Relaxation Zone', 
      description: 'Comfortable seating area with magazines, TV, and refreshments while you wait.',
      color: '#5a5a5a'
    },
    { 
      id: 4, 
      title: 'Shaving Station', 
      description: 'Dedicated area for our traditional hot towel shaves with premium products.',
      color: '#6a6a6a'
    },
    { 
      id: 5, 
      title: 'Product Display', 
      description: 'Browse our selection of premium grooming products available for purchase.',
      color: '#7a7a7a'
    },
    { 
      id: 6, 
      title: 'Wash Stations', 
      description: 'Ergonomic wash stations with comfortable neck rests and premium shampoos.',
      color: '#8a8a8a'
    }
  ];

  return (
    <div className="facilities-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Facilities</h1>
          <p>Experience comfort and luxury in our state-of-the-art barbershop</p>
        </div>
      </div>
      
      {/* Intro Section */}
      <section className="facilities-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Welcome to Our Space</h2>
            <p>
              Our barbershop is designed to provide the perfect blend of traditional barbering atmosphere with modern comforts.
              From the moment you step in, you'll experience a welcoming environment where you can relax and enjoy premium grooming services.
            </p>
            <p>
              We've carefully crafted each area of our shop to enhance your experience, with attention to detail in every corner.
              Explore our facilities below and see what makes our barbershop special.
            </p>
          </div>
        </div>
      </section>
      
      {/* Facilities Gallery */}
      <section className="facilities-gallery">
        <div className="container">
          <div className="gallery-grid">
            {facilityItems.map(item => (
              <div key={item.id} className="facility-item">
                <div 
                  className="facility-image" 
                  style={{ backgroundColor: item.color }}
                >
                  <div className="facility-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <div className="facility-description">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="facilities-features">
        <div className="container">
          <h2>Amenities & Features</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎮</div>
              <h3>Entertainment</h3>
              <p>TVs, magazines, and free Wi-Fi to keep you entertained during your visit</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🥃</div>
              <h3>Complimentary Drinks</h3>
              <p>Enjoy a selection of beverages including coffee, water, and premium options</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">❄️</div>
              <h3>Climate Controlled</h3>
              <p>Comfortable temperature year-round for the perfect grooming experience</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">♿</div>
              <h3>Accessibility</h3>
              <p>Wheelchair accessible entrance and facilities for all clients</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🚗</div>
              <h3>Parking</h3>
              <p>Convenient parking options available for our clients</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">🧼</div>
              <h3>Sanitization</h3>
              <p>Rigorous cleaning protocols and sterilized equipment for every client</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Virtual Tour CTA */}
      <section className="virtual-tour">
        <div className="container">
          <div className="tour-content">
            <h2>Take a Virtual Tour</h2>
            <p>Can't visit in person? Explore our barbershop through our interactive virtual tour.</p>
            <button className="btn btn-primary">Launch Virtual Tour</button>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="booking-cta">
        <div className="container">
          <h2>Ready to Experience Our Facilities?</h2>
          <p>Book your appointment today and enjoy our premium barbershop experience.</p>
          <div className="cta-buttons">
            <Link to="/appointments" className="btn btn-primary">Book Appointment</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilities;