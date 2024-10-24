const connection = require("../../database/mysql/db");
const BookModel = require("../../../models/Book");
const response = require("../../helper/logging_helper");
const validator = require("../../helper/validator_helper");
const validation = require("./validationHandler");
const book = new BookModel();

const getBooks = async (req, res) => {
  const data = await book.getBooks();
  response.success(res, 200, "success get books", data);
};

const addBooks = async (req, res) => {
  const validatePayload = validator.isValidPayload(
    req.body,
    validation.storeBook
  );
  if (validatePayload.title == "error") {
    return response.error(res, validatePayload.code, validatePayload.message);
  }

  try {
    await book.insertBook(req.body);
    response.success(res, 200, "success insert books", "");
  } catch (error) {
    response.error(res, 500, `database not connected: ${error}`);
  }
};

const updateBooks = async (req, res) => {
  const { id } = req.params;
  const payload = {
    id,
    ...req.body,
  };

  const validatePayload = validator.isValidPayload(
    payload,
    validation.updateBook
  );
  if (validatePayload.title == "error") {
    return response.error(res, validatePayload.code, validatePayload.message);
  }

  try {
    await book.updateBookById(id, req.body);
    response.success(res, 200, "success update books", "");
  } catch (error) {
    response.error(res, 500, `database not connected: ${error}`);
  }
};

const updateTitleBooks = async (req, res) => {
  const { id } = req.params;
  const payload = {
    id,
    ...req.body,
  };

  const validatePayload = validator.isValidPayload(
    payload,
    validation.updateTitleBook
  );
  if (validatePayload.title == "error") {
    return response.error(res, validatePayload.code, validatePayload.message);
  }

  try {
    await book.updateTitleBookById(payload);
    response.success(res, 200, "success update books", "");
  } catch (error) {
    response.error(res, 500, `database not connected: ${error}`);
  }
};

const deleteBooks = async (req, res) => {
  const { id } = req.params;

  try {
    await book.deleteBookById(id);
    response.success(res, 200, "success delete books", "");
  } catch (error) {
    response.error(res, 500, `database not connected: ${error}`);
  }
};

module.exports = {
  getBooks,
  addBooks,
  updateBooks,
  updateTitleBooks,
  deleteBooks,
};
