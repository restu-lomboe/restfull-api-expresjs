const express = require("express");
const router = express.Router();
const authController = require("../app/controller/auth/authController");

const init = (basicAuth) => {
  router.post("/register", basicAuth.isAuthenticated, authController.register);
  router.post("/login", basicAuth.isAuthenticated, authController.login);

  return router;
};

module.exports = {
  init,
};
