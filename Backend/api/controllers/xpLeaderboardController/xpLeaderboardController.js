const {userModel} = require('./../../models/UserModel/userModel');
const XPLeaderboard = require('./../../models/XPLeaderboardModel/xpLeaderboardModel');
const leagueData = require("./../../../jsonData/leaguesData/LeagueJSON")

function promotionLeague(promotion) {
    let promotionLevel;

    switch (promotion) {
        case 15:
            promotionLevel = 'Top 15 Members will promote to Explorer League';
            break;
        case 10:
            promotionLevel = 'Top 10 Members will promote to Bronze League';
            break;
        case 6:
            promotionLevel = 'Top 6 Members will promote to Silver League';
            break;
        case 5:
            promotionLevel = 'Top 5 Members will promote to Gold League';
            break;
        case 0:
            promotionLevel = 'Top 3 members will be rewarded heavily';
            break;
        default:
            promotionLevel = 'Unknown Promotion Level';
            break;
    }

    return promotionLevel;
}

const getLeaderboardLeagueData = async(req, res) => {
    let id = req.body.id;
    try{
        let user = await userModel.findById(id);
        let league = user.league;
        let leagueInfo = leagueData.filter((l)=> l.leagueName==league);
        let promotion = leagueInfo[0].membersToBePromoted;
        let levelText = promotionLeague(promotion);
        try{
            let xpleaderboard = await XPLeaderboard.findOne({league: league});
            if(xpleaderboard){
                let members = xpleaderboard.members;
                members.sort((a,b)=>{
                    if(a.leaderboardXP != b.leaderboardXP){
                        return b.leaderboardXP - a.leaderboardXP;
                    }
                    return a.username.localeCompare(b.username);
                });

                res.status(200).json({
                    success: true,
                    league: league,
                    members: members,
                    levelText:levelText
                })
                
            } else{
                res.status(200).json({
                    message: "No leagues found for this user. or this user is not appeared in any league",
                    success: false
                });
            }
        } catch{
            res.status(500).json({
                message: "Error finding leaderboard by league of current User",
                success: false
            })
        }
    } catch{
        res.status(500).json({
            message: "Error locating the user in the database",
            success: false
        })
    }
};

module.exports = {
    getLeaderboardLeagueData,
}