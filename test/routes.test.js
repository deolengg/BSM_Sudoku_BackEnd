const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../index");
const should = chai.should();
chai.use(chaiHttp);

const route = "/sudoku/board";

describe("Unit testing the /sudoku/board route", () => {
  it("should return Array of Size 81 with status 200", done => {
    chai
      .request(app)
      .get(route)
      .end((err, res) => {
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(81);
        done();
      });
  });
});
