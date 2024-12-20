const { Router } = require("express");
const womenController = require("../controllers/womenController");

const womenRouter = Router();

womenRouter.get("/", womenController);

module.exports = womenRouter;
