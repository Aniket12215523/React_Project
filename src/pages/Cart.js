import React from 'react';
import { useCart } from '../CartContext'; // Access cart state

const CartPage = () => {
  const { cartItems } = useCart(); // Get cart items from context

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.discountedPrice || item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p> // Show this message when the cart is empty
      )}
    </div>
  );
};

export default CartPage;
