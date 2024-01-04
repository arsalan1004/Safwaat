const mongoose = require("mongoose");

const userProgressSchema = mongoose.Schema(
  {
    userId: String,
    learningUnitId: String,
    unitNum: Number,
    starsEarned: Number,
    xpCount: Number,
  },
  { timestamps: true, collection: "UserProgress" }
);

const userProgressModel = mongoose.model("UserProgress", userProgressSchema);

module.exports = {
  userProgressModel,
};
