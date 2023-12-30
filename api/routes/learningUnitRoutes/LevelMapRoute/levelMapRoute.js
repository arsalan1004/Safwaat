const {
  levelMapController,
} = require("../../../controllers/learningUnitControllers/LevelMapController/levelMapcontroller");

const levelMapRoute = require("express").Router();

levelMapRoute.get("/:userId", levelMapController);

module.exports = { levelMapRoute };
