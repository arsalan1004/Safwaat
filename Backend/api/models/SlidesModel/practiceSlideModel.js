const mongoose = require("mongoose");

const practiceSlideSchema = mongoose.Schema(
  {
    slideType: String,
    content: Object,
  },
  { timestamps: true, collection: "PracticeSlide" }
);

const practiceSlideModel = mongoose.model("PracticeSlide", practiceSlideSchema);

module.exports = {
  practiceSlideModel,
};
