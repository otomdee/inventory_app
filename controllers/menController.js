const { getMen } = require("../db/queries.js");

async function menController(req, res) {
  const row = await getMen();
  res.render("men", { cards: row });
}

module.exports = menController;
