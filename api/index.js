const http = require("http");
const express = require("express");
const morgan = require("morgan");

// REQUIRING ROUTES
const {
  levelMapRoute,
} = require("./routes/learningUnitRoutes/LevelMapRoute/levelMapRoute");

// REGISTERING AND REQUIRING ENV VARIABLES
require("dotenv").config();
const port = process.env.PORT;

// CREATING EXPRESS APP
const app = express();

// CONENCTING TO DATABASE
require("../config/db");

// REGISTERING MIDDLEWARES
app.use(
  "/api/levelMap",
  (req, res, next) => {
    req.userId = req.params.userId;
    next();
  },
  levelMapRoute
);

// CREATING SERVER
const server = http.createServer(app);

// ACTIVATING SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
