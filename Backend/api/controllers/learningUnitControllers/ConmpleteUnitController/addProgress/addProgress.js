const {
  userProgressModel,
} = require("../../../../models/learningUnitModels/UserProgressModel/userProgressModel");

const addProgress = async (userProgress) => {
  try {
    const { userId, learningUnitId, unitNum, starsEarned } = userProgress;
    const newPorg = await userProgressModel.create({
      userId: userId,
      learningUnitId: learningUnitId,
      unitNum: unitNum,
      starsEarned: starsEarned,
    });
    if (newPorg) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error occured at updateProgress:${error}`);
    return false;
  }
};

module.exports = {
  addProgress,
};
