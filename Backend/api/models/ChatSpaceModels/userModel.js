const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(

  {
    username: { type: String, unique: true },
    password: String,
  },
  { collection: "User" },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = {
  userModel,
};
