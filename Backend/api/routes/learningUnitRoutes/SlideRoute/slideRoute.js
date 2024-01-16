const {
  getAllSlides,
} = require("../../../controllers/learningUnitControllers/SlideController/allSlides/allSlideController");
const {
  getSlide,
} = require("../../../controllers/learningUnitControllers/SlideController/singleSlide/singleSlideController");

const slideRoute = require("express").Router();

slideRoute.post("/", getAllSlides);
slideRoute.post("/singleSlide", getSlide);

module.exports = { slideRoute };
