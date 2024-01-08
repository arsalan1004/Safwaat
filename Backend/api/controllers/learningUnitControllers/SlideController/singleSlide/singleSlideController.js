const {
  practiceSlideModel,
} = require("../../../../models/learningUnitModels/SlidesModel/practiceSlideModel");
const {
  teachingSlideModel,
} = require("../../../../models/learningUnitModels/SlidesModel/teachingSlideModel");

const getSlide = async (req, res) => {
  try {
    const teachingSlide = await teachingSlideModel.findOne({
      _id: req.body.slideId,
    });
    const practiceSlide = await practiceSlideModel.findOne({
      _id: req.body.slideId,
    });

    if (teachingSlide) {
      res.status(200).json(teachingSlide);
    } else if (practiceSlide) {
      res.status(200).json(practiceSlide);
    } else {
      console.log(`Error in finding slide in getSlide controller`);
      res.status(400).json("No slide found");
    }
  } catch (error) {
    console.log(
      `Error occured at getSlide controller on single slide route:${error}`
    );
    res.status(400).json({ message: "Could not get slide" });
  }
};

module.exports = {
  getSlide,
};
