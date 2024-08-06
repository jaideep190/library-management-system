const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBookById } = require('../controllers/bookController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

// Create a new book (Admin required)
router.post('/', authenticate, authorize('Admin'), createBook);

// Get all books
router.get('/', authenticate, getAllBooks);

// Get a book by ID
router.get('/:id', authenticate, getBookById);

module.exports = router;
