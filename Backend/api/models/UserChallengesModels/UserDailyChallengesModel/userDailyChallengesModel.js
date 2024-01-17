const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDailyChallengeSchema = new Schema({
    playerId:String,
    dailyChallenges: [
        {
            dailyChallengeId: String,
            completed: Number,
            isClaimed: Boolean
        }
    ]
},{
    timestamps: true,
    collection: "UserDailyChallenges"
});

const UserDailyChallenges = mongoose.model("UserDailyChallenges", userDailyChallengeSchema);

module.exports = UserDailyChallenges;