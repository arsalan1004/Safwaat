const flashCardSetRouter = require("express").Router();
const {
  fCSPostController,
  fCSGetController,
  getSingleFlashCardSet,
} = require("../../controllers/FCSetController/flashCardSetController");

flashCardSetRouter.post("/SetCreation", fCSPostController);
flashCardSetRouter.post("/", fCSGetController);
flashCardSetRouter.get("/:id", getSingleFlashCardSet);

module.exports = {
  flashCardSetRouter,
};
