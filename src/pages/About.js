import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Get to know our barbershop and our story</p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, our barbershop began with a simple mission: to provide exceptional grooming services in a comfortable, welcoming environment. What started as a small shop with just two chairs has grown into a beloved establishment in the community.
              </p>
              <p>
                We believe that a great haircut is more than just a service—it's an experience. That's why we've created a space where clients can relax, engage in good conversation, and leave looking and feeling their best.
              </p>
              <p>
                Over the years, we've built a team of skilled barbers who share our passion for quality and customer service. Each member brings their unique talents and expertise, ensuring that every client receives personalized attention and outstanding results.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image"></div>
              <h3>John Smith</h3>
              <p className="member-title">Founder & Master Barber</p>
              <p className="member-bio">With over 15 years of experience, John brings exceptional skill and passion to every haircut.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Michael Johnson</h3>
              <p className="member-title">Senior Barber</p>
              <p className="member-bio">Specializing in classic cuts and hot towel shaves, Michael is known for his attention to detail.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image"></div>
              <h3>David Williams</h3>
              <p className="member-title">Barber</p>
              <p className="member-bio">David excels at modern styles and fades, bringing fresh techniques to our shop.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image"></div>
              <h3>Robert Brown</h3>
              <p className="member-title">Barber</p>
              <p className="member-bio">With a background in cosmetology, Robert offers unique styling options and hair coloring services.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our services, using premium products and techniques.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We're proud to be part of our local community and strive to create a welcoming space for everyone.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h3>Professionalism</h3>
              <p>Our team maintains the highest standards of professionalism in every aspect of our service.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔄</div>
              <h3>Continuous Improvement</h3>
              <p>We're always learning and improving our skills to provide the best possible experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience Our Service</h2>
          <p>Visit our barbershop and discover the difference quality makes.</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">View Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;