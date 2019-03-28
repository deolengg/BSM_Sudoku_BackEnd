const chai = require("chai");
const expect = chai.expect;

const { genrateBoard } = require("../api/controller/controller");

describe("Controller", () => {
  describe("genrateBoard()", () => {
    const output = genrateBoard();
    it("should return an array", () => {
      expect(output).to.be.an("array");
    });

    it("should return array of size of 81", () => {
      expect(output).to.have.lengthOf(81);
    });
  });
});
