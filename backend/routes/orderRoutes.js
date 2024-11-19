const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();

// Create order
router.post('/', async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  try {
    const order = new Order({ user: userId, products, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error });
  }
});

// Get orders by user ID
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
