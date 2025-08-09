import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Barbershop</h3>
          <p>Professional haircuts and grooming services for men. Experience the traditional barbershop atmosphere with modern techniques.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Hours</h3>
          <ul className="hours-list">
            <li><span>Monday - Friday:</span> 9:00 AM - 8:00 PM</li>
            <li><span>Saturday:</span> 10:00 AM - 6:00 PM</li>
            <li><span>Sunday:</span> Closed</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li><i className="icon-location"></i> 123 Barber Street, City</li>
            <li><i className="icon-phone"></i> (123) 456-7890</li>
            <li><i className="icon-email"></i> info@barbershop.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Barbershop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;