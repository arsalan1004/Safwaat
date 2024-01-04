const {
  learningUnitModel,
} = require("../../../../models/learningUnitModels/lUModel/lUModel");
const { formatData } = require("./formatData");

const getAllSlides = async (req, res) => {
  try {
    const learningUnit = await learningUnitModel.findOne({
      _id: req.params.unitId,
    });

    if (learningUnit) {
      const slideData = await formatData(learningUnit);
      if (slideData) {
        res.status(200).json(slideData);
      } else {
        console.log(`Error in formatting slide data: ${error}`);
        res.status(400).json("no slide data found");
      }
    } else {
      console.log(`Error occured at getAllSlides controller:${error}`);
      res.status(400).json({ message: "no slides found" });
    }
  } catch (error) {
    console.log(`Error occured at getAllSlides controller:${error}`);
    res.status(400).json({ message: "Could not get slides" });
  }
};

module.exports = {
  getAllSlides,
};
