const { User, Role, Loan } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ include: [Role, Loan] });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { include: [Role, Loan] });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, getUserById };
