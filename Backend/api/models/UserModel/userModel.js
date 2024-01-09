const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    streak: Number,
    isUpdated: Boolean,
    xp: Number,
    league: String,
    gem: Number,
    trophy: Number,
    achievementsOfUser: String //for referenecing
    // achievementsOfUser: [
    //     {
    //         title: String,
    //         description: String,
    //         achievedDat: String
    //     }

    // ]
},{
    timestamps: true,
    collection: "User"
});

const User = mongoose.model('User', userSchema);

module.exports = User;










// const Schema = mongoose.Schema;
// const userSchema = new Schema({
//     username: String,
//     email: String,
//     streak: Number,
//     isUpdated: Boolean,
//     xp: Number,
//     league: String
// },{
//     timestamps: true,
//     collection: "User"
// })
// const User = mongoose.model('User', userSchema);
// module.exports = User;