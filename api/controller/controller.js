const boardSize = 9;

const genrateBoard = () => {
  return Array.from({ length: Math.pow(boardSize, 2) }, () =>
    Math.floor(Math.random() * boardSize)
  );
};

module.exports = {
  genrateBoard
};
