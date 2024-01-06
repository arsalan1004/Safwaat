const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    email: String,
    streak: Number,
    isUpdated: Boolean,
    xp: Number,
    league: String
},{
    timestamps: true,
    collection: "User"
})
const User = mongoose.model('User', userSchema);
module.exports = User;