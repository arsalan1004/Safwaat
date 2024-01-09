const mongoose = require('mongoose');
const {achievementsTrackingCriteria} = require('./../../../../trackingCriterion/jsonData/tracking');
const Schema = mongoose.Schema;
let criteria = ["xp","gem","trophy","number_of_lessons_completion","complete_lesson_with_three_stars","1st_in_Gold_league","1st_in_Silver_league","1st_in_Bronze_league","1st_in_Explorer_league","1st_in_Novice_league","appear_in_Gold_league","appear_in_Silver_league","Appear_in_Bronze_league", "Appear_in_Explorer_league","Streak"];

const SystemAchievementChallengesSchema = new Schema({
    title: String,
    content: String,
    maxCompleted: Number,
    numberOfTrophiesReward: Number,
    trackingCriteria: {
        type: String,
        enum: achievementsTrackingCriteria,
        default: "xp"
    }
},{
    timestamps: true,
    collection: "SystemAchievementChallenges"
});

const SysAchievementChallenge = mongoose.model("SystemAchievementChallenges", SystemAchievementChallengesSchema);

module.exports = SysAchievementChallenge;