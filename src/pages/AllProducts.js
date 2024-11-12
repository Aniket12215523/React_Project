import React from 'react';
import { products } from '../data/products'; 
import '../pages/AllProducts.css'; 

const AllProducts = () => {
  
  const allProducts = [
    ...products.jeans,
    ...products.tshirts,
    ...products.shirts,
    ...products.jackets
  ];

  return (
    <div className="all-products-container">
      <h2>All Products</h2>
      <div className="product-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
