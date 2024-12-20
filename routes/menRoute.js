const { Router } = require("express");
const menController = require("../controllers/menController.js");

const menRouter = Router();

menRouter.get("/", menController);

module.exports = menRouter;
