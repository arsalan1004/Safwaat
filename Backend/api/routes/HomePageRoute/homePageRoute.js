const express = require("express");
const HomePageRouter = express.Router();
const {
  postLandingPageRightSideBarData,
} = require("./../../controllers/HomePageController/homePageController");
const {
  levelMapController,
} = require("../../controllers/HomePageController/levelMapcontroller");

HomePageRouter.post("/leftSideBar", postLandingPageRightSideBarData);
HomePageRouter.get("/:userId", levelMapController);
module.exports = { HomePageRouter };
