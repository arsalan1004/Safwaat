const express = require('express');
const Router = express.Router();
const { getStreakLeaderboardData } = require('./../../controllers/StreakLeaderboardController/streakLeaderboardController');

Router.get("/members", getStreakLeaderboardData);

module.exports = Router;