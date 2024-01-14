const FriendRequests = require('./../../../models/FriendshipHubModels/FriendRequestsModel/friendRequestsModel');
const FriendList = require('./../../../models/FriendshipHubModels/UserFriendsModel/userFriendsModel');
const User = require('./../../../models/UserModel/userModel');

const postAddFriendRequest = async(req, res) => {
    let {userId, receiverId} = req.body;

    try{
        let [Sender ,Friends,/*friendRequests,*/ RequestsIn, RequestsOut, userRequests, Receiver, ReceiverFriendRequest] = await Promise.all([
            User.findById(userId),
            FriendList.findOne({playerId: userId, userFriends: {
                $elemMatch: {
                    friendId: receiverId
                }
            }}),
            // FriendRequests.find({
            //     playerId: userId
            // }),
            FriendRequests.findOne({playerId: userId, 
                incoming: {
                    $elemMatch: {
                        senderId: receiverId
                    }
                }
            }),
            FriendRequests.findOne({playerId: userId, 
                outgoing: {
                    $elemMatch: {
                        receiverId: receiverId
                    }
                }
            }),
            FriendRequests.findOne({playerId: userId}),
            User.findById(receiverId),
            FriendRequests.findOne({playerId: receiverId})
        ]);
    
        if(Friends || RequestsIn || RequestsOut){
            res.send('Request already sent, so cannot sent again');
        } else{
    
            if(userRequests){ //Sender Requests present.
                userRequests.outgoing.push({
                    receiverId: receiverId,
                    username: Receiver.username,
                    status: "PENDING"
                });
                // await userRequests.save();
        
                if(ReceiverFriendRequest){
                    ReceiverFriendRequest.incoming.push({
                        senderId: userId,
                        username: Sender.username,
                        status: "PENDING"
                    });
                    await Promise.all([
                        await userRequests.save(),
                        await ReceiverFriendRequest.save()   
                    ]);
        
                } else{
                    let newFriendRequest2 = new FriendRequests({
                        playerId: receiverId,
                        incoming: [{
                            senderId: userId,
                            username: Sender.username,
                            status: 'PENDING'
                        }],
                        outgoing: []
                    });
                    // await newFriendRequest1.save();
                    await Promise.all([
                        await userRequests.save(),
                        await newFriendRequest2.save()   
                    ]);
                };
        
            } else{ // userRequests are empty.
                let newFriendRequest = new FriendRequests({
                    playerId: userId,
                    incoming: [],
                    outgoing: [{
                        receiverId: receiverId,
                        username: Receiver.username,
                        status: "PENDING"
                    }]
                });
                if(ReceiverFriendRequest){
                    ReceiverFriendRequest.incoming.push({
                        senderId: userId,
                        username: Sender.username,
                        status: "PENDING"
                    })
                    await Promise.all([
                        await newFriendRequest.save(),
                        await ReceiverFriendRequest.save()   
                    ]);
        
                } else{
                    let newFriendRequest1 = new FriendRequests({
                        playerId: receiverId,
                        incoming: [{
                            senderId: userId,                    
                            username: Sender.username,
                            status: 'PENDING'
                        }],
                        outgoing: []
                    });
                    await Promise.all([
                        await newFriendRequest.save(),
                        await newFriendRequest1.save()   
                    ]);
                };
            }
            res.send("DONE");
            
        }
    
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error, when sending Friend Request"
        })
    }

}


const getFriendshipHubPageData = async(req, res) => {
    let {userId} = req.body;
    try{
        let [userFriends, userRequests] = await Promise.all([
            FriendList.findOne({playerId: userId}),
            FriendRequests.findOne({playerId: userId})
        ]);
        res.status(200).json({
            noFriends: (userFriends) ? userFriends.friendList.length : 0,
            noFriendReq: (userRequests) ? (userRequests.incoming.length) : 0,
            noSentReq: (userRequests) ? userRequests.outgoing.length : 0
        });

    } catch(err){
        res.send(500).json({
            success: false,
            message: "Internal Server Error, when getting user's social data.",
            Error: err
        });
    }
}


const getFriendData = async(req, res) => {
    let {userId} = req.body;
    try{

        let [user, userFriends, userRequets] = await Promise.all([
            User.findById(userId),
            FriendList.findOne({playerId: userId}),
            FriendRequests.findOne({playerId: userId})
        ]);

        res.status(200).json({
            username: user.username,
            fullName: user.firstName + " "+user.lastName,
            noFriends: (userFriends) ? userFriends.friendList.length : 0,
            noReq: (userRequets) ? userRequets.incoming.length+userRequets.outgoing.length : 0,
            dateJoined: user.createdAt.toString().slice(4,15)
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: "Internal Server Error, when getting insights of User",
            Error: err
        });
    }
};

const getUserFriendRequests = async(req, res) => {
    let {userId} = req.body;

    let userRequests = await FriendRequests.findOne({playerId: userId});
    if(userRequests){
        res.status(200).json({
            incoming: (userRequests.incoming.length != 0) ? userRequests.incoming : "You're all caught up, and there are no pending friend requests.",
            outgoing: (userRequests.outgoing.length != 0) ? userRequests.outgoing : "No pending friend requests to review right now."
        });
    }else{
        res.status(200).json({
            incoming: "You're all caught up, and there are no pending friend requests.",
            outgoing: "No pending friend requests to review right now."
        });
    }
}

const patchAcceptFriendRequest = async(req, res) => {
    let {userId, senderId} = req.body;
    await FriendRequests.updateOne({playerId:userId},{$pull: {'incoming.receiverId':receiverId}})
}
module.exports = {
    postAddFriendRequest,
    getFriendshipHubPageData,
    getFriendData,
    getUserFriendRequests,

};