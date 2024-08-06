const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

// Get all users (Admin required)
router.get('/', authenticate, authorize('Admin'), getAllUsers);

// Get a user by ID
router.get('/:id', authenticate, getUserById);

module.exports = router;
