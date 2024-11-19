import React, { useEffect, useState } from 'react';
import axios from '../api/axiosConfig'; // Import the centralized axios config
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('/api/products/featured'); // Adjust API endpoint
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="featured-products-page">
      <h2>Featured Products</h2>
      <div className="featured-products-grid">
        {featuredProducts.map(product => (
          <div key={product.id} className="featured-product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">₹{product.price}</p>
            <Link to={`/product/${product.category}/${product.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
