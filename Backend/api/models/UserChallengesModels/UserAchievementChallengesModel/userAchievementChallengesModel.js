const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAchievementChallengeSchema = new Schema({
    playerId:String,
    achievementChallenges: [
        {
            achievementChallengeId: String,
            completed: Number,
            isClaimed: Boolean
        }
    ]
},{
    timestamps: true,
    colllection: "UserAchievementChallenges"
});

const UserAchievementChallenges = mongoose.model("UserAchievementChallenges", userAchievementChallengeSchema);

module.exports = UserAchievementChallenges;