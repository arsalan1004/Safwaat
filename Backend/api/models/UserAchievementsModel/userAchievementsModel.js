const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersAchievementsSchema = new Schema({
    playerId: String,
    achievementsOfUser: [
        {
            title: String,
            description: String,
            achievedDat: String
        }

    ]
},{
    timestamps: true,
    collection: "User'sAchievements"
});

const userAchievements = mongoose.model("User'sAchievements", usersAchievementsSchema);

module.exports = userAchievements;