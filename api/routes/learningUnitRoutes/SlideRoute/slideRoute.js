const {
  getAllSlides,
} = require("../../../controllers/learningUnitControllers/SlideController/allSlides/allSlideController");

const slideRoute = require("express").Router();

slideRoute.get("/:unitId", getAllSlides);

module.exports = { slideRoute };
