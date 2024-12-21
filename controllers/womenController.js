const { getWomen } = require("../db/queries.js");

async function womenController(req, res) {
  const row = await getWomen();
  res.render("women", { cards: row });
}

module.exports = womenController;
