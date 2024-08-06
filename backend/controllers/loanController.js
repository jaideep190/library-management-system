const { Loan, User, Book } = require('../models');

const createLoan = async (req, res) => {
    try {
        const { userId, bookId, loanDate, returnDate } = req.body;
        const loan = await Loan.create({ userId, bookId, loanDate, returnDate });
        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll({ include: [User, Book] });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id, { include: [User, Book] });
        if (!loan) {
            return res.status(404).json({ error: 'Loan not found' });
        }
        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createLoan, getAllLoans, getLoanById };
