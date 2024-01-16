const {
  userProgressModel,
} = require("../../../../models/UserProgressModel/userProgressModel");

const addProgress = async (userProgress) => {
  try {
    const { userId, unitNum, starsEarned } = userProgress;
    let unlockedLevelProgress;
    let newPorg;

    const dbProg = await userProgressModel.findOne({
      userId: userId,
      unitNum: unitNum,
    });

    if (!dbProg) {
      newPorg = await userProgressModel.create({
        userId: userId,
        unitNum: unitNum,
        starsEarned: starsEarned,
      });

      unlockedLevelProgress = await userProgressModel.create({
        userId: userId,
        unitNum: unitNum + 1,
        starsEarned: 0,
      });
    } else {
      if (dbProg.starsEarned == 0 && starsEarned > 0) {
        newPorg = await userProgressModel.findOneAndUpdate(
          {
            userId: userId,
            unitNum: unitNum,
          },
          {
            $set: { starsEarned: starsEarned },
          }
        );

        unlockedLevelProgress = await userProgressModel.create({
          userId: userId,
          unitNum: unitNum + 1,
          starsEarned: 0,
        });
      } else if (dbProg.starsEarned == 0 && starsEarned == 0) {
        console.log(
          "No updation in stars since they are less than the previous"
        );
      } else if (dbProg.starsEarned != 0) {
        if (starsEarned > dbProg.starsEarned) {
          newPorg = await userProgressModel.findOneAndUpdate(
            {
              userId: userId,
              unitNum: unitNum,
            },
            {
              $set: { starsEarned: starsEarned },
            }
          );
        } else {
          console.log(
            "No updation in stars since they are less than the previous"
          );
        }
      }
    }

    if (newPorg || unlockedLevelProgress) {
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
