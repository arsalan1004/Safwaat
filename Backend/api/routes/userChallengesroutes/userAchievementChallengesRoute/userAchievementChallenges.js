const express = require('express');
const Router = express.Router();

const {putGetUserAchievementChallenges, patchClaimReward} = require('./../../../controllers/userChallengesController/userAchievementChallengesController/userAchievementChallenges');

Router.put("/getChallengesData", putGetUserAchievementChallenges);
Router.patch("/claim",patchClaimReward);


module.exports = Router;