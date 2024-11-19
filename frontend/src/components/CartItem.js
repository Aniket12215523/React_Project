import React from 'react';
import './CartItem.css'; 

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">₹{item.price}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Qty:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="cart-item-quantity-input"
          />
        </div>
        <button onClick={() => removeItem(item.id)}className="cart-item-remove-btn"> Remove </button>
      </div>
    </div>
  );
};

export default CartItem;
