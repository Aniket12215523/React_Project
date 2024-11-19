import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import MenOutfits from '../components/MenOutfits';
import FeaturedProducts from '../pages/FeaturedProducts';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="slider-section">
        <ImageSlider />
      </div>

      <div className="outfits-section-main">
        <div className="outfits-grid">
          <MenOutfits />
        </div>
        <div className="button-group">
          <button className="btn-best-seller"><Link to="/best-sellers" className="btn">Best Sellers</Link></button>
          <button className="btn-all-products"><Link to="/all-products" className="btn">All Products</Link></button>
        </div>
      </div>

      <div className="featured-section">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;