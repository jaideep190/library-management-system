const { Author, Book } = require('../models');

const createAuthor = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const author = await Author.create({ firstName, lastName });
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll({ include: Book });
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id, { include: Book });
        if (!author) {
            return res.status(404).json({ error: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createAuthor, getAllAuthors, getAuthorById };
