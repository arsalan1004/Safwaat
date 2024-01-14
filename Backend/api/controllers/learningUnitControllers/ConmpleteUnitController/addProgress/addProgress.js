const {
  userProgressModel,
} = require("../../../../models/learningUnitModels/UserProgressModel/userProgressModel");

const addProgress = async (userProgress) => {
  try {
    const { userId, unitNum, starsEarned } = userProgress;
    let unlockedLevelProgress;
    const newPorg = await userProgressModel.create({
      userId: userId,
      unitNum: unitNum,
      starsEarned: starsEarned,
    });
    if (unitNum != 8) {
      unlockedLevelProgress = await userProgressModel.create({
        userId: userId,
        unitNum: unitNum + 1,
        starsEarned: 0,
      });
    }
    if (newPorg && unlockedLevelProgress) {
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
