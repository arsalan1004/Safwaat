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
            xp:user.totalXp
        })
    }
    res.status(200).json({
        friends: (response.length == 0) ? "Looks like you're starting fresh! Why not connect with others to build your friend list?" : response
    })
}


const getFriendList = async(userId) => {
    return new Promise( 
        async(resolve, reject) => {
            try{
                // let {userId}= req.body;
                let Friends = await FriendList.findOne({
                    playerId: userId
                });
                console.log(Friends);
                let response = [];
                if(Friends){
                    for(let i=0; i<Friends.friendList.length; i++){
                        let user = await userModel.findById(Friends.friendList[i].friendId);
                        response.push({
                            id: user._id,
                            username: user.username,
                            fullName: user.firstName+" "+user.lastName,
                            level: user.xpLevel,
                            xp:user.totalXp
                        })
                    }
                    // // res.status(200).json({
                    // //     friends: (response.length == 0) ? "Looks like you're starting fresh! Why not connect with others to build your friend list?" : response
                    // })
                    console.log("Sahi Sahi")
                    resolve(response);

                } else{
                    resolve([]);
                }
            
            }catch{
                reject([]);
            }
        }
    )
}

module.exports = {
    getFriends, getFriendList

}