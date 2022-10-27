const authService = require('../services/auth.service');

const login = async (req, res) => {
    /* const { email, password } = authService.validateBody(req.body); */

    const { type, message } = await authService.validateLogin(req.body);
    if (type) return res.status(type).json({ message });
    res.status(200).json({ token: message });
};

module.exports = { login };