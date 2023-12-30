const {
  learningUnitModel,
} = require("../../../models/learningUnitModels/lUModel/lUModel");
const { levelMap } = require("./LevelMapData/index.js");

const levelMapController = async (req, res) => {
  try {
    const levelMapData = await levelMap(req?.params?.userId);

    if (levelMapData) {
      res.status(200).json(levelMapData);
    } else {
      res.status(404).json({ message: "No learning units found" });
    }
  } catch (error) {
    console.log(`Error occured at levelMapController function: ${error}`);
    res.status(404).json({ message: "Error at levelMapController" });
  }
};

module.exports = {
  levelMapController,
};
