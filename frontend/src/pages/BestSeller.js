import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './BestSeller.css';

const BestSeller = () => {
  const bestSellerProducts = [
    ...products.jeans.map(product => ({ ...product, category: 'jeans' })),
    ...products.tshirts.map(product => ({ ...product, category: 'tshirts' })),
    ...products.shirts.map(product => ({ ...product, category: 'shirts' })),
    ...products.jackets.map(product => ({ ...product, category: 'jackets' })),
  ].filter(product => product.isFeatured);

  return (
    <div className="best-seller-container">
      <h2>Best Sellers</h2>
      <div className="product-grid">
        {bestSellerProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.category}/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
