const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemRouter = Router();

itemRouter.get("/:itemid", itemController);

module.exports = itemRouter;
