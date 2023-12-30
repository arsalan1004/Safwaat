const http = require("http");
const express = require("express");
const morgan = require("morgan");

// REQUIRING ROUTES

// REGISTERING AND REQUIRING ENV VARIABLES
require("dotenv").config();
const port = process.env.PORT;

// CREATING EXPRESS APP
const app = express();

// CONENCTING TO DATABASE
require("../config/db");

// REGISTERING MIDDLEWARES

// CREATING SERVER
const server = http.createServer(app);

// ACTIVATING SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
