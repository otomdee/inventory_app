const { updateItem, getItem } = require("../db/queries.js");

async function updateControllerGet(req, res) {
  const row = await getItem(req.params.id);

  res.render("updateItem", { user: row[0] });
}

async function updateControllerPost(req, res) {
  const id = req.params.id;
  const { url, price, password } = req.body;
  //admin password for updating items
  if (password === "mr0x") {
    await updateItem({ url, price, id });

    res.redirect(`/update/${req.params.id}`);
  } else {
    res.redirect(`/update/${req.params.id}`);
  }
}

module.exports = { updateControllerGet, updateControllerPost };
