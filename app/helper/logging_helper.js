const { result } = require("validate.js");

const success = (res, code, message, item) => {
  const data = {
    code: code,
    message: message ?? "success",
    ...(item && { result: item }),
  };

  return res.status(code).json(data);
};

const error = (res, code, message) => {
  const data = {
    code: code,
    message: message,
  };

  return res.status(code).json(data);
};

module.exports = {
  success,
  error,
};
