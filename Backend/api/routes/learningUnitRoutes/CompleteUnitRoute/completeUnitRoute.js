const {
  completeUnitController,
} = require("../../../controllers/learningUnitControllers/ConmpleteUnitController/completeUnitController");

const completeUnitRoute = require("express").Router();

completeUnitRoute.post("/", completeUnitController);

module.exports = { completeUnitRoute };
