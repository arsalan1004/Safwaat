const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    dateOfBirth: String,
    isUpdated: Boolean,
    totalXP: Number,
    xpLevel: Number,
    XPRequiredForNextLevel: Number,
    streak: Number,
    league: String,
    gem: Number,
    trophy: Number
},{
    timestamps: true,
    collection: "User"
});

const User = mongoose.model("User", userSchema);

module.exports = User;