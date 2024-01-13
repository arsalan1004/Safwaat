const {
  signupController,
} = require("../../controllers/LoginSignupControllers/signupController");
const {
  googleSignupController,
} = require("../../controllers/LoginSignupControllers/googleControllers/googleSignupController");

const signupRouter = require("express").Router();

// SIGNUP ROUTE
signupRouter.post("/", signupController);
signupRouter.post("/google", googleSignupController);

module.exports = {
  signupRouter,
};
