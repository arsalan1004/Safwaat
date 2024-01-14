const mongoose = require('mongoose');
const { dailyChallengesTrackingCriteria } = require('./../../../../trackingCriterion/jsonData/tracking');
const Schema = mongoose.Schema;

let criteria = ["xp","gem","trophy","number_of_lessons_completion","complete_lesson_with_three_stars","create_flashcardset"];

const SystemDailyChallengesSchema = new Schema({
    title: String,
    content: String,
    maxCompleted: Number,
    xpReward: Number,
    gemReward: Number,
    trackingCriteria: {
        type: String,
        enum: dailyChallengesTrackingCriteria,
        default: "xp"
    }
},{
    timestamps: true,
    collection: "SystemDailyChallenges"
});

const SysDailyChallenge = mongoose.model("SystemDailyChallenges", SystemDailyChallengesSchema);

module.exports = SysDailyChallenge;