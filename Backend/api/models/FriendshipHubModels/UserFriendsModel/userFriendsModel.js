const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userFriendsSchema = new Schema({
    playerId: String,
    friendList: [
        {
            friendId: String,
            username: String
        }
    ]
},{
    timestamps: true,
    collection: "UserFriends"
});

const UserFriendsModel = mongoose.model("UserFriends", userFriendsSchema);

module.exports = UserFriendsModel;