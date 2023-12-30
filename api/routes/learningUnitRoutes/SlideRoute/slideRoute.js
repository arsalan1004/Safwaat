const {
  getAllSlides,
} = require("../../../controllers/learningUnitControllers/SlideController/allSlides/allSlideController");
const {
  getSlide,
} = require("../../../controllers/learningUnitControllers/SlideController/singleSlide/singleSlideController");

const slideRoute = require("express").Router();

slideRoute.get("/:unitId", getAllSlides);
slideRoute.get("/single/:slideId", getSlide);

module.exports = { slideRoute };
