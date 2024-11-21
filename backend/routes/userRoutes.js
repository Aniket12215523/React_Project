const express = require('express');
const { register, login } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/authMiddleware'); // Import middleware
const router = express.Router();

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Example of a protected route
router.get('/profile', isAuthenticated, (req, res) => {
  res.json({
    message: 'Profile data',
    user: req.user, // Access user info from the token
  });
});

module.exports = router;