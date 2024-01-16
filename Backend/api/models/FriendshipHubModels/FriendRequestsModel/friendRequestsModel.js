const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status_ENUM = ["PENDING",'ACCEPTED', 'REJECTED']
const userFriendRequestsSchema = new Schema({
    playerId: String,
    incoming: [
        {
            senderId: String,
            username: String,
            status: {
                type: String,
                enum: status_ENUM,
                default: "PENDING"
            }
        }
    ],
    outgoing: [
        {
            receiverId: String,
            username: String,
            status: {
                type: String,
                enum: status_ENUM,
                default: "PENDING"
            }
        }
    ]
},{
    timestamps: true,
    collection: "UserFriendRequests"
});

const UserFriendRequestsModel = mongoose.model("UserFriendRequests", userFriendRequestsSchema);

module.exports = UserFriendRequestsModel;