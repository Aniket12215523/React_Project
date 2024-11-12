import React from 'react';
import { products } from '../data/products';
import './FeaturedProducts.css';

const FeaturedProduct = () => {
  const featuredJeans = products.jeans.filter(product => product.isFeatured);
  const featuredTshirts = products.tshirts.filter(product => product.isFeatured);
  const featuredShirts = products.shirts.filter(product => product.isFeatured);
  const featuredJackets = products.jackets.filter(product => product.isFeatured);

  // Combining all featured products into one array
  const allFeaturedProducts = [
    ...featuredJeans,
    ...featuredTshirts,
    ...featuredShirts,
    ...featuredJackets,
  ];

  return (
    <div className="featured-products-page">
      <h2>Featured Products</h2>
      <div className="featured-products-grid">
        {allFeaturedProducts.map((product) => (
          <div key={`${product.name}_${product.id}`} className="featured-product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
