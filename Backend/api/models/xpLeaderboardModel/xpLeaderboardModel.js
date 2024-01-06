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

const XPLeaderboard = mongoose.model('XPLeaderboards', xpLeaderboardSchema);

module.exports = XPLeaderboard;