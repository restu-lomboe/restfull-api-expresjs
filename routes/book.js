const express = require("express");
const router = express.Router();
const bookController = require("../app/controller/book/bookController");

const init = () => {
  router.get("/", bookController.getBooks);
  router.post("/", bookController.addBooks);
  router.put("/:id", bookController.updateBooks);
  router.patch("/:id", bookController.updateTitleBooks);
  router.delete("/:id", bookController.deleteBooks);

  return router;
};

module.exports = {
  init,
};
