const mongoose = require("mongoose");

const userProgressSchema = mongoose.Schema(
  {
    userId: String,
    unitNum: Number,
    starsEarned: Number,
  },
  { timestamps: true, collection: "UserProgress" }
);

const userProgressModel = mongoose.model("UserProgress", userProgressSchema);

module.exports = {
  userProgressModel,
};
