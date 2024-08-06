const express = require('express');
const router = express.Router();
const { createAuthor, getAllAuthors, getAuthorById } = require('../controllers/authorController');
const authenticate = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/roleMiddleware');

// Create a new author (Admin required)
router.post('/', authenticate, authorize('Admin'), createAuthor);

// Get all authors
router.get('/', authenticate, getAllAuthors);

// Get an author by ID
router.get('/:id', authenticate, getAuthorById);

module.exports = router;
