const http = require("http");
const express = require("express");
const morgan = require("morgan");

// REQUIRING ROUTES
const {
  levelMapRoute,
} = require("./routes/learningUnitRoutes/LevelMapRoute/levelMapRoute");
const {
  slideRoute,
} = require("./routes/learningUnitRoutes/SlideRoute/slideRoute");

// REGISTERING AND REQUIRING ENV VARIABLES
require("dotenv").config();
const port = process.env.PORT;

// CREATING EXPRESS APP
const app = express();

// APP SETTINGS
app.use(express.json());
app.use(morgan("tiny"));

// CONENCTING TO DATABASE
require("../config/db");

// REGISTERING MIDDLEWARES
app.use("/api/levelMap", levelMapRoute);
app.use("/api/slides", slideRoute);

// CREATING SERVER
const server = http.createServer(app);

// ACTIVATING SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
