const express = require('express');
const Router = express.Router();
const { getStreakCalendarData } = require('./../../../controllers/streakController/streakCalendarController/streakCalendar');

Router.post("/calendarData", getStreakCalendarData);

module.exports = Router;