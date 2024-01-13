const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    isUpdated: { type: Boolean, required: true },
    totalXp: { type: Number, required: true },
    streak: { type: Number, required: true },
  },
  { timestamps: true, collection: "User" }
);

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel,
};
