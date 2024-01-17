const express = require('express');
const Router = express.Router();

const { putGetUserDailyChallengesData,patchClaimReward } = require('./../../../controllers/userChallengesController/userDailyChallengesController/userDailyChallenges');
;
Router.put("/putUserChallenges",putGetUserDailyChallengesData);

Router.patch("/claim", patchClaimReward);

module.exports = Router; 