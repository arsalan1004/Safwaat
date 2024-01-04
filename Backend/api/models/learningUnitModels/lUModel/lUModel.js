const mongoose = require("mongoose");

const learningUnitSchema = mongoose.Schema(
  {
    unitNumber: Number,
    numOfQuestions: Number,
    perStarXp: Number,
    slides: Object,
  },
  { timestamps: true, collection: "LearningUnit" }
);

const learningUnitModel = mongoose.model("LearningUnit", learningUnitSchema);

module.exports = {
  learningUnitModel,
};
