const connection = require("../../database/mysql/db");
const AuthModel = require("../../../models/Auth");
const response = require("../../helper/logging_helper");
const validator = require("../../helper/validator_helper");
const validation = require("./validationHandler");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const auth = new AuthModel();

const secretKey = process.env.SECRET_KEY_AUTH_SERVICE; // Replace with your own secret key
const expiredIn = "1d";

const register = async (req, res) => {
  const validatePayload = validator.isValidPayload(
    req.body,
    validation.register
  );
  if (validatePayload.title == "error") {
    return response.error(res, validatePayload.code, validatePayload.message);
  }

  try {
    await auth.register(validatePayload.results);
    response.success(res, 200, "register successfully", "");
  } catch (error) {
    response.error(res, 500, `database not connected: ${error}`);
  }
};

const login = async (req, res) => {
  const validatePayload = validator.isValidPayload(req.body, validation.login);
  if (validatePayload.title == "error") {
    return response.error(res, validatePayload.code, validatePayload.message);
  }

  const getUser = await auth.findOne({
    username: validatePayload.results.username,
  });

  if (!getUser) {
    response.error(res, 404, "user not found");
  }

  const isMatchPassword = await bcrypt.compare(
    validatePayload.results.password,
    getUser.password
  );
  if (!isMatchPassword) {
    response.error(res, 401, "wrong password");
  }

  var token = jwt.sign({ username: getUser.username }, secretKey, {
    expiresIn: expiredIn,
  });

  const result = {
    token: token,
    expiredIn: expiredIn,
    Type: "Bearer",
  };

  response.success(res, 200, "login successfully", result);
};

module.exports = {
  register,
  login,
};
