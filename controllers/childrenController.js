const kidsRow = require("../db/dbMock.js");

function childrenController(req, res) {
  res.render("children", { cards: kidsRow });
}

module.exports = childrenController;
