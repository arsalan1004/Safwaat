const {
  userProgressModel,
} = require("../../../../models/learningUnitModels/UserProgressModel/userProgressModel");

const addProgress = async (userProgress) => {
  try {
    const newPorg = await userProgressModel.create(userProgress);
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
