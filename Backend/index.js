const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// const streakUpdateRoute = require('./api/routes/streakRoutes/streakUpdateRoute/streakUpdate');
// const userRoute = require('./api/routes/userRoute/user');
// const streakLeaderboardRoute = require('./api/routes/streakRoutes/streakLeaderboardRoute/streakLeaderboard');
const streakCalendarRoute = require('./api/routes/streakRoutes/streakCalendarRoute/streakCalendar');

const port = process.env.PORT || 8000;
const app = express();
require('./config/db');
app.use(cors());
app.use(bodyParser.json());
require('dotenv').config();

// app.use("/streak", streakUpdateRoute);
// app.use("/user", userRoute);
// app.use("/streak", streakLeaderboardRoute);
app.use("/streak",streakCalendarRoute);
app.listen(port, ()=> console.log('Runnning on  http://localhost:8000'));