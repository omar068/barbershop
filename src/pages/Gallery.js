import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  // Categories for filtering
  const categories = ['All', 'Haircuts', 'Beard Styles', 'Hot Towel Shaves', 'Special Styles'];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Gallery items with placeholder colors instead of images
  const galleryItems = [
    { id: 1, category: 'Haircuts', color: '#3498db', title: 'Classic Cut' },
    { id: 2, category: 'Haircuts', color: '#2980b9', title: 'Modern Fade' },
    { id: 3, category: 'Beard Styles', color: '#e74c3c', title: 'Full Beard Trim' },
    { id: 4, category: 'Hot Towel Shaves', color: '#c0392b', title: 'Traditional Shave' },
    { id: 5, category: 'Haircuts', color: '#9b59b6', title: 'Textured Crop' },
    { id: 6, category: 'Special Styles', color: '#8e44ad', title: 'Vintage Style' },
    { id: 7, category: 'Beard Styles', color: '#f1c40f', title: 'Beard Styling' },
    { id: 8, category: 'Haircuts', color: '#f39c12', title: 'Undercut' },
    { id: 9, category: 'Hot Towel Shaves', color: '#1abc9c', title: 'Luxury Shave' },
    { id: 10, category: 'Special Styles', color: '#16a085', title: 'Artistic Design' },
    { id: 11, category: 'Haircuts', color: '#2ecc71', title: 'Pompadour' },
    { id: 12, category: 'Beard Styles', color: '#27ae60', title: 'Goatee Styling' }
  ];
  
  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="gallery-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Check out our work and get inspired for your next visit</p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Filter Categories */}
          <div className="gallery-filter">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div 
                  className="gallery-image" 
                  style={{ backgroundColor: item.color }}
                >
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="container">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-subtitle">@barbershop_official</p>
          
          <div className="instagram-grid">
            {/* Instagram Feed Placeholders */}
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="instagram-item">
                <div 
                  className="instagram-image"
                  style={{ backgroundColor: `hsl(${item * 60}, 70%, 60%)` }}
                >
                  <div className="instagram-overlay">
                    <i className="instagram-icon">♥</i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="instagram-cta">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Follow Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;