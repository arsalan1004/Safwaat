const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    dateOfBirth: String,
    isUpdated: Boolean,
    totalXp: Number,
    streak: Number,
  },
  { timestamps: true, collection: "User" }
);

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel,
};
