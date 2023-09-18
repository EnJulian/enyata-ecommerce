const jwt = require('jsonwebtoken');
const config = require('../config/env/index');

const SECRET = config.JWT_SECRET_KEY;
const checkToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(400).json({
        status: 'error',
        code: 401,
        message: 'You are not logged in!',
        data: null,
      });
    }
    const user = jwt.verify(token, SECRET);
    if (!user) {
      return res.status(400).json({
        status: 'error',
        code: 401,
        message: 'You are not authorized to make this request!',
        data: null,
      });
    }
    req.user = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
    checkToken
}
