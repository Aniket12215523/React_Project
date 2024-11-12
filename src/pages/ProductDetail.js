import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css'; // Make sure to create this CSS file

const ProductDetail = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const categoryData = products[category];
      const foundProduct = categoryData?.find(item => item.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [category, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-section">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          <span className="original-price">${product.originalPrice}</span> 
          <span className="discounted-price">${product.price}</span> 
          <span className="discount-percent">({product.discount}% OFF)</span>
        </p>
        <hr className="divider" />
        <div className="size-selection">
          <label>Select Size:</label>
          <select>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
        <div className="availability">
          <label>Check Availability:</label>
          <input type="text" placeholder="Enter Pincode" />
          <button>Check</button>
        </div>
        <div className="payment-modes">
          <h3>Payment Modes:</h3>
          <p>Credit Card, Debit Card, Net Banking, UPI</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
