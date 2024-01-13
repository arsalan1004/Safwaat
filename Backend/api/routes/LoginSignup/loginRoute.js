const {
  googleLoginController,
} = require("../../controllers/LoginSignupControllers/googleControllers/googleLoginController");
const {
  loginController,
} = require("../../controllers/LoginSignupControllers/loginController");

const loginRouter = require("express").Router();

// SIGNUP ROUTE

loginRouter.post("/", loginController);
loginRouter.post("/google", googleLoginController);

module.exports = {
  loginRouter,
};
