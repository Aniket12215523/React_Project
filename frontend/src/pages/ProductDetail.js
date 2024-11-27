import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService';  
import { useCart } from '../components/CartContext';
import Alert from '../components/Alert';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null); 
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCart = () => {
    addToCart(product);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>;  
  }

  if (!product) {
    return <div>Product not found</div>;
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
          <span className="original-price">₹{product.originalPrice}</span> 
          <span className="discounted-price">₹{product.price}</span> 
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
        <button className="add-to-cart-button" onClick={handleCart}>Add to Cart</button>
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
      {showAlert && <Alert message={`${product.name} has been added to the cart!`} onClose={closeAlert} />}
    </div>
  );
};

export default ProductDetail;
