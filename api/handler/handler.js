const { genrateBoard } = require("../controller/controller");

const loadBoard = async (req, res) => {
  const genratedBoard = await genrateBoard();
  res.status(200).json(genratedBoard);
};

module.exports = {
  loadBoard
};
