const { getAllClothes } = require("../db/queries.js");

async function indexController(req, res) {
  const row = await getAllClothes();

  res.render("index", { cards: row });
}

module.exports = indexController;
