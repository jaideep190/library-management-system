const { User, Role } = require('../models');

const authorize = (requiredRole) => {
    return async (req, res, next) => {
        try {
            const user = await User.findByPk(req.user.userId, { include: Role });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const userRoles = user.Roles.map(role => role.name);
            if (!userRoles.includes(requiredRole)) {
                return res.status(403).json({ error: 'Access denied, insufficient permissions' });
            }

            next();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
};

module.exports = authorize;
