import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Order ID: {order.id}</p>
              <p>Total Amount: ₹{order.amount}</p>
              <p>Items: {order.items.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
