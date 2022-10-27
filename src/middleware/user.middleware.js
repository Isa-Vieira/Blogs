const validaDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName === null || displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const validaEmail = async (req, res, next) => {
    const { email } = req.body;
    const verificaEmail = String(email).toLowerCase().match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (!email || !verificaEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

const validaPassword = async (req, res, next) => {
    const { password } = req.body;
    const verificaPassword = 6;
    if (!password || password.length < verificaPassword) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};

module.exports = { 
    validaDisplayName,
    validaEmail,
    validaPassword,
};