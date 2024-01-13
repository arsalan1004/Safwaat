const express = require('express');
const HomePageRouter = express.Router();
const { postLandingPageRightSideBarData } = require('./../../controllers/HomePageController/homePageController');

HomePageRouter.post("/leftSideBar", postLandingPageRightSideBarData);

module.exports = {HomePageRouter};