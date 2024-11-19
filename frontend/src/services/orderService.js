import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const fetchOrdersByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};
