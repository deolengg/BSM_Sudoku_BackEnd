"use strict";
const handle = require("../handler/handler");

module.exports = app => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.route("/sudoku/board").get(handle.loadBoard);
};
