import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartTotal = getTotalPrice();

  const validate = () => {
    const validationErrors = {};
    if (!address.name) validationErrors.name = "Name is required";
    if (!address.street) validationErrors.street = "Street address is required";
    if (!address.city) validationErrors.city = "City is required";
    if (!address.state) validationErrors.state = "State is required";
    if (!address.zipCode) validationErrors.zipCode = "Zip code is required";
    if (!address.country) validationErrors.country = "Country is required";
    if (!paymentMethod) validationErrors.paymentMethod = "Please select a payment method";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = async () => {
    if (!validate()) return;

    const options = {
      key: 'rzp_live_O7K8k0jX5jdg5b', 
      amount: cartTotal * 100,
      currency: 'INR',
      name: 'Your Website Name',
      description: 'Order Payment',
      handler: function (response) {
        alert(`Payment successful! Transaction ID: ${response.razorpay_payment_id}`);
        clearCart();
        setOrderPlaced(true);
      },
      prefill: {
        name: address.name,
        email: 'user@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul className="order-items">
          {cartItems.map((item, index) => (
            <li key={index} className="order-item">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Total: ₹{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="total-price">
          <strong>Total Price: ₹{cartTotal.toFixed(2)}</strong>
        </div>
      </div>

      <div className="address-form">
        <h3>Shipping Address</h3>
        <form>
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleAddressChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label>Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
            />
            {errors.street && <span className="error">{errors.street}</span>}
          </div>
          <div className="form-field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-field">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
          <div className="form-field">
            <label>Pin Code</label>
            <input
              type="text"
              name="zipCode"
              value={address.zipCode}
              onChange={handleAddressChange}
            />
            {errors.zipCode && <span className="error">{errors.zipCode}</span>}
          </div>
          <div className="form-field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>
        </form>
      </div>

      
      <div className="payment-method">
        <h3>Payment Method</h3>
        <div className="form-field">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Credit Card"
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Debit Card"
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="UPI"
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Net Banking"
              onChange={handlePaymentMethodChange}
            />
            Net Banking
          </label>
        </div>
        {errors.paymentMethod && <span className="error">{errors.paymentMethod}</span>}
      </div>

      
      {!orderPlaced ? (
        <button className="checkout-button" onClick={handlePayment}>
          Pay Now
        </button>
      ) : (
        <div className="order-success">
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
