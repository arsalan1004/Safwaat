const http = require("http");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  flashCardSetRouter,
} = require("./api/routes/FCSetRoute/flashCardSetRoute");
const { flashCardRouter } = require("./api/routes/FCRoute/flashCardRoute");
const {
  router,
} = require("./api/routes/ChatSpaceRoutes/convoRoute/conversationRoute");
const {
  messageRouter,
} = require("./api/routes/ChatSpaceRoutes/messagesRoute/messagesRoute");
const {
  getUserRouter,
} = require("./api/routes/ChatSpaceRoutes/userRoute/getUserRoute");
require("dotenv").config();

// IMPORTING .ENV VARIABLE
const port = process.env.PORT || 8000;
const jwtSecret = process.env.JWT_SECRET;
// CONNECTING TO DATABASE
require("./config/db");

// CREATING APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(
  session({
    secret: jwtSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "None", // Adjust based on your requirements
      secure: process.env.NODE_ENV === "production", // Set to true in production
    },
  })
);
// REGISTERING ROUTES
app.use("/api/FlashCraft", flashCardSetRouter);
app.use("/api/flashcard", flashCardRouter);

app.use("/api/conversation", router);
app.use("/api/messages", messageRouter);
app.use("/api/users", getUserRouter);

// CREATING SERVER
const server = http.createServer(app);

//LISTENING THE SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
