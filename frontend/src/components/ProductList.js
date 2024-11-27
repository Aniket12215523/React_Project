import React from 'react';
import { Link } from 'react-router-dom'; // For navigation between product pages

// ProductCard component to display each product
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/${product.category}/${product.id}`}>
        {/* Image of the product */}
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </Link>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Render each product
      ))}
    </div>
  );
};

export default ProductList;
