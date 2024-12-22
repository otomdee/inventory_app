const { Router } = require("express");
const {
  newGetController,
  newPostController,
} = require("../controllers/newController.js");

const newRouter = Router();

newRouter.get("/", newGetController);

newRouter.post("/", newPostController);

module.exports = newRouter;
