const {
  learningUnitModel,
} = require("../../../../../models/learningUnitModels/lUModel/lUModel");

const getLearningUnitData = async () => {
  try {
    const learningUnits = await learningUnitModel
      .find({}, { unitNumber: 1 })
      .sort({ unitNumber: 1 });

    if (learningUnits) {
      return learningUnits;
    } else {
      return null;
    }
  } catch (error) {
    console.log(`Error occured at levelMapController function: ${error}`);
    return null;
  }
};

module.exports = {
  getLearningUnitData,
};
