const authorize = (requiredRoles) => (req, res, next) => {
    const userRole = req.user.role;
    if (!requiredRoles.includes(userRole)) return res.status(403).json({ message: 'Forbidden' });
    next();
};

module.exports = { authorize };
