const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080;

const bodyParser = require("body-parser");
const routes = require("./api/routes/routes");

app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log("sudoku-board, Rest API Started at " + port);

module.exports = {
  app
};
