const flashCardSetRouter = require("express").Router();
const {
  fCSPostController,
  fCSGetController,
  getSingleFlashCardSet,
  deleteFlashCardSet,
} = require("../../controllers/FCSetController/flashCardSetController");

flashCardSetRouter.post("/SetCreation", fCSPostController);
flashCardSetRouter.post("/", fCSGetController);
flashCardSetRouter.get("/:id", getSingleFlashCardSet);
flashCardSetRouter.delete("/delete", deleteFlashCardSet);

module.exports = {
  flashCardSetRouter,
};
