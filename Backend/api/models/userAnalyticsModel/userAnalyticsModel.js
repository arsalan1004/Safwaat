const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const analyticSchema = new Schema({
    playerId: String,
    monthlyChallengeAnalytics: {
        dailyCompleted: Number,
        achievementCompleted: Number
    },
    monthlyRewardAnalytics: {
        xp: Number,
        gem: Number,
        trophy: Number
    },
    weeklyLessonAnalytics : [

    ],
    weeklyFlashcardRevisitAnalytics: []
},{
    timestamps: true,
    collection: "UserAnalytics"
});

const Analytics = mongoose.model("UserAnalytics", analyticSchema);
//it also needs a schedular which can push a 0 daily in weekly anaytics list.
//and can nullify the monthly analytics object monthly.

module.exports = Analytics;