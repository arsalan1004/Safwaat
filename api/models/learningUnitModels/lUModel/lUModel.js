const mongoose = require("mongoose");

const learningUnitSchema = mongoose.Schema(
  {
    unitNumber: Number,
    slides: Array,
    numOfQuestions: Number,
    perStarXp: Number,
  },
  { timestamps: true, collection: "LearningUnit" }
);

const learningUnitModel = mongoose.model("LearningUnit", learningUnitSchema);

module.exports = {
  learningUnitModel,
};
