import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Barbershop</h1>
          <p>Experience the art of traditional grooming with modern techniques</p>
          <Link to="/services" className="btn btn-primary">View Our Services</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>



          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Expert Barbers</h3>
              <p>Our team of skilled barbers brings years of experience and passion to every haircut.</p>
              <Link to="/about" className="btn btn-secondary">Meet Our Team</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🪒</div>
              <h3>Premium Services</h3>
              <p>Experience our exclusive premium services designed for the discerning gentleman.</p>
              <Link to="/premium-services" className="btn btn-secondary">View Premium Services</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Modern Facilities</h3>
              <p>Enjoy our state-of-the-art facilities designed for your comfort and relaxation.</p>
              <Link to="/facilities" className="btn btn-secondary">Tour Our Facilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image haircut"></div>
              <h3>Haircuts</h3>
              <p>Precision cuts tailored to your style and face shape.</p>
              <p className="price">From $25</p>
            </div>

            <div className="service-card">
              <div className="service-image beard-trim"></div>
              <h3>Beard Trims</h3>
              <p>Expert shaping and styling for all beard types.</p>
              <p className="price">From $15</p>
            </div>

            <div className="service-card">
              <div className="service-image hot-towel"></div>
              <h3>Hot Towel Shave</h3>
              <p>Traditional straight razor shave with hot towel treatment.</p>
              <p className="price">From $30</p>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial">
              <p className="quote">"Best haircut I've ever had. The attention to detail and the overall experience was exceptional."</p>
              <p className="client-name">- John D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready for a Fresh Look?</h2>
          <p>Book your appointment today and experience the difference.</p>
          <Link to="/contact" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
