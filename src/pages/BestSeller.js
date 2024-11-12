import React from 'react';
import { products } from '../data/products'; 
import './BestSeller.css';

const BestSeller = () => {
  const bestSellerProducts = [
    ...products.jeans,
    ...products.tshirts,
    ...products.shirts,
    ...products.jackets
  ].filter(product => product.isFeatured);

  return (
    <div className="best-seller-container">
      <h2>Best Sellers</h2>
      <div className="product-grid">
        {bestSellerProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
