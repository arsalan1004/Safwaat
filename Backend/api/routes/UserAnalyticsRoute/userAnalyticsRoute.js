const Router = require('express').Router();
const {
    getUserAnalytics,
    AnalyticsForAll,
    updateAnalytics,
    schedularDailyTaskForAnalytics,
    schedularMonthlyHandler,
    schedularWeeklyHandler
} = require('./../../controllers/UserAnalyticsController/userAnalyticsController');

Router.get("/get/:userId",getUserAnalytics);
// Router.post("/assignAll", AnalyticsForAll);

module.exports = Router;