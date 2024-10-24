const joi = require("joi");

const storeBook = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
});
const updateBook = joi.object({
  id: joi.number().integer().required(),
  title: joi.string().required(),
  description: joi.string().required(),
});

const updateTitleBook = joi.object({
  id: joi.number().integer().required(),
  title: joi.string().required(),
});

module.exports = {
  storeBook,
  updateBook,
  updateTitleBook,
};
