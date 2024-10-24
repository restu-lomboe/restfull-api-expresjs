const validate = require("validate.js");

const isValidPayload = (payload, schema, data = {}) => {
  const { value, error } = schema.validate(payload);

  if (!validate.isEmpty(error)) {
    console.log(
      "User::validator",
      error.message.replace(/"/g, ""),
      "Joi::schama.validate"
    );
    return (response = {
      code: 422,
      title: "error",
      message: error.message.replace(/"/g, ""),
      results: "",
    });
  }

  return (response = {
    code: 200,
    title: "success",
    message: "",
    results: value,
  });
};

module.exports = {
  isValidPayload,
};
