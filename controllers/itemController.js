const { getItem } = require("../db/queries.js");

async function itemController(req, res) {
  const item = await getItem(req.params.itemid);
  res.render("item", { user: item[0] });
}

module.exports = itemController;
