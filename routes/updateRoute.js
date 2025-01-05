const { Router } = require("express");
const {
  updateControllerGet,
  updateControllerPost,
} = require("../controllers/updateControllers");

const updateRouter = Router();

updateRouter.get("/:id", updateControllerGet);

updateRouter.post("/:id", updateControllerPost);

module.exports = updateRouter;
