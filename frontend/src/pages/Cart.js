import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate(); 

  const handleIncreaseQuantity = (product) => {
    addToCart(product);
  };

  const handleDecreaseQuantity = (product) => {
    removeFromCart(product.id);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                  <div className="cart-item-controls">
                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                    <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total Price: ₹{getTotalPrice()}</h3>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
