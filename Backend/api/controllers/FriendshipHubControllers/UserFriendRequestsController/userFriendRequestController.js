const { response } = require('express');
const FriendRequests = require('./../../../models/FriendshipHubModels/FriendRequestsModel/friendRequestsModel');
const FriendList = require('./../../../models/FriendshipHubModels/UserFriendsModel/userFriendsModel');
const {userModel} = require('./../../../models/UserModel/userModel');
const {getFriendList} = require('./../UserFriendListController/userFriendListController')

const postAddFriendRequest = async(req, res) => {
    let {userId, receiverId} = req.body;

    try{
        console.log("USER ID AND RECEIVER ID",userId, receiverId);
        let [Sender ,Friends,/*friendRequests,*/ RequestsIn, RequestsOut, userRequests, Receiver, ReceiverFriendRequest] = await Promise.all([
            userModel.findById(userId),
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
            userModel.findById(receiverId),
            FriendRequests.findOne({playerId: receiverId})
        ]);
    
        if(Friends || RequestsIn || RequestsOut){
            res.status(200).json({
                success: true,
                messsage: "Request already sent, so cannot sent again" 
            })
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
            res.status(200).json({
                success: true,
                messsage: "Successfully sent Request" 
            })
            
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

//date format change krdo
const getFriendData = async(req, res) => { //user data
    let {userId} = req.body;
    try{

        let [user, userFriends, userRequets] = await Promise.all([
            userModel.findById(userId),
            FriendList.findOne({playerId: userId}),
            FriendRequests.findOne({playerId: userId})
        ]);
        console.log(user)
        // console.log(user)
        let userJoined = user.createdAt.toString().slice(4,15);
        // let modifiedJoinedDate = 
        let friendsData = await getFriendList(userId);
        console.log('FRIENDS DATA: ', friendsData);
        res.status(200).json(
            {
                userData: {
                    username: user.username,
                    fullName: user.firstName + " "+user.lastName,
                    noFriends: (userFriends) ? userFriends.friendList.length : 0,
                    noReq: (userRequets) ? userRequets.incoming.length : 0,
                    dateJoined: userJoined.slice(4,6) + "-" + userJoined.slice(0,3)+"-"+userJoined.slice(userJoined.length-4, userJoined.length)
                },

                friendList: friendsData
            }
        );
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
    try{
        let [userFriendList, senderFriendList, user, sender] = await Promise.all([
           FriendList.findOne({playerId: userId}),
           FriendList.findOne({playerId: senderId}),
           userModel.findById(userId),
           userModel.findById(senderId),
           FriendRequests.updateOne({playerId:userId},{$pull: {incoming: {senderId:senderId}}}),
           FriendRequests.updateOne({playerId:senderId},{$pull:{outgoing:{receiverId:userId}}})
        ]);
    
        if(userFriendList){
            userFriendList.friendList.push({
                friendId: senderId,
                username: sender.username
            });
            if(senderFriendList){
                senderFriendList.friendList.push({
                    friendId: userId,
                    username: user.username
                });
                await Promise.all([
                    userFriendList.save(),
                    senderFriendList.save()
                ]);
    
            } else{
                let senderFriendList1 = new FriendList({
                    playerId: senderId,
                    friendList: [
                        {
                            friendId: userId,
                            username: user.username
                        }
                    ]
                });
                await Promise.all([
                    userRequests.save(),
                    senderFriendList1.save()
                ]);
            }
    
        } else{
            let newUserFriendList = new FriendList({
                playerId: userId,
                friendList: [{
                    friendId: senderId,
                    username: sender.username
                }]
            });
            if(senderFriendList){
                senderFriendList.friendList.push([
                    {
                        friendId: userId,
                        username: user.username
                    }
                ]);
                await Promise.all([
                    newUserFriendList.save(),
                    senderFriendList.save()
                ]);
    
            }else{
                let newSenderFriendList = new FriendList({
                    playerId: senderId,
                    friendList: [
                        {
                            friendId: userId,
                            username: user.username
                        }
                    ]
                });
                await Promise.all([
                    newUserFriendList.save(),
                    newSenderFriendList.save()
                ])
            }
            res.status(200).json({
                success: true,
                message: "User successfully accepted."
            })
        };

    } catch(err){
        res.status(500).json({
            success: false, 
            message: "Error when rejecting Friend Request",
            Error: err
        });
    }
};


const patchRejectFriendRequest = async(req, res) => {
    let {userId, senderId} = req.body;
    try{
        await Promise.all([
            FriendRequests.updateOne({playerId: userId},{$pull: {incoming: {senderId: senderId}}}),
            FriendRequests.updateOne({playerId: senderId, outgoing: {$elemMatch: {receiverId: userId}}},
                 {$set: {'outgoing.$[elem].status': 'REJECTED'}},{arrayFilters: [{
                'elem.receiverId':userId
            }]}
            )
        ]);
        res.status(200).json({
            success: true,
            message: "Requests rejected successfullly"
        });        
    } catch(err){
        res.status(500).json({
            success: false,
            message: "Cannot reject user friend request"
        });
    }
};

const postSearchFriend = async(req, res) => {
    let {text, userId} = req.body;
    try{
        console.log('search text: ', text);
        if(text!=''){
            let user = await userModel.find({
                // $or: [
                //     {username:text},
                //     {firstName:text},
                //     {lastName: text}
                // ]
                $or: [
                    {username: {$regex: new RegExp(text, 'i')}},
                    {firstName: {$regex: new RegExp(text, 'i')}},
                    {lastName: {$regex: new RegExp(text, 'i')}}
                ]
                
                
                // $or: [
                //     {username: {$regex: `/^${text}/` }},
                //     {firstName: {$regex: `/^${text}/`}},
                //     {lastName: {$regex: `/^${text}/`}}
                // ]
            });
            // console.log('users: ', user)
            if(user.length != 0){
                let response = [];
                // console.log(user.length);
                // let Friends = await FriendList.findOne({
                //     playerId: userId
                // });
                let [Friends , Requests] = await Promise.all([
                    FriendList.findOne({
                        playerId: userId
                    }),
                    FriendRequests.findOne({playerId: userId})
                ]);

                // console.log(Friends);
                for(i=0; i<user.length; i++){
                    console.log("Friends: ", Friends);
                    console.log("Requests: ", Requests);

                    // console.log(user[i]._id);
                    if(Friends){
                        if(Friends.friendList.some(f => f.friendId == user[i]._id)){
            
                        } else{
                            if(Requests){
                                if(Requests.incoming.some(inc => inc.senderId==user[i]._id) || Requests.outgoing.some(o => o.receiverId == user[i]._id)){
    
                                } else{
                                    response.push({
                                        id: user[i]._id,
                                        username: user[i].username,
                                        fullName: user[i].firstName +" "+ user[i].lastName
                                    });
    
                                }

                            } else{
                                response.push({
                                    id: user[i]._id,
                                    username: user[i].username,
                                    fullName: user[i].firstName +" "+ user[i].lastName
                                }); 
                            }
                        }
                    } else{
                        console.log("Friends is NULL")
                        // response.push({
                        //     id: user[i]._id,
                        //     username: user[i].username,
                        //     fullName: user[i].firstName +" "+ user[i].lastName
                        // });
                        if(Requests){
                            console.log("Requests hn")
                            console.log(user[i].username, " : ", (Requests.incoming.some(inc => inc.senderId == user[i]._id) || Requests.outgoing.some(o => o.receiverId == user[i]._id)));

                            if (Requests.incoming.some(inc => inc.senderId == user[i]._id) || Requests.outgoing.some(o => o.receiverId == user[i]._id)){
                                console.log("Request is there, now what.");
                            } else{
                                console.log("Else mein aaye muamalat")
                                response.push({
                                    id: user[i]._id,
                                    username: user[i].username,
                                    fullName: user[i].firstName +" "+ user[i].lastName
                                });

                            }

                        } else{
                            console.log("ghalat hoguya")
                            response.push({
                                id: user[i]._id,
                                username: user[i].username,
                                fullName: user[i].firstName +" "+ user[i].lastName
                            }); 
                        }

                    }        
            }
            res.status(200).json({
                searchResults: response
            });
        
            } else{
                res.status(200).json({
                    message: "No User Found", searchResults: []
                })
            }  
        }else{
            res.status(200).json({
                message: "No User Found", searchResults: []
            })
        }      
    } catch{
        res.status(500).json({
            success: false,
            message: "Internal Server Error, when cancelling User Friend Request."
        });
    }


}

const postCancelRequest = async(req, res) => {
    let {userId, receiverId} = req.body;
    
    await Promise.all([
        FriendRequests.updateOne({playerId: userId}, {$pull : {outgoing: {receiverId: receiverId}}}),
        FriendRequests.updateOne({playerId:receiverId},{$pull: {
            incoming: {senderId: userId}
        }})
    ]);

    res.status(200).json({
        success: true,
        message: "Successfully cancelled user's request"
    });
} 

//One schedular function is remaining -> which at the end of each day, pull all rejected requests out from every document in Friend Requests Collection.

module.exports = {
    postAddFriendRequest,
    getFriendshipHubPageData,
    getFriendData,
    getUserFriendRequests,
    patchAcceptFriendRequest,
    patchRejectFriendRequest,
    postSearchFriend,
    postCancelRequest,

};