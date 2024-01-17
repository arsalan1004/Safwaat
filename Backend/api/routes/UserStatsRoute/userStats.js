const Router = require('express').Router();

const {getUserStats} = require('./../../controllers/UserProfileController/userProfileController');

Router.get("/get/:userId", getUserStats);

module.exports = Router;
