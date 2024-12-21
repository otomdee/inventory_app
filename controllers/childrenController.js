const { getKids } = require("../db/queries.js");

async function childrenController(req, res) {
  const row = await getKids();
  res.render("children", { cards: row });
}

module.exports = childrenController;
