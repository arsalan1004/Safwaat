const User = require('./../../models/UserModel/userModel');
const XPLeaderboard = require('./../../models/XPLeaderboardModel/xpLeaderboardModel');

const postLandingPageRightSideBarData = async(req, res) => {
    const {userId} = req.body;
    let [user, streakranking] = await Promise.all([
        User.findById(userId),
        User.find({}, {username: 1, streak:1}).sort({streak:-1, username: 1})
    ]);
    let leagueLeaderboard = await XPLeaderboard.findOne({league: user.league});
    let members = leagueLeaderboard.members.sort((a,b)=> {
        if(a.leaderboardXP != b.leaderboardXP){
            return b.leaderboardXP-a.leaderboardXP;
        }
        return a.username.localeCompare(b.username)
    });

    for(i=0; i<streakranking.length; i++){
        if(streakranking[i]._id == userId){
            userStreakPosition = i+1;
            break;
        }
    };
    let leagueLeaderboardPosition;
    // let leagueLeaderboard = await XPLeaderboards.findOne({league: user.league}).sort({leaderboardXP: -1, username: 1});
    for(i=0; i<members.length; i++){
        if(members[i].playerID == userId){
            leagueLeaderboardPosition = i+1;
            break;
        }
    }

    res.status(200).json({
        gemNumber: user.gem,
        currentXPLevel: user.xpLevel,
        XPAmount: user.totalXP,
        trophyNumber: user.trophy,
        currentStreak: user.streak,
        currentLeague: user.league,
        streakLeaderboardRanking: userStreakPosition,
        leagueLeaderboardRanking: leagueLeaderboardPosition,
        percentageCompletedForCurrentLevel: parseFloat(((user.totalXP/user.XPRequiredForNextLevel)*100).toFixed(2))
    });
};

module.exports = {
    postLandingPageRightSideBarData, 
}