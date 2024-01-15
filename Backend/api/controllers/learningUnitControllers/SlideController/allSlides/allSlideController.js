const {
  learningUnitModel,
} = require("../../../../models/learningUnitModels/lUModel/lUModel");
const { formatData } = require("./formatData");

const getAllSlides = async (req, res) => {
  try {
    const learningUnit = await learningUnitModel.findOne(
      {
        _id: req.body.unitId,
      },
      { _id: 0, unitNumber: 0 }
    );

    if (learningUnit) {
      const slideData = await formatData(learningUnit);
      if (slideData) {
        res.status(200).json(slideData);
      } else {
        res.status(400).json("no slide data found");
      }
    } else {
      res.status(400).json({ message: "no learning Unit found" });
    }
  } catch (error) {
    console.log(`Error occured at getAllSlides controller:${error}`);
    res.status(400).json({ message: "Could not get slides" });
  }
};

module.exports = {
  getAllSlides,
};
