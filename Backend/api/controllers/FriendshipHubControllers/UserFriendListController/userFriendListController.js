const {userModel} = require('./../../../models/UserModel/userModel')
const FriendList = require('./../../../models/FriendshipHubModels/UserFriendsModel/userFriendsModel');

const getFriends = async(req, res) => {
    let {userId}= req.body;
    let Friends = await FriendList.findOne({
        playerId: userId
    });
    let response = [];
    for(i=0; i<Friends.friendList.length; i++){
        let user = await userModel.findById(Friends.friendList[i].friendId);
        response.push({
            id: user._id,
            username: user.username,
            fullName: user.firstName+" "+user.lastName,
            level: user.xpLevel,
            xp:user.totalXP
        })
    }
    res.status(200).json({
        friends: (response.length == 0) ? "Looks like you're starting fresh! Why not connect with others to build your friend list?" : response
    })
}

module.exports = {
    getFriends,

}