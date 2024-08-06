const { Book, Author } = require('../models');

const createBook = async (req, res) => {
    try {
        const { title, isbn, publishedDate, authorIds } = req.body;
        const book = await Book.create({ title, isbn, publishedDate });
        if (authorIds && authorIds.length > 0) {
            const authors = await Author.findAll({ where: { id: authorIds } });
            await book.addAuthors(authors);
        }
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll({ include: Author });
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id, { include: Author });
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createBook, getAllBooks, getBookById };
