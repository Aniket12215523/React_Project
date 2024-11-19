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

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info-section">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>₹{product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      {showAlert && <Alert message="Added to cart!" onClose={closeAlert} />}
    </div>
  );
};

export default ProductDetail;
