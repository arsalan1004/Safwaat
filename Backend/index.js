const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { flashCardSetRouter } = require("./api/routes/FCSetRoute/flashCardSetRoute");
const { flashCardRouter } = require("./api/routes/FCRoute/flashCardRoute");
require("dotenv").config();

// IMPORTING .ENV VARIABLE
const port = process.env.PORT || 8000;

// CONNECTING TO DATABASE
require("./config/db");

// CREATING APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// REGISTERING ROUTES
app.use("/", flashCardSetRouter);
app.use("/api/flashcard", flashCardRouter);

// CREATING SERVER
const server = http.createServer(app);

//LISTENING THE SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
