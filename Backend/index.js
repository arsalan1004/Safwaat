const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

// REQUIRING ROUTES

const {
  flashCardSetRouter,
} = require("./api/routes/FlashCraft/FCSetRoute/flashCardSetRoute");
const { signupRouter } = require("./api/routes/LoginSignup/signupRoute");
const { loginRouter } = require("./api/routes/LoginSignup/loginRoute");

// CONNECTING TO DATABASE
require("dotenv").config();
const FriendshipHubRequestsRouter = require('./api/routes/FriendshipHubRoutes/FriendRequestsRoute/friendRequestsRoute');
const FriendshipHubFriendsRouter = require('./api/routes/FriendshipHubRoutes/UserFriendsRoute/userFriendsRoute');

// IMPORTING .ENV VARIABLE
const port = process.env.PORT || 8000;
const jwtsecret = process.env.JWT_SECRET;

// CONNECTING TO DATABASE
require("./config/db");

// CREATING APP
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: jwtsecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "None", // Adjust based on your requirements
      secure: process.env.NODE_ENV === "production", // Set to true in production
    },
  })
);
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// REGISTERING ROUTES
// FLashCraft routes
app.use("/api/FlashCraft", flashCardSetRouter);

// login signup routes
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
 
//FriendshipHub Routes
app.use("/api/friendshiphub", FriendshipHubRequestsRouter);
app.use("/api/fh", FriendshipHubFriendsRouter);

// CREATING SERVER
const server = http.createServer(app);

//LISTENING THE SERVER
server.listen(port, () => console.log(`Server listening on port ${port}`));
