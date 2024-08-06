const express = require('express');
const router = express.Router();
const { createLoan, getAllLoans, getLoanById } = require('../controllers/loanController');
const authenticate = require('../middlewares/authMiddleware');

// Create a new loan
router.post('/', authenticate, createLoan);

// Get all loans
router.get('/', authenticate, getAllLoans);

// Get a loan by ID
router.get('/:id', authenticate, getLoanById);

module.exports = router;
