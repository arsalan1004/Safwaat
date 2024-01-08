const flashCardRouter = require("express").Router();
const {
  fCPostController,
} = require("../../controllers/FCController/flashCardController");

flashCardRouter.post("/", fCPostController);

module.exports = {
  flashCardRouter,
};
