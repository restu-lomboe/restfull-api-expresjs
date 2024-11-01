require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const basicAuth = require("./app/helper/basic_auth_helper");
const jwtAuth = require("./app/helper/jwt_auth_helper");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const routeBook = require("./routes/book");
const routeAuth = require("./routes/auth");
app.use("/book", routeBook.init(basicAuth, jwtAuth));
app.use("/auth", routeAuth.init(basicAuth));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
