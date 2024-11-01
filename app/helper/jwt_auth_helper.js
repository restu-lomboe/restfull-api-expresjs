// Middleware to authenticate the user using JWT (Bearer Token)
const jwt = require("jsonwebtoken");
const response = require("./logging_helper");
const AuthModel = require("../../models/Auth");
const auth = new AuthModel();

const secretKey = process.env.SECRET_KEY_AUTH_SERVICE; // Replace with your own secret key

const authenticate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.error(res, 401, "Unauthorized");
  }

  let username;
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return response.error(res, 403, "Forbidden");
    }
    username = user;
  });
  const users = await auth.findOne(username);
  req.user = users;
  next();
};

module.exports = {
  authenticate,
};
