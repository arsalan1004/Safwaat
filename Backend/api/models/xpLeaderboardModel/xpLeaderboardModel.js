const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const xpLeaderboardSchema = new Schema({
    league: String,
    members: [
        {
            playerID: String,
            username: String,
            leaderboardXP: Number
        }
    ]
},{
    timestamps: true,
    collection: "XPLeaderboard"
});

const XPLeaderboard = mongoose.model('XPLeaderboard', xpLeaderboardSchema);

module.exports = XPLeaderboard;