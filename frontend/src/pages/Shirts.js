import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllProducts } from '../services/productService';
import './CategoryPage.css';

const ShirtCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAllProducts();
        const shirtProducts = data.filter(product => product.category === 'shirts');
        setProducts(shirtProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="category-container">
      <h1 className="category-title">Shirts</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShirtCategory;
