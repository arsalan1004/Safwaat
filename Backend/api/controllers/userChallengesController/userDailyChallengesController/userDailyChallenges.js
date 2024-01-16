const {userModel} = require('./../../../models/UserModel/userModel');
const UserDailyChallenges = require('./../../../models/UserChallengesModels/UserDailyChallengesModel/userDailyChallengesModel');
const sysDailyChallenges = require('./../../../models/SystemChallengesModels/SystemDailyChallengesModel/systemDailyChallengesModel');



// const trackChallenge = async(userId, add, context){
// const trackChallenge = async(userId) => {};

const putGetUserDailyChallengesData = async(req, res) => {
    let userId = req.body.id;
    try{
        let userDailyChallenges = await UserDailyChallenges.findOne({playerId: userId});
        // console.log(userDailyChallenges);

        let dailyChallenges = userDailyChallenges.dailyChallenges;

        let responseChallenges = [];

        for(let i=0; i<3;i++){
            let systemDailyChallenge = await sysDailyChallenges.findById(dailyChallenges[i].dailyChallengeId);
            // console.log(systemDailyChallenge);
            responseChallenges.push({
                _id: dailyChallenges[i]._id,
                title: systemDailyChallenge.title,
                content: systemDailyChallenge.content,
                maxCompleted: systemDailyChallenge.maxCompleted,
                completed: dailyChallenges[i].completed,
                isClaimed : dailyChallenges[i].isClaimed,
                reward: (systemDailyChallenge.xpReward) ? systemDailyChallenge.xpReward : systemDailyChallenge.gemReward,
                rewardType: (systemDailyChallenge.xpReward) ? "XP" : "Gem"
            });

        }

        res.status(200).json(responseChallenges);

    } catch(Error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error when getting User's Challenges Data.",
            error: Error
        });
    }
}

const patchClaimReward = async(req, res) => {
    // let challengeId = req.body.challengeId;
    // let userId = req.body.id;
    let { challengeId, userId } = req.body;
    try{
        let userDailyChallenges = await UserDailyChallenges.findOne({playerId: userId});
        userDailyChallenges.dailyChallenges.map(async(challenge,index) => {
            if(challenge._id == challengeId){
                // console.log(challenge.isClaimed);
                if(!challenge.isClaimed){
                    let sysDailyChallenge = await sysDailyChallenges.findById(challenge.dailyChallengeId);
                    if(sysDailyChallenge.maxCompleted == challenge.completed){
                        // userDailyChallenges.dailyChallenges[index].isClaimed = true;
                        challenge.isClaimed = true;
                        await userDailyChallenges.save();
    
                        let user = await userModel.findById(userId);
                        if(sysDailyChallenge.xpReward){
                            user.totalXp = user.totalXp + sysDailyChallenge.xpReward;
                        } else{ //Gem Reward
                            user.gem = user.gem + sysDailyChallenge.gemReward;
                        }
                        
                        await user.save();
                    }
                }
            }
        })
        res.status(200).json(userDailyChallenges);    
    } catch{
        res.status(500).json({
            success: false,
            message: "Error when updating the user progress."
        });
    }
}

module.exports = {
    putGetUserDailyChallengesData,
    patchClaimReward,
    
}