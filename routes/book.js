const express = require("express");
const router = express.Router();
const bookController = require("../app/controller/book/bookController");

const init = (basicAuth, jwtAuth) => {
  router.get("/", jwtAuth.authenticate, bookController.getBooks);
  router.post("/", basicAuth.isAuthenticated, bookController.addBooks);
  router.put("/:id", basicAuth.isAuthenticated, bookController.updateBooks);
  router.patch(
    "/:id",
    basicAuth.isAuthenticated,
    bookController.updateTitleBooks
  );
  router.delete("/:id", basicAuth.isAuthenticated, bookController.deleteBooks);

  return router;
};

module.exports = {
  init,
};
