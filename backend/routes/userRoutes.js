const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const user = new User({ name, email, password, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
