const express = require('express');
const Router = express.Router();
const { getLeaderboardLeagueData } = require('./../../controllers/xpLeaderboardController/xpLeaderboardController');

Router.post('/members',getLeaderboardLeagueData);

module.exports = Router;