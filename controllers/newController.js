const { createItem } = require("../db/queries.js");

function newGetController(req, res) {
  res.render("new");
}

async function newPostController(req, res) {
  const { itemname, url, price, category } = req.body;

  createItem({ itemname, url, price, category });

  //req.query.message = "true";
  res.redirect("/new");
}

module.exports = { newGetController, newPostController };
