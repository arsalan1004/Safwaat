const cors = require('cors');
const bodyParser = require('body-parser');
const streakLeaderboardRoute = require('./api/routes/streakLeaderboardRoute/streakLeaderboard');
const xpLeaderboardRoute = require('./api/routes/xpLeaderboardRoute/xpLeaderboardRoute');
const express = require('express');

const app = express();

require('./config/db');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
let port = process.env.PORT || 8000;

app.use("/xpleaderboard", xpLeaderboardRoute);
app.use("/streakLeaderboard", streakLeaderboardRoute);

app.listen(port, () => console.log('Runnning on  http://localhost:8000'));