const { formatData } = require("./formatData/formatData");
const { getLearningUnitData } = require("./learningUnitData/learningUnitData");
const { getUserProgress } = require("./userProgress/userProgress");

const levelMap = async (userId) => {
  try {
    const learningUnits = await getLearningUnitData();

    if (learningUnits) {
      const userProgress = await getUserProgress(userId);
      if (userProgress) {
        const finalData = formatData(learningUnits, userProgress);
        if (finalData) {
          return finalData;
        } else {
          console.log(
            `Error occured at finalData in levelMap controller: ${error}`
          );
          return null;
        }
      } else {
        console.log("No user progress found (in levelMap function)");
        return null;
      }
    } else {
      console.log("No learning units found (in levelMapData function)");
      return null;
    }
  } catch (error) {
    console.log(`Error occured at levelMapController function: ${error}`);
    return null;
  }
};

module.exports = {
  levelMap,
};
