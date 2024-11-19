import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../pages/AllProducts.css';

const AllProducts = () => {
  const allProducts = [
    ...products.jeans.map(product => ({ ...product, category: 'jeans' })),
    ...products.tshirts.map(product => ({ ...product, category: 'tshirts' })),
    ...products.shirts.map(product => ({ ...product, category: 'shirts' })),
    ...products.jackets.map(product => ({ ...product, category: 'jackets' })),
  ];

  return (
    <div className="all-products-container">
      <h2>All Products</h2>
      <div className="product-grid">
        {allProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.category}/${product.id}`}
            className="product-card"
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
