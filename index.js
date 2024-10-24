require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const routeBook = require("./routes/book");
app.use("/book", routeBook.init());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
