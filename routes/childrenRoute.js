const { Router } = require("express");
const childrenController = require("../controllers/childrenController.js");

const childrenRouter = Router();

childrenRouter.get("/", childrenController);

module.exports = childrenRouter;
