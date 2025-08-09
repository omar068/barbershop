import React from 'react';
import { Link } from 'react-router-dom';
import './PremiumServices.css';

function PremiumServices() {
  return (
    <div className="premium-services-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Premium Services</h1>
          <p>Experience the ultimate in grooming and relaxation</p>
        </div>
      </div>
      
      {/* Premium Services Section */}
      <section className="premium-services-section">
        <div className="container">
          <div className="premium-services-intro">
            <h2>Elevate Your Grooming Experience</h2>
            <p>
              Our premium services are designed for the discerning gentleman who appreciates the finer things in life.
              Each service includes complimentary beverages, hot towel treatment, and personalized attention from our master barbers.
            </p>
          </div>
          
          <div className="premium-services-list">
            <div className="premium-service-item">
              <div className="premium-service-image" style={{ backgroundColor: '#3a3a3a' }}>
                <div className="premium-service-badge">PREMIUM</div>
              </div>
              <div className="premium-service-content">
                <h3>Executive Package</h3>
                <p>
                  The complete grooming experience for the modern executive. Includes precision haircut, 
                  beard styling, hot towel facial, and scalp massage.
                </p>
                <ul className="premium-service-features">
                  <li>60-minute session</li>
                  <li>Complimentary whiskey or premium coffee</li>
                  <li>Luxury grooming products</li>
                  <li>Neck and shoulder massage</li>
                </ul>
                <div className="premium-service-price">$85</div>
                <Link to="/appointments?service=Executive%20Package" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
            
            <div className="premium-service-item">
              <div className="premium-service-image" style={{ backgroundColor: '#4a4a4a' }}>
                <div className="premium-service-badge">PREMIUM</div>
              </div>
              <div className="premium-service-content">
                <h3>Luxury Shave Ritual</h3>
                <p>
                  Experience the art of traditional straight razor shaving elevated to new heights.
                  Multiple hot towel applications, premium oils, and soothing aftershave balm.
                </p>
                <ul className="premium-service-features">
                  <li>45-minute session</li>
                  <li>Pre-shave oil treatment</li>
                  <li>Multiple hot towel applications</li>
                  <li>Facial massage with premium moisturizer</li>
                </ul>
                <div className="premium-service-price">$65</div>
                <Link to="/appointments?service=Luxury%20Shave%20Ritual" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
            
            <div className="premium-service-item">
              <div className="premium-service-image" style={{ backgroundColor: '#5a5a5a' }}>
                <div className="premium-service-badge">PREMIUM</div>
              </div>
              <div className="premium-service-content">
                <h3>Father & Son Experience</h3>
                <p>
                  Create lasting memories with our special package for fathers and sons.
                  Side-by-side haircuts with personalized styling consultation.
                </p>
                <ul className="premium-service-features">
                  <li>Matching haircuts or personalized styles</li>
                  <li>Grooming tips and home care advice</li>
                  <li>Complimentary beverages</li>
                  <li>Souvenir photo</li>
                </ul>
                <div className="premium-service-price">$90</div>
                <Link to="/appointments?service=Father%20and%20Son%20Experience" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
            
            <div className="premium-service-item">
              <div className="premium-service-image" style={{ backgroundColor: '#6a6a6a' }}>
                <div className="premium-service-badge">PREMIUM</div>
              </div>
              <div className="premium-service-content">
                <h3>Groom's Package</h3>
                <p>
                  Prepare for your big day with our comprehensive groom's package.
                  Includes trial run and day-of grooming to ensure you look your best.
                </p>
                <ul className="premium-service-features">
                  <li>Pre-wedding consultation and style planning</li>
                  <li>Trial haircut and beard styling</li>
                  <li>Day-of wedding grooming service</li>
                  <li>Complimentary grooming kit</li>
                </ul>
                <div className="premium-service-price">$150</div>
                <Link to="/appointments?service=Groom%27s%20Package" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section className="membership-section">
        <div className="container">
          <h2>VIP Membership</h2>
          <p>Join our exclusive membership program and enjoy premium benefits all year round.</p>
          
          <div className="membership-benefits">
            <div className="membership-benefit">
              <div className="benefit-icon">🔄</div>
              <h3>Monthly Service</h3>
              <p>One premium service of your choice each month</p>
            </div>
            
            <div className="membership-benefit">
              <div className="benefit-icon">🎁</div>
              <h3>Product Discounts</h3>
              <p>20% off all retail products</p>
            </div>
            
            <div className="membership-benefit">
              <div className="benefit-icon">⏱️</div>
              <h3>Priority Booking</h3>
              <p>Exclusive access to prime appointment slots</p>
            </div>
            
            <div className="membership-benefit">
              <div className="benefit-icon">🥃</div>
              <h3>Complimentary Drinks</h3>
              <p>Premium beverages during every visit</p>
            </div>
          </div>
          
          <div className="membership-cta">
            <div className="membership-price">
              <span className="price-amount">$99</span>
              <span className="price-period">/month</span>
            </div>
            <Link to="/contact" className="btn btn-primary">Inquire About Membership</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PremiumServices;