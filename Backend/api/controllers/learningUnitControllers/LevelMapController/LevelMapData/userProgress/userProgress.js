const {
  userProgressModel,
} = require("../../../../../models/learningUnitModels/UserProgressModel/userProgressModel");

const getUserProgress = async (userId) => {
  try {
    const userProgress = await userProgressModel
      .find(
        {
          userId: userId,
        },
        { _id: 0, learningUnitId: 0 }
      )
      .sort({ unitNum: 1 });
    if (userProgress) {
      return userProgress;
    } else {
      console.log("No user progress found (in getUserProgress function)");
      return null;
    }
  } catch (error) {
    console.log(`Error occured at getUserProgress function: ${error}`);
    return null;
  }
};

module.exports = {
  getUserProgress,
};
