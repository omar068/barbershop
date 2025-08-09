import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

function Services() {
  const navigate = useNavigate();

  // Function to handle service selection and redirect to appointments
  const handleServiceSelect = (service, style = '') => {
    let params = new URLSearchParams();
    params.append('service', service);

    if (style) {
      params.append('style', style);
    }

    navigate(`/appointments?${params.toString()}`);
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional haircuts and grooming services for men</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-category">
            <h2>Haircuts</h2>
            <div className="services-list">
              <div className="service-item" onClick={() => handleServiceSelect('Haircut', 'Classic Cut')}>
                <div className="service-info">
                  <h3>Classic Haircut</h3>
                  <p>Traditional haircut with clippers and scissors, includes a hot towel finish.</p>
                </div>
                <div className="service-price">$25</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Haircut', 'Fade')}>
                <div className="service-info">
                  <h3>Fade Haircut</h3>
                  <p>Precision fade with your choice of style on top, includes a hot towel finish.</p>
                </div>
                <div className="service-price">$30</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Haircut')}>
                <div className="service-info">
                  <h3>Kids Haircut</h3>
                  <p>Haircut for children under 12 years old.</p>
                </div>
                <div className="service-price">$20</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Haircut')}>
                <div className="service-info">
                  <h3>Senior Haircut</h3>
                  <p>Haircut for gentlemen over 65 years old.</p>
                </div>
                <div className="service-price">$20</div>
              </div>
            </div>
          </div>

          <div className="services-category">
            <h2>Beard & Shaving</h2>
            <div className="services-list">
              <div className="service-item" onClick={() => handleServiceSelect('Beard Trim')}>
                <div className="service-info">
                  <h3>Beard Trim</h3>
                  <p>Shape and trim your beard to perfection.</p>
                </div>
                <div className="service-price">$15</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Beard Trim')}>
                <div className="service-info">
                  <h3>Beard Styling</h3>
                  <p>Full beard service including trim, shape, and styling.</p>
                </div>
                <div className="service-price">$20</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Shave')}>
                <div className="service-info">
                  <h3>Hot Towel Shave</h3>
                  <p>Traditional straight razor shave with hot towel treatment.</p>
                </div>
                <div className="service-price">$30</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Shave')}>
                <div className="service-info">
                  <h3>Head Shave</h3>
                  <p>Clean head shave with straight razor and hot towel treatment.</p>
                </div>
                <div className="service-price">$35</div>
              </div>
            </div>
          </div>

          <div className="services-category">
            <h2>Additional Services</h2>
            <div className="services-list">
              <div className="service-item" onClick={() => handleServiceSelect('Hair Coloring')}>
                <div className="service-info">
                  <h3>Hair Coloring</h3>
                  <p>Professional hair coloring to cover gray or change your look.</p>
                </div>
                <div className="service-price">$45+</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Facial')}>
                <div className="service-info">
                  <h3>Facial Treatment</h3>
                  <p>Cleansing facial treatment to rejuvenate your skin.</p>
                </div>
                <div className="service-price">$40</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Haircut & Beard Combo')}>
                <div className="service-info">
                  <h3>Haircut & Beard Combo</h3>
                  <p>Get both a haircut and beard trim at a special price.</p>
                </div>
                <div className="service-price">$35</div>
              </div>

              <div className="service-item" onClick={() => handleServiceSelect('Haircut & Beard Combo')}>
                <div className="service-info">
                  <h3>The Full Experience</h3>
                  <p>Haircut, beard styling, hot towel treatment, and facial.</p>
                </div>
                <div className="service-price">$75</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="booking-cta">
        <div className="container">
          <h2>Ready to Look Your Best?</h2>
          <p>Book your appointment today or walk in during business hours.</p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/appointments')} className="btn btn-primary">Book Appointment</button>
            <a href="tel:+1234567890" className="btn btn-secondary">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
