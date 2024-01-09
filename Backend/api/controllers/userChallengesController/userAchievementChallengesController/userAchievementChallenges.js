const User = require('./../../../models/UserModel/userModel');
const SysAchievementChallenges = require('./../../../models/SystemChallengesModels/SystemAchievementChallengesModel/systemAchievementChallengesModel');
const UserAchievementChallenges = require('./../../../models/UserChallengesModels/UserAchievementChallengesModel/userAchievementChallengesModel');
const UserAchievements = require('./../../../models/UserAchievementsModel/userAchievementsModel');
const SysAchievementChallenge = require('./../../../models/SystemChallengesModels/SystemAchievementChallengesModel/systemAchievementChallengesModel');
const userAchievements = require('./../../../models/UserAchievementsModel/userAchievementsModel');

// A function to be called during Registration Process., at that time, return Promise.
// Have to assign user the all the achievement challenges from sysAchievement Challenges, when registering the user.


//During Registration.

const putGetUserAchievementChallenges = async(req, res) => {
    let userId = req.body.userId;
    try{
        let userAchievementChallenges = await UserAchievementChallenges.findOne({playerId: userId});
        // console.log(userDailyChallenges);
        // console.log(userAchievementChallenges);

        let achievementChallenges = userAchievementChallenges.achievementChallenges;

        let responseChallenges = [];

        for(let i=0; i<achievementChallenges.length;i++){
            let systemAchievementChallenge = await SysAchievementChallenges.findById(achievementChallenges[i].achievementChallengeId);
            // console.log(systemDailyChallenge);
            responseChallenges.push({
                _id: achievementChallenges[i]._id,
                title: systemAchievementChallenge.title,
                content: systemAchievementChallenge.content,
                maxCompleted: systemAchievementChallenge.maxCompleted,
                completed: achievementChallenges[i].completed,
                isClaimed: achievementChallenges[i].isClaimed,
                reward: systemAchievementChallenge.numberOfTrophiesReward,
                rewardType: "Trophy"
            });

        }

        res.status(200).json(responseChallenges);

    } catch(Error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error when getting User's Achievement Challenges Data.",
            error: Error
        });
    }

};

const patchClaimReward = async(req, res) => {
    let { challengeId, userId } = req.body;

    try{
        let userAchievementChallenges = await UserAchievementChallenges.findOne({playerId: userId});

        userAchievementChallenges.achievementChallenges.map(async(challenge,index) => {
            if(challenge._id == challengeId){
                // console.log(challenge.isClaimed);
                if(!challenge.isClaimed){
                    let sysAchievementChallenge = await SysAchievementChallenges.findById(challenge.achievementChallengeId);
                    if(sysAchievementChallenge.maxCompleted == challenge.completed){
                        // userDailyChallenges.dailyChallenges[index].isClaimed = true;
                        challenge.isClaimed = true;
                        await userAchievementChallenges.save();
    
                        let user = await User.findById(userId);
                        user.trophy = user.trophy + sysAchievementChallenge.numberOfTrophiesReward;
                        await user.save();

                        let userAchievements = await UserAchievements.findOne({playerId: userId})
                        console.log(userAchievements);

                        userAchievements.achievementsOfUser.push({
                            title: sysAchievementChallenge.title,
                            description: sysAchievementChallenge.content,
                            achievedDate: Date().slice(4,15)
                        });

                        await userAchievements.save();
                    }
                }
            }
        })
        res.status(200).json(userAchievements.achievementChallenges);    
    } catch{
        res.status(500).json({
            success: false,
            message: "Error when updating the user progress."
        });
    }

} 

// const trackAchievementChallenges = async(userId, add, context){}



module.exports = {
    putGetUserAchievementChallenges,
    patchClaimReward,

};