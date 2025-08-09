import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Book an appointment or get in touch with us</p>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Visit us, call us, or send us a message.</p>
              
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>123 Barber Street, City, State 12345</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@barbershop.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-content">
                  <h3>Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Book an Appointment</h2>
              {formSubmitted ? (
                <div className="form-success">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Haircut</option>
                      <option value="beard-trim">Beard Trim</option>
                      <option value="hot-towel-shave">Hot Towel Shave</option>
                      <option value="head-shave">Head Shave</option>
                      <option value="hair-coloring">Hair Coloring</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="combo">Haircut & Beard Combo</option>
                      <option value="full-experience">The Full Experience</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <p>Map location of our barbershop</p>
            <p>In a real application, an interactive map would be embedded here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;