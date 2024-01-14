const { addProgress } = require("./addProgress/addProgress");
const { updateXp } = require("./updateXp/updateXp");

const completeUnitController = async (req, res) => {
  try {
    const progressUpdated = await addProgress(req.body);
    if (progressUpdated) {
      const xpUpdated = await updateXp(req.body);
      xpUpdated
        ? res.status(201).json("User Progress and Xp updated")
        : res.status(200).json("Progress updated but xp update failed");
    } else {
      console.log(`User Progress not updated at completeUnitController`);
      res.status(200).json("Progress not updated");
    }
  } catch (error) {
    console.log(`Error occured at completeUnitController:${error}`);
    res.status(400).json("Unit update not complete");
  }
};
module.exports = {
  completeUnitController,
};
