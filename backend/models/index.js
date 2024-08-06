const sequelize = require('../config/database');
const User = require('./user');
const Role = require('./role');
const Book = require('./book');
const Author = require('./author');
const Loan = require('./loan');

// Associations
User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });

Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });

User.hasMany(Loan, { foreignKey: 'userId' });
Loan.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Loan, { foreignKey: 'bookId' });
Loan.belongsTo(Book, { foreignKey: 'bookId' });

module.exports = {
    sequelize,
    User,
    Role,
    Book,
    Author,
    Loan,
};
