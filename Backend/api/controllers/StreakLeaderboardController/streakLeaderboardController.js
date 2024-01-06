const User = require('./../../models/UserModel/userModel');

const getStreakLeaderboardData = async(req, res) => {
    try{
        let streakLeaderboardData = await User.find({},{_id:1, username:1, streak:1}).sort({streak:-1, username:1});
        res.status(200).json(streakLeaderboardData);
    } catch{
        res.status(500).json({message: "Internal Server Error! No Users Found in database."});
    }
};

module.exports = {
    getStreakLeaderboardData
}