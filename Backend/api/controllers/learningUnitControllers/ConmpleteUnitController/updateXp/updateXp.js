const {
  userModel,
} = require("../../../../models/learningUnitModels/UserModel/userModel");

const updateXp = async (userProgress) => {
  try {
    const updated = await userModel.findOneAndUpdate(
      { _id: userProgress?.userId },
      { $inc: { totalXp: userProgress?.xpCount } },
      { new: true }
    );
    if (updated) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error occured at updateXp:${error}`);
    return false;
  }
};

module.exports = {
  updateXp,
};
