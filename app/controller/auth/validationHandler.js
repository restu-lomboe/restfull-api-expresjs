const joi = require("joi");

const register = joi.object({
  name: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});

const login = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  register,
  login,
};
